import { assert } from "console";
import request from "supertest";
import express from "express";
import "dotenv/config";

import setupRoutes from "./src/setupRoutes";

const app = express();
setupRoutes(app);

describe("User Routes", () => {
  it(`responds with 200 status code when getting`, async () => {
    let res = await request(app)
      .get("/api/v1/users")
      .expect(200);
    
  });

  const newUser = {
    email: "test" + Math.floor(Math.random() * 9) + "@jest.com",
    password: "password123"
  }

  it(`responds with 200 status code when creating new user`, async () => {
    let res = await request(app)
      .post("/api/v1/users")
      .send(newUser)
      .expect(200);

    expect(res.text).toContain('Signup successful');
  });

  it(`responds with 400 status code when user already exists`, async () => {
    let res = await request(app)
      .post("/api/v1/users")
      .send(newUser)
      .expect(400);

    expect(res.text).toContain('Email is already in use');
  });

  it(`responds with 200 status code when logging in newly created user`, async () => {
    let res = await request(app)
      .post("/api/v1/login")
      .send(newUser)
      .expect(200);

    //arbitrarily selected over 30 for token length
    expect(res.text.length).toBeGreaterThan(30);
  });
});

describe("Plant Routes", () => {
  it(`responds with 200 status code when getting first user's plants`, async () => {
    let res = await request(app)
      .get("/api/v1/plants/1")
      .expect(200);
  });
});

describe("Plant Routes", () => {
  it(`responds with 200 status code when getting first user's plants`, async () => {
    let res = await request(app)
      .get("/api/v1/plants/1")
      .expect(200);
  });
});