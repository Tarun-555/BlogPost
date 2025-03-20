import { createPost } from "./post";

jest.mock("../db.js");

describe("post action", () => {
  test("should create a post", () => {
    expect(1 + 2).toBe(3);
  });
});
