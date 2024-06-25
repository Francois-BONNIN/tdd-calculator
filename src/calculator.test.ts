import { expect, test } from "vitest";
import { add } from "./calculator";

test("should return 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself for a single number string", () => {
  expect(add("1")).toBe(1);
});
