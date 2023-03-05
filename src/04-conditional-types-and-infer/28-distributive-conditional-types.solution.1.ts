import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

// NOTE: infer a type directly
type AppleOrBanana = Fruit extends infer T
  ? T extends "apple" | "banana"
    ? T
    : never
  : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
