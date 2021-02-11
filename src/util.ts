export type ValuesUnion<T> = T[keyof T];
export type DeepPartial<T> = {
    [P in keyof T]?: Partial<T[P]>;
};
export type DePromise<T> = T extends Promise<infer U> ? U : never;

type XORBase<T1, T2> =
    | (T1 & { [K in Exclude<keyof T2, keyof T1>]?: never })
    | (T2 & { [K in Exclude<keyof T1, keyof T2>]?: never });
type XOR2<T1, T2> = XORBase<T1, T2>;
type XOR3<T1, T2, T3> = XORBase<XORBase<T1, T2>, T3>;

type HasAtLeastTwo<T extends {}[]> = T[0] & T[1] extends undefined ? false : true;

type RemoveFirstTwo<T extends {}[]> = T extends [{}, {}, ...infer U] ? U extends {}[] ? U : never : never;

export type XOR<T extends {}[]> = HasAtLeastTwo<T> extends true
    ? HasAtLeastTwo<RemoveFirstTwo<T>> extends true
        ? XOR3<T[0], T[1], XOR<RemoveFirstTwo<T>>>
        : T[2] extends undefined
        ? XOR2<T[0], T[1]>
        : XOR3<T[0], T[1], T[2]>
    : never;