import { describe, expect, it } from "vitest";
import { add } from "../src/add";

describe("String Calculator", () => {
  it("should sum numbers with , as delimiter", () => {
    const result = add("2,4,5");
    expect(result).toBe(11);
  });
  it("should return 0 if input empty", () => {
    expect(add("")).toBe(0);
  });
  it("should throw error if input is invalid", () => {
    expect(() => add("abcd")).toThrow("Invalid input");
  });
  it("should sum numbers with \n as delimiter", () => {
    const result = add("2\\n4\\n5");
    expect(result).toBe(11);
  });
  it("should sum numbers with custom delimiter", () => {
    const result = add("//;\\n2");
    expect(result).toBe(2);
  });
  it("should sum numbers with custom delimiters and default delimiters", () => {
    expect(add("//;\\n5,6;8")).toBe(19);
    expect(add("//;\\n5\\n6;3")).toBe(14);
  });
  it("should throw error if there are negative numbers", () => {
    expect(() => add("//;\\n2;-3;5")).toThrow("negative numbers no allowed -3");
    expect(() => add("//;\\n2;-3;5;-6")).toThrow(
      "negative numbers no allowed -3 -6"
    );
  });
});
