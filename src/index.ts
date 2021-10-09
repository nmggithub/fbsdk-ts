import axios, { AxiosError, AxiosInstance } from 'axios';
import { APISpec, APIv9 } from './api-spec';
import Node from './api-spec/node';
import crypto from 'crypto';
import { KnownKeys } from './util';

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

const handleFacebookError = (e: AxiosError) => {
    const { status, data } = e.response;
    if (status.toString()[0] === '4') {
        const _fbError = (<{ error: FacebookGraphAPIError }>data).error;
        const fbError = new Error();
        fbError.message = _fbError.message;
        fbError.name = _fbError.type;
        throw fbError;
    } else throw new Error('Unexpected error');
};

export abstract class FacebookAppBase<API extends APISpec> {
    protected graphAPIAxiosInstance: AxiosInstance;

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
            _params?: ParamsType & { access_token: string },
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
                handleFacebookError(e);
            }
        },
        post: async <ReturnType, DataType = any, ParamsType = any>(
            endpoint: string,
            data: DataType,
            _params?: ParamsType & { access_token: string },
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
                handleFacebookError(e);
            }
        },
        delete: async <ReturnType, ParamsType = any>(
            endpoint: string,
            _params?: ParamsType & { access_token: string },
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
                handleFacebookError(e);
            }
        },
    };

    protected abstract _Node<NodeType extends KnownKeys<API>>(
        node: NodeType,
        id?: string,
    ): Node<unknown>;
    // protected abstract _Nodes: APISpecNodeCollection<API>;
}

export abstract class FacebookAppNoExposedNodes extends FacebookAppBase<APIv9> {
    constructor(config: FacebookAppConfig) {
        super(config);
        this.graphAPIAxiosInstance = axios.create({
            baseURL: `https://graph.facebook.com/v9.0`,
        });
    }
    protected _Node<NodeType extends KnownKeys<APIv9>>(
        node: NodeType,
        id?: string,
    ) {
        return new Node<APIv9[NodeType]['node'], APIv9[NodeType]['edges']>(
            this.GraphAPI,
            id,
        );
    }
}

export class FacebookApp extends FacebookAppNoExposedNodes {
    public Node = this._Node;
}

export { APISpec };

let app = new FacebookApp({
    appId: '',
    appSecret: '',
});
