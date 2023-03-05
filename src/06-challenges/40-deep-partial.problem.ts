import { Equal, Expect } from "../helpers/type-utils";

type MyType = {
  a: string;
  b: number;
  c: {
    d: string;
    e: {
      f: string;
      g: {
        h: string;
        i: string;
      }[];
    };
  };
};

// type SameType<T> = {
//   [K in keyof T]: T[K];
// };
// type Foo = SameType<string>;
// type Fao = SameType<number>;
// type Foe = SameType<undefined>;
// type Fea = SameType<null>;

//NOTE: Boom
type DeepPartial<T> = T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : {
      [K in keyof T]?: DeepPartial<T[K]>;
    };

type Result = DeepPartial<MyType>;

type tests = [
  Expect<
    Equal<
      Result,
      {
        a?: string;
        b?: number;
        c?: {
          d?: string;
          e?: {
            f?: string;
            g?: {
              h?: string;
              i?: string;
            }[];
          };
        };
      }
    >
  >
];
