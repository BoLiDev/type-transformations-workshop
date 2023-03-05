import { Split } from "ts-toolbelt/out/String/Split";
import { Equal, Expect } from "../helpers/type-utils";

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

//       Split     T[K]  KeyMapping + conditional
// string ==> tuple ==> union ==> object
type ExtractPathParams<T extends string> = {
  [Token in Split<T, "/">[number] as Token extends `:${infer P}`
    ? P
    : never]: string;
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
