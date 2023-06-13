import { appendEllipsis } from "../src/index";
import { expect, describe, it } from "vitest";

describe("appendEllipsis", () => {
  it("should append ellipsis to the input string", () => {
    const result = appendEllipsis("Hello, world");
    expect(result).toBe("Hello, world...");
  });
});
