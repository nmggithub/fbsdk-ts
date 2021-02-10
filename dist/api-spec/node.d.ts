import { FacebookAppBase } from '../index';
import { DePromise, DeepPartial } from '../util';
import { APISpec } from '.';
export declare type NodeGetter<ThisNode extends CRUDNodeInfo, Edges extends CRUDEdgeInfoSet> = (id?: string) => Node<ThisNode, Edges>;
export interface CRUDNodeInfo {
    create_type?: any;
    create_params?: {
        [key: string]: any;
    };
    create_return?: any;
    read_type?: never;
    read_params?: {
        [key: string]: any;
    };
    read_return?: any;
    update_type?: any;
    update_params?: {
        [key: string]: any;
    };
    update_return?: any;
    delete_type?: never;
    delete_params?: {
        [key: string]: any;
    };
    delete_return?: any;
}
export interface CRUDEdgeInfo extends CRUDNodeInfo {
    edge: string;
}
export declare type CRUDEdgeInfoSet = {
    [key: string]: CRUDEdgeInfo;
};
interface CRUDNode<ThisNode extends CRUDNodeInfo> {
    read: <FieldsTuple extends (keyof ThisNode['read_return'])[]>(access_token: string, fields?: (keyof ThisNode['read_return'])[], params?: Partial<ThisNode['read_params']>) => Promise<Pick<GraphAPIResponse<ThisNode['read_return']>, FieldsTuple[number] | 'id'>>;
    delete: (access_token: string, params?: Partial<ThisNode['delete_params']>) => Promise<ThisNode['delete_return']>;
}
interface CRUDEdge<ThisEdge extends CRUDEdgeInfo> {
    read: (...args: Parameters<CRUDNode<ThisEdge>['read']>) => Promise<EdgeResponse<DePromise<ReturnType<CRUDNode<ThisEdge>['read']>>>>;
    create: (access_token: string, data: Partial<ThisEdge['create_type']>, params?: Partial<ThisEdge['create_params']>) => Promise<ThisEdge['create_return']>;
}
export default class Node<ThisNode extends CRUDNodeInfo, Edges extends CRUDEdgeInfoSet = any> implements CRUDNode<ThisNode> {
    private GraphAPI;
    Edges: {
        [edge in keyof Edges]: Edge<Edges[edge]>;
    };
    private id?;
    constructor(GraphAPI: FacebookAppBase<APISpec>['GraphAPI'], Edges: {
        [edge in keyof Edges]: Edge<Edges[edge]>;
    }, id?: string);
    read: <FieldsTuple extends (keyof ThisNode["read_return"])[]>(access_token: string, fields?: (keyof ThisNode['read_return'])[], params?: Partial<ThisNode['read_params']>) => Promise<Pick<GraphAPIResponse<ThisNode["read_return"]>, "id" | FieldsTuple[number]>>;
    delete: (access_token: string, params?: Partial<ThisNode['delete_params']>) => Promise<ThisNode["delete_return"]>;
}
export declare class Edge<ThisEdge extends CRUDEdgeInfo> implements CRUDEdge<ThisEdge> {
    private edge;
    private GraphAPI;
    private id?;
    constructor(edge: ThisEdge['edge'], GraphAPI: FacebookAppBase<APISpec>['GraphAPI'], id?: string);
    read: <FieldsTuple extends (keyof ThisEdge["read_return"])[]>(access_token: string, fields?: (keyof ThisEdge['read_return'])[], params?: DeepPartial<ThisEdge['read_params']>) => Promise<EdgeResponse<Pick<GraphAPIResponse<ThisEdge["read_return"]>, "id" | FieldsTuple[number]>>>;
    create: (access_token: string, data: Partial<ThisEdge['create_type']>, params?: Partial<ThisEdge['create_params']>) => Promise<ThisEdge["create_return"]>;
}
interface EdgeResponse<NodeType> {
    data: NodeType[];
    paging: Pagination;
    summary?: any;
}
interface Pagination {
    cursors?: {
        after: string;
        before: string;
    };
    previous: string;
    next: string;
}
declare type GraphAPIResponse<T> = {
    [K in keyof T]: T[K] extends string | number | boolean | string[] | number[] | boolean[] ? T[K] : T[K] extends Array<infer U> ? EdgeResponse<GraphAPIResponse<U>> : 'id' extends keyof T[K] ? Pick<T[K], 'id'> : T[K];
};
export {};
