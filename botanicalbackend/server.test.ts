import { assert } from "console";
import request from "supertest";
import express from "express";

import setupRoutes from "./src/setupRoutes";

const app = express();
setupRoutes(app);

describe("Static Routes", () => {
  it(`responds with "GET to /welcome" text and 200 status code`, async () => {
    let res = await request(app)
      .get("/api/v1/welcome")
      .expect(200);

    expect(res.text).toContain('Welcome');
  });
});

const verbs = [
  "get",
  "post",
  "patch",
  "put",
  "delete",
];