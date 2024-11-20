import { describe, expect, it } from "vitest";
import { add } from "../src/add";

describe("String Calculator", () => {
  it("should sum numbers with , as delimiter", () => {
    const result = add("2,4,5");
    expect(result).toBe(11);
  });
  it("should return 0 if input is invalid", () => {
    const result = add("abcd");
    expect(result).toBe(0);
  });
  it("should sum numbers with \n as delimiter", () => {
    const result = add("2\n4\n5");
    expect(result).toBe(11);
  });
  it("should sum numbers with custom delimiter", () => {
    const result = add("//;\n2");
    expect(result).toBe(2);
  });
  it("should throw error if there are negative numbers", () => {
    expect(() => add("//;\\n2;-3;5")).toThrow("negative numbers no allowed -3");
  });
});
