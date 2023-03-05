import { Equal, Expect } from "../helpers/type-utils";

type Route =
  | {
      route: "/";
      search: {
        page: string;
        perPage: string;
      };
    }
  | { route: "/about" }
  | { route: "/admin" }
  | { route: "/admin/users" };

// type RoutesObject = {
//   [K in Route as K["route"]]: K extends { search: Record<string, string> }
//     ? K["search"]
//     : never;
// };

// NOTE: should use infer since we don't know the type of search
type RoutesObject = {
  [K in Route as K["route"]]: K extends { search: infer S } ? S : never;
};
type tests = [
  Expect<
    Equal<
      RoutesObject,
      {
        "/": {
          page: string;
          perPage: string;
        };
        "/about": never;
        "/admin": never;
        "/admin/users": never;
      }
    >
  >
];
