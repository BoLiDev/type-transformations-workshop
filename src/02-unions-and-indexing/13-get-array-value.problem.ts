import { Equal, Expect } from "../helpers/type-utils";

const fruits = ["apple", "banana", "orange"] as const;
type Fruits = typeof fruits;

// NOTE: think about tuple as object whose keys are numbers
type AppleOrBanana = Fruits[0 | 1];
// NOTE: interesting... number represents 1 | 2 | 3 ...while typescript can just ignore the invalide number
type Fruit = Fruits[number];

type tests = [
  Expect<Equal<AppleOrBanana, "apple" | "banana">>,
  Expect<Equal<Fruit, "apple" | "banana" | "orange">>
];
