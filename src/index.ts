import axios, { AxiosError, AxiosInstance } from 'axios';
import type { APISpec, APIv9 } from './api-spec';
import Node from './api-spec/node';
import crypto from 'crypto';
import type { KnownKeys } from './util';

interface FacebookAppConfig {
    readonly appId: string;
    readonly appSecret: string;
}

interface FacebookGraphAPIError {
    message: string;
    type: string;
    code: number;
    fbtrace_id: string;
}

const getFacebookError = (e: AxiosError): Error => {
    if (!e.response) return new Error('Unexpected error');
    const { status, data } = e.response;
    if (status.toString()[0] === '4') {
        const _fbError = (<{ error: FacebookGraphAPIError }>data).error;
        const fbError = new Error();
        fbError.message = _fbError.message;
        fbError.name = _fbError.type;
        return fbError;
    } else return new Error('Unexpected error');
};

export abstract class FacebookAppBase<API extends APISpec> {
    protected abstract graphAPIAxiosInstance: AxiosInstance;

    constructor(private config: FacebookAppConfig) {}

    private makeAppSecretProof = (accessToken: string) =>
        crypto
            .createHmac('sha256', this.config.appSecret)
            .update(accessToken)
            .digest('hex')
            .toString();

    protected GraphAPI = {
        get: async <ReturnType, ParamsType = any>(
            endpoint: string,
            _params: ParamsType & { access_token: string },
        ) => {
            const params = Object.assign(_params, {
                appsecret_proof: this.makeAppSecretProof(_params.access_token),
            });
            try {
                const response = <ReturnType>(
                    (await this.graphAPIAxiosInstance.get(endpoint, { params }))
                        .data
                );
                return response;
            } catch (e) {
                throw getFacebookError(e as AxiosError<any>);
            }
        },
        post: async <ReturnType, DataType = any, ParamsType = any>(
            endpoint: string,
            data: DataType,
            _params: ParamsType & { access_token: string },
        ) => {
            const params = Object.assign(_params, {
                appsecret_proof: this.makeAppSecretProof(_params.access_token),
            });
            try {
                const response = <ReturnType>(
                    await this.graphAPIAxiosInstance.post(endpoint, data, {
                        params,
                    })
                ).data;
                return response;
            } catch (e) {
                throw getFacebookError(e as AxiosError<any>);
            }
        },
        delete: async <ReturnType, ParamsType = any>(
            endpoint: string,
            _params: ParamsType & { access_token: string },
        ) => {
            const params = Object.assign(_params, {
                appsecret_proof: this.makeAppSecretProof(_params.access_token),
            });
            try {
                const response = <ReturnType>(
                    await this.graphAPIAxiosInstance.delete(endpoint, {
                        params,
                    })
                ).data;
                return response;
            } catch (e) {
                throw getFacebookError(e as AxiosError<any>);
            }
        },
    };

    protected _Node<NodeType extends KnownKeys<API>>(
        node: NodeType,
        id?: string,
    ) {
        return new Node<API[NodeType]['node'], API[NodeType]['edges']>(
            this.GraphAPI,
            id,
        );
    }
}

export abstract class FacebookAppNoExposedNodes extends FacebookAppBase<APIv9> {
    graphAPIAxiosInstance = axios.create({
        baseURL: `https://graph.facebook.com/v9.0`,
    });
}

export class FacebookApp extends FacebookAppNoExposedNodes {
    public Node = this._Node;
}

export type { APISpec };
