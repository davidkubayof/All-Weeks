import test, { after, before } from "node:test";
import assert from "node:assert";
import app from "../app.js";

let server
let baseUrl
before(() => {
    server = app.listen(3002)
    baseUrl = `http://localhost:3002`
})

after(()=>{
    server.close()
})

test.describe("tests GET /check-weather", () => {
  test("valid input", async () => {
    const response = await fetch(`${baseUrl}/check-weather`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        temperature: 25,
        windSpeed: 15,
      }),
    });
    const data = await response.json();
    assert.strictEqual(response.status, 200);
    assert.strictEqual(data.safe, true);
    assert.strictEqual(data.message, "All conditions are good for hiking!");
  });
});
