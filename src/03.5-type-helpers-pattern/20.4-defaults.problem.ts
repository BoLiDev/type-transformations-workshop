import { Equal, Expect } from "../helpers/type-utils";

// NOTE: just like function, function can have multiple parameters and each of the parameters could have their default valuee while, there should be any paramaters defined followed by a option one
// type CreateDataShape<TData, TError extends Error | undefined = undefined, T3>
type CreateDataShape<TData, TError extends Error | undefined = undefined> = {
  data: TData;
  error: TError;
};

type tests = [
  Expect<
    Equal<
      CreateDataShape<string>,
      {
        data: string;
        error: undefined;
      }
    >
  >,
  Expect<
    Equal<
      CreateDataShape<boolean, SyntaxError>,
      {
        data: boolean;
        error: SyntaxError;
      }
    >
  >
];
