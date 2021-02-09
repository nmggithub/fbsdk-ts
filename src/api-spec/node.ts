import { FacebookAppBase } from '../index';
import { DePromise, DeepPartial } from '../util';
import path from 'path';
import { APISpec } from '.';

export type NodeGetter<ThisNode extends CRUDNodeInfo, Edges extends CRUDEdgeInfoSet> = (
    id?: string
) => Node<ThisNode, Edges>;

export interface CRUDNodeInfo {
    read_params?: { [key: string]: any };
    type: any;
    create_params?: { [key: string]: any };
    create_return?: any;
    update_params?: { [key: string]: any };
    update_return?: any;
    delete_params?: { [key: string]: any };
    delete_return?: any;
}

export interface CRUDEdgeInfo extends CRUDNodeInfo {
    edge: string;
}
export type CRUDEdgeInfoSet = { [key: string]: CRUDEdgeInfo };

interface CRUDNode<ThisNode extends CRUDNodeInfo> {
    read: <FieldsTuple extends (keyof ThisNode['type'])[]>(
        access_token: string,
        fields?: (keyof ThisNode['type'])[],
        params?: Partial<ThisNode['read_params']>
    ) => Promise<Pick<GraphAPIResponse<ThisNode['type']>, FieldsTuple[number] | 'id'>>;
}

interface CRUDEdge<ThisEdge extends CRUDEdgeInfo> {
    read: (
        ...args: Parameters<CRUDNode<ThisEdge>['read']>
    ) => Promise<EdgeResponse<DePromise<ReturnType<CRUDNode<ThisEdge>['read']>>>>;
    create: (
        access_token: string,
        data: ThisEdge['type'],
        params?: Partial<ThisEdge['create_params']>
    ) => Promise<ThisEdge['create_return']>;
}

export default class Node<ThisNode extends CRUDNodeInfo, Edges extends CRUDEdgeInfoSet = any>
    implements CRUDNode<ThisNode> {
    constructor(
        private GraphAPI: FacebookAppBase<APISpec>['GraphAPI'],
        public Edges: {
            [edge in keyof Edges]: Edge<Edges[edge]>;
        },
        private id?: string
    ) {}
    public read = async <FieldsTuple extends (keyof ThisNode['type'])[]>(
        access_token: string,
        fields?: (keyof ThisNode['type'])[],
        params?: Partial<ThisNode['read_params']>
    ) =>
        await this.GraphAPI.get<
            Pick<GraphAPIResponse<ThisNode['type']>, FieldsTuple[number] | 'id'>,
            ThisNode['read_params']
        >(
            this.id,
            Object.assign(Object.assign(params ?? {}, { access_token }), {
                fields: fields?.toString(),
            })
        );
}

export class Edge<ThisEdge extends CRUDEdgeInfo> implements CRUDEdge<ThisEdge> {
    constructor(
        private edge: ThisEdge['edge'],
        private GraphAPI: FacebookAppBase<APISpec>['GraphAPI'],
        private id?: string
    ) {}
    public read = async <FieldsTuple extends (keyof ThisEdge['type'])[]>(
        access_token: string,
        fields?: (keyof ThisEdge['type'])[],
        params?: DeepPartial<ThisEdge['read_params']>
    ) =>
        this.GraphAPI.get<
            EdgeResponse<Pick<GraphAPIResponse<ThisEdge['type']>, FieldsTuple[number] | 'id'>>,
            DeepPartial<ThisEdge['read_params']>
        >(
            path.join(this.id, this.edge),
            Object.assign(Object.assign(params ?? {}, { access_token }), {
                fields: fields?.toString(),
            })
        );
    public create = async (
        access_token: string,
        data: ThisEdge['type'],
        params?: Partial<ThisEdge['create_params']>
    ) =>
        this.GraphAPI.post<
            ThisEdge['create_return'],
            ThisEdge['type'],
            DeepPartial<ThisEdge['read_params']>
        >(
            path.join(this.id, this.edge),
            data,
            Object.assign(params ?? {}, { access_token })
        );
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

type GraphAPIResponse<T> = {
    [K in keyof T]: T[K] extends string | number | boolean | string[] | number[] | boolean[]
        ? T[K]
        : T[K] extends Array<infer U>
        ? EdgeResponse<GraphAPIResponse<U>>
        : 'id' extends keyof T[K]
        ? Pick<T[K], 'id'>
        : T[K];
};
