import { Equal, Expect } from "../helpers/type-utils";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type ValueOf<T> = T[keyof T];

type ValuesAsUnionOfTuples = ValueOf<{
  [K in keyof Values]: [K, Values[K]];
}>;

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
];
