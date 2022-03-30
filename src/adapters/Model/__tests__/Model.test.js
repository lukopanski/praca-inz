import { describe, expect, test } from "vitest";
import Model from "@/adapters/Model/Model.js";

describe("Model adapter class", () => {
  test.concurrent(
    "should have all necessary functions from the adapting module",
    () => {
      const model = new Model();

      expect(model.model.initialize).toBeDefined();
    }
  );
});
