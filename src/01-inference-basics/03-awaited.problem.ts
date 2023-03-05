import { Equal, Expect } from "../helpers/type-utils";

const getUser = () => {
  return Promise.resolve({
    id: "123",
    name: "John",
    email: "john@example.com",
  });
};

// type PromiseValue<T> = T extends Promise<infer R> ? R : never;
// type ReturnValue = PromiseValue<ReturnType<typeof getUser>>;

// TODO: How awaited is implemented
type ReturnValue = Awaited<ReturnType<typeof getUser>>;

type tests = [
  Expect<Equal<ReturnValue, { id: string; name: string; email: string }>>
];
