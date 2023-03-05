import { Equal, Expect } from "../helpers/type-utils";

// NOTE: type function with if else logic inside
type YouSayGoodbyeAndISayHello<TParam> = TParam extends "hello"
  ? "goodbye"
  : "hello";

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>
];
