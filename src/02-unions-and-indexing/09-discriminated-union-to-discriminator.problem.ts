import { Equal, Expect } from "../helpers/type-utils";

export type Event =
  | {
      type: "click";
      event: MouseEvent;
    }
  | {
      type: "focus";
      event: FocusEvent;
    }
  | {
      type: "keydown";
      event: KeyboardEvent;
    };

// NOTE: interesting to see we can do this to a discriminate union
type EventType = Event["type"];

type tests = [Expect<Equal<EventType, "click" | "focus" | "keydown">>];
