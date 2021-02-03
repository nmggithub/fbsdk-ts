import { FacebookAppBase } from '../index';
import { DePromise, DeepPartial } from '../util';
import { APISpec } from '.';
export declare type NodeGetter<ThisNode extends CRUDNodeInfo, Edges extends CRUDEdgeInfoSet> = (id?: string) => Node<ThisNode, Edges>;
export interface CRUDNodeInfo {
    type: any;
    create_params?: {
        [key: string]: any;
    };
    read_params?: {
        [key: string]: any;
    };
    update_params?: {
        [key: string]: any;
    };
    delete_params?: {
        [key: string]: any;
    };
}
export interface CRUDEdgeInfo extends CRUDNodeInfo {
    edge: string;
}
export declare type CRUDEdgeInfoSet = {
    [key: string]: CRUDEdgeInfo;
};
interface CRUDNode<ThisNode extends CRUDNodeInfo> {
    read: <FieldsTuple extends (keyof ThisNode['type'])[]>(access_token: string, fields?: (keyof ThisNode['type'])[], params?: Partial<ThisNode['read_params']>) => Promise<Pick<GraphAPIResponse<ThisNode['type']>, FieldsTuple[number] | 'id'>>;
}
interface CRUDEdge<ThisEdge extends CRUDEdgeInfo> {
    read: (...args: Parameters<CRUDNode<ThisEdge>['read']>) => Promise<EdgeResponse<DePromise<ReturnType<CRUDNode<ThisEdge>['read']>>>>;
}
export default class Node<ThisNode extends CRUDNodeInfo, Edges extends CRUDEdgeInfoSet = any> implements CRUDNode<ThisNode> {
    private GraphAPI;
    Edges: {
        [edge in keyof Edges]: Edge<Edges[edge]>;
    };
    private id;
    constructor(GraphAPI: FacebookAppBase<APISpec>['GraphAPI'], Edges: {
        [edge in keyof Edges]: Edge<Edges[edge]>;
    }, id: string);
    read: <FieldsTuple extends (keyof ThisNode["type"])[]>(access_token: string, fields?: (keyof ThisNode['type'])[], params?: Partial<ThisNode['read_params']>) => Promise<Pick<GraphAPIResponse<ThisNode["type"]>, "id" | FieldsTuple[number]>>;
}
export declare class Edge<ThisEdge extends CRUDEdgeInfo> implements CRUDEdge<ThisEdge> {
    private edge;
    private GraphAPI;
    private id;
    constructor(edge: ThisEdge['edge'], GraphAPI: FacebookAppBase<APISpec>['GraphAPI'], id: string);
    read: <FieldsTuple extends (keyof ThisEdge["type"])[]>(access_token: string, fields?: (keyof ThisEdge['type'])[], params?: DeepPartial<ThisEdge['read_params']>) => Promise<EdgeResponse<Pick<GraphAPIResponse<ThisEdge["type"]>, "id" | FieldsTuple[number]>>>;
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
