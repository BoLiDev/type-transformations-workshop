import { Equal, Expect } from "../helpers/type-utils";

// Generic is essentially the function in typescript, take type as input and return a type
type ReturnWhatIPassIn<T> = T;

type tests = [
  Expect<Equal<ReturnWhatIPassIn<1>, 1>>,
  Expect<Equal<ReturnWhatIPassIn<"1">, "1">>,
  Expect<Equal<ReturnWhatIPassIn<true>, true>>,
  Expect<Equal<ReturnWhatIPassIn<false>, false>>,
  Expect<Equal<ReturnWhatIPassIn<null>, null>>
];
