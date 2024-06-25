import { expect, test } from "vitest";
import { add } from "./calculator";

test("should return 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test("should return the number itself for a single number string", () => {
  expect(add("1")).toBe(1);
});

test("should return the sum of two numbers separated by a comma", () => {
  expect(add("1,2")).toBe(3);
});

test("should return sum for unknown number of arguments", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

test("should handle newlines as separators", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("should throw an error if the string ends with a separator", () => {
  expect(() => add("1,2,")).toThrow("Invalid input: Trailing separator");
});

test("should handle different delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
  expect(add("//|\n1|2|3")).toBe(6);
  expect(add("//sep\n2sep5")).toBe(7);
});

test("should throw an error for invalid input with different delimiters", () => {
  expect(() => add("//|\n1|2,3")).toThrow(
    "'|' expected but ',' found at position 3."
  );
});
