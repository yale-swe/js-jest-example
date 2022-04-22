import app from "../src/app.js";
import request from "supertest";

describe("JS Jest Example Tests", () => {
  it("should send the right payload", async () => {
    const res = await request(app).get("/hello");
    console.log(res);
    expect(res.status).toEqual(200);
  });
});
