export declare type ValuesUnion<T> = T[keyof T];
export declare type DeepPartial<T> = {
    [P in keyof T]?: Partial<T[P]>;
};
export declare type DePromise<T> = T extends Promise<infer U> ? U : never;
