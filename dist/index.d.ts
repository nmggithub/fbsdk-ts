import { AxiosInstance } from 'axios';
import { APISpec, APISpecNodeCollection, APIv9 } from './api-spec';
interface FacebookAppConfig {
    readonly appId: string;
    readonly appSecret: string;
}
export declare abstract class FacebookAppBase<API extends APISpec> {
    private config;
    protected graphAPIAxiosInstance: AxiosInstance;
    constructor(config: FacebookAppConfig);
    protected GraphAPI: {
        get: <ReturnType_1, ParamsType = any>(endpoint: string, params?: ParamsType & {
            access_token: string;
        }) => Promise<ReturnType_1>;
        post: <ReturnType_2, DataType = any, ParamsType_1 = any>(endpoint: string, _data: DataType, _params?: ParamsType_1 & {
            access_token: string;
        }) => Promise<ReturnType_2>;
    };
    protected abstract _Nodes: APISpecNodeCollection<API>;
}
export declare abstract class FacebookAppNoExposedNodes extends FacebookAppBase<APIv9> {
    constructor(config: FacebookAppConfig);
    protected _Nodes: APISpecNodeCollection<APIv9>;
}
export declare class FacebookApp extends FacebookAppNoExposedNodes {
    Nodes: APISpecNodeCollection<APIv9>;
}
export { APISpec };
