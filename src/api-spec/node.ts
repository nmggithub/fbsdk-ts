import { FacebookAppBase } from '../index';
import { DePromise, DeepPartial } from '../util';
import { APISpec } from '.';

export type NodeGetter<
    ThisNode extends CRUDNodeInfo,
    Edges extends CRUDEdgeInfoSet,
> = (id?: string) => Node<ThisNode, Edges>;

export interface CRUDNodeInfo {
    // create info
    create_type?: any;
    create_params?: { [key: string]: any };
    create_return?: any;
    // read info
    read_type?: never;
    read_params?: { [key: string]: any };
    read_return?: any;
    // update info
    update_type?: any;
    update_params?: { [key: string]: any };
    update_return?: any;
    // delete info
    delete_type?: never;
    delete_params?: { [key: string]: any };
    delete_return?: any;
}

export interface CRUDEdgeInfo extends CRUDNodeInfo {
    edge: string;
}
export type CRUDEdgeInfoSet = { [key: string]: CRUDEdgeInfo };

interface CRUDNode<ThisNode extends CRUDNodeInfo> {
    read: <FieldsTuple extends (keyof ThisNode['read_return'])[]>(
        access_token: string,
        fields?: FieldsTuple,
        params?: Partial<ThisNode['read_params']>,
    ) => Promise<
        Pick<
            GraphAPIResponse<ThisNode['read_return']>,
            FieldsTuple[number] | 'id'
        >
    >;
    delete: (
        access_token: string,
        params?: Partial<ThisNode['delete_params']>,
    ) => Promise<ThisNode['delete_return']>;
}

interface CRUDEdge<ThisEdge extends CRUDEdgeInfo> {
    read: (
        ...args: Parameters<CRUDNode<ThisEdge>['read']>
    ) => Promise<
        EdgeResponse<DePromise<ReturnType<CRUDNode<ThisEdge>['read']>>>
    >;
    create: (
        access_token: string,
        data: Partial<ThisEdge['create_type']>,
        params?: Partial<ThisEdge['create_params']>,
    ) => Promise<ThisEdge['create_return']>;
}

export default class Node<
    ThisNode extends CRUDNodeInfo,
    Edges extends CRUDEdgeInfoSet = any,
> implements CRUDNode<ThisNode>
{
    constructor(
        private GraphAPI: FacebookAppBase<APISpec>['GraphAPI'],
        private id?: string,
    ) {}
    public Edge<T extends keyof Edges>(edge: T) {
        return new Edge<Edges[T]>(edge as string, this.GraphAPI);
    }
    public read = async <FieldsTuple extends (keyof ThisNode['read_return'])[]>(
        access_token: string,
        fields?: FieldsTuple,
        params?: Partial<ThisNode['read_params']>,
    ) =>
        await this.GraphAPI.get<
            Pick<
                GraphAPIResponse<ThisNode['read_return']>,
                FieldsTuple[number] | 'id'
            >,
            ThisNode['read_params']
        >(
            this.id,
            Object.assign(Object.assign(params ?? {}, { access_token }), {
                fields: fields?.toString(),
            }),
        );
    public delete = async (
        access_token: string,
        params?: Partial<ThisNode['delete_params']>,
    ) =>
        await this.GraphAPI.delete<
            ThisNode['delete_return'],
            ThisNode['delete_params']
        >(this.id, Object.assign(params ?? {}, { access_token }));
}

export class Edge<ThisEdge extends CRUDEdgeInfo> implements CRUDEdge<ThisEdge> {
    constructor(
        private edge: ThisEdge['edge'],
        private GraphAPI: FacebookAppBase<APISpec>['GraphAPI'],
        private id?: string,
    ) {}
    public read = async <FieldsTuple extends (keyof ThisEdge['read_return'])[]>(
        access_token: string,
        fields?: FieldsTuple,
        params?: DeepPartial<ThisEdge['read_params']>,
    ) =>
        this.GraphAPI.get<
            EdgeResponse<
                Pick<
                    GraphAPIResponse<ThisEdge['read_return']>,
                    FieldsTuple[number] | 'id'
                >
            >,
            DeepPartial<ThisEdge['read_params']>
        >(
            `${this.id}/${this.edge}`,
            Object.assign(Object.assign(params ?? {}, { access_token }), {
                fields: fields?.toString(),
            }),
        );
    public create = async (
        access_token: string,
        data: Partial<ThisEdge['create_type']>,
        params?: Partial<ThisEdge['create_params']>,
    ) =>
        this.GraphAPI.post<
            ThisEdge['create_return'],
            ThisEdge['create_type'],
            DeepPartial<ThisEdge['read_params']>
        >(
            `${this.id}/${this.edge}`,
            data,
            Object.assign(params ?? {}, { access_token }),
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

export type GraphAPIResponse<T> = {
    [K in keyof T]: T[K] extends
        | string
        | number
        | boolean
        | string[]
        | number[]
        | boolean[]
        ? T[K]
        : T[K] extends Array<infer U>
        ? EdgeResponse<GraphAPIResponse<U>>
        : 'id' extends keyof T[K]
        ? K extends 'from' | 'to'
            ? T[K]
            : Pick<T[K], 'id'>
        : T[K];
};
