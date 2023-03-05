import { Equal, Expect } from "../helpers/type-utils";

type Fruit =
  | {
      name: "apple";
      color: "red";
    }
  | {
      name: "banana";
      color: "yellow";
    }
  | {
      name: "orange";
      color: "orange";
    };

type TransformedFruit = keyof {
  [K in Fruit as `${K["name"]}:${K["color"]}`]: any;
};

type tests = [
  Expect<
    Equal<TransformedFruit, "apple:red" | "banana:yellow" | "orange:orange">
  >
];
