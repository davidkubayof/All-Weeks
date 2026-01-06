import test from "node:test";
import assert from "node:assert";
import { caloriesBurned } from "./calories.js";

test.describe("tests caloriesBurned", () => {
  test("caloriesBurned with valid input and valid result", () => {
    assert.strictEqual(caloriesBurned(70,5),362.6);
    assert.strictEqual(caloriesBurned(10,3.5), 36.26);
  });
  test("worng input", () => {
    assert.strictEqual(caloriesBurned(0,35), false);
    assert.strictEqual(caloriesBurned(-10,30), false);
  });
});
