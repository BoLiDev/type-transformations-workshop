import { Equal, Expect } from "../helpers/type-utils";

// Use type transformation instead of importing the type everywhere
interface MyComplexInterface<Event, Context, Name, Point> {
  getEvent: () => Event;
  getContext: () => Context;
  getName: () => Name;
  getPoint: () => Point;
}

type Example = MyComplexInterface<
  "click",
  "window",
  "my-event",
  { x: 12; y: 14 }
>;

type GetPoint<T> = T extends MyComplexInterface<any, any, any, infer Point>
  ? Point
  : never;

type tests = [Expect<Equal<GetPoint<Example>, { x: 12; y: 14 }>>];
