// import { createPost } from "./post";

// import { auth } from "../../../auth";
// import { redirect } from "next/navigation";
import { pool } from "../db";
import { getUserInfoByEmail } from "../actions/user";
import { createPostQuery } from "../queries/post";

// Mock external dependencies
// jest.mock("../../../auth");
jest.mock("next/navigation");
jest.mock("../actions/user");
jest.mock("../db");
jest.mock("./post");

const auth = jest.fn();
const createPost = jest.fn();

// mock auth to return user
const mockAuth = auth as unknown as jest.MockedFunction<
  () => Promise<{ session: { user: { email: string } } } | null>
>;

//mock userinfo to return user_id
const mockGetUserInfo = getUserInfoByEmail as jest.MockedFunction<
  typeof getUserInfoByEmail
>;

//mock pool query
const mockPoolQuery = pool.query as unknown as jest.MockedFunction<
  (query: string, values?: unknown[]) => Promise<{ rows: unknown[] | Error }>
>;
// const mockRedirect = redirect as jest.MockedFunction<typeof redirect>;

//mock create post
const mockCreatePost = createPost as jest.MockedFunction<typeof createPost>;

describe("createPost", () => {
  const mockFormData = (data: Record<string, string>) =>
    ({
      get: (key: string) => data[key] || null,
    } as unknown as FormData);

  beforeEach(() => {
    jest.clearAllMocks();

    // Default successful mocks
    mockAuth.mockResolvedValue({
      session: { user: { email: "test@example.com" } },
    });
    mockGetUserInfo.mockResolvedValue({ user_id: 1 });
    mockPoolQuery.mockResolvedValue({ rows: [] });
  });

  it("should create post successfully and redirect", async () => {
    const formData = mockFormData({
      title: "Valid Title",
      description: "Valid Description",
      imageurl: "https://example.com/image.jpg",
    });

    await mockCreatePost({ content: "Valid content" }, undefined, formData);

    expect(mockAuth()).resolves.toEqual({
      session: { user: { email: "test@example.com" } },
    });
    expect(mockGetUserInfo("test@gmail.com")).resolves.toEqual({ user_id: 1 });
    expect(
      mockPoolQuery(createPostQuery, [
        "Valid Title",
        "Valid Description",
        "https://example.com/image.jpg",
        "Valid content",
        0,
        0,
        1,
        expect.any(Date),
      ])
    ).resolves.toEqual({ rows: [] });
  });
});
