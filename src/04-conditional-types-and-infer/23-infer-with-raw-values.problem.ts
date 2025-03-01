import { Equal, Expect } from "../helpers/type-utils";

// NOTE: infer declare a new type variable in the true branch scope
type GetDataValue<T> = T extends { data: infer TData } ? TData : never;
// type GetDataValue<T> = T extends { data: any } ? T["data"] : never;

type tests = [
  Expect<Equal<GetDataValue<{ data: "hello" }>, "hello">>,
  Expect<Equal<GetDataValue<{ data: { name: "hello" } }>, { name: "hello" }>>,
  Expect<
    Equal<
      GetDataValue<{ data: { name: "hello"; age: 20 } }>,
      { name: "hello"; age: 20 }
    >
  >,
  // Expect that if you pass in string, it
  // should return never
  Expect<Equal<GetDataValue<string>, never>>
];
