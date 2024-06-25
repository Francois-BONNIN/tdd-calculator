import { expect, test } from "vitest";
import { add } from "./calculator";

test("should return 0 for empty string", () => {
  expect(add("")).toBe(0);
});
