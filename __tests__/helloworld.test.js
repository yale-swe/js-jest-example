import app from "../src/app.js";
import request from "supertest";

describe("JS Jest Example Tests", () => {
  it("should send the right payload", async () => {
    const res = await request(app).get("/hello");
    expect(res.status).toEqual(200);
    expect(res.body).toEqual({
      message: "Hello world!",
    });
  });
});
