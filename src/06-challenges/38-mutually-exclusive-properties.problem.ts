import { Equal, Expect } from "../helpers/type-utils";

interface Attributes {
  id: string;
  email: string;
  username: string;
}

/**
 * How do we create a type helper that represents a union
 * of all possible combinations of Attributes?
 */

// Keymapping is map a uniton to another union
type MutuallyExclusive<T> = {
  [K in keyof T]: Record<K, T[K]>;
}[keyof T];

type ExclusiveAttributes = MutuallyExclusive<Attributes>;

type tests = [
  Expect<
    Equal<
      ExclusiveAttributes,
      | {
          id: string;
        }
      | {
          email: string;
        }
      | {
          username: string;
        }
    >
  >
];
