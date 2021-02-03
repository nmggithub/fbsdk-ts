export type ValuesUnion<T> = T[keyof T];
export type DeepPartial<T> = {
    [P in keyof T]?: Partial<T[P]>;
};
export type DePromise<T> = T extends Promise<infer U> ? U : never;