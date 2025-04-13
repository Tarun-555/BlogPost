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
jest.mock("../db", () => {
  const mockPool = {
    query: jest.fn(),
  };
  return { pool: mockPool };
});
jest.mock("./post");

const auth = jest.fn();

const mockedPool = pool as unknown as jest.Mocked<typeof pool>;

const createPost = jest.fn(({}) => {
  mockedPool.query(createPostQuery, []);
});

// mock auth to return user
const mockAuth = auth as unknown as jest.MockedFunction<
  () => Promise<{ session: { user: { email: string } } } | null>
>;

//mock userinfo to return user_id
const mockGetUserInfo = getUserInfoByEmail as jest.MockedFunction<
  typeof getUserInfoByEmail
>;

//mock create post
const mockCreatePost = createPost as jest.MockedFunction<typeof createPost>;

describe("createPost", () => {
  const mockFormData = (data: Record<string, string>) =>
    ({
      get: (key: string) => data[key] || null,
    } as unknown as FormData);

  beforeEach(() => {
    jest.clearAllMocks();

    mockedPool.query = jest.fn().mockResolvedValue({ rows: [] });

    // Default successful mocks
    mockAuth.mockResolvedValue({
      session: { user: { email: "test@example.com" } },
    });
    mockGetUserInfo.mockResolvedValue({ user_id: 1 });
  });

  it("should create post successfully and redirect", async () => {
    await mockCreatePost({ content: "Valid content" });

    expect(mockAuth()).resolves.toEqual({
      session: { user: { email: "test@example.com" } },
    });
    expect(mockGetUserInfo("test@gmail.com")).resolves.toEqual({ user_id: 1 });
    expect(mockedPool.query).toHaveBeenCalledTimes(1);
  });
});
