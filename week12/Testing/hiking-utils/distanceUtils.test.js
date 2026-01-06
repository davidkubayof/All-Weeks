import test from "node:test";
import assert from "node:assert";
import { kmToMeters } from "./distanceUtils.js";

test.describe("tests kmToMeters", () => {
  test("kmToMeters with valid input and valid result", () => {
    assert.strictEqual(kmToMeters(1000000), 1000000000);
    assert.strictEqual(kmToMeters("35.1"), 35100);
    assert.strictEqual(kmToMeters("0"), 0);
    assert.strictEqual(kmToMeters(false), 0);
    assert.strictEqual(kmToMeters(true), 1000);
    assert.strictEqual(kmToMeters(null), 0);
  });

  test("worng input", () => {
    assert.strictEqual(kmToMeters(), false);
    assert.strictEqual(kmToMeters([]), false);
    assert.strictEqual(kmToMeters("30KMH"), false);
  });
});

