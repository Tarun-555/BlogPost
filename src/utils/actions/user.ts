import { User } from "next-auth";
import {
  createUserQuery,
  getAuthorInfoQuery,
  getUserQuery,
} from "../queries/user";
import { pool } from "./../db";

const getUserInfoByEmail = async (email: string) => {
  try {
    const res = await pool.query(getUserQuery, [email]);
    // console.log("res", res.rows[0]);
    return res.rows[0];
  } catch (err) {
    console.log("error fetching user: ", err);
  }
};

const getAuthorByPostId = async (postId: string) => {
  console.log("post id: ", postId);

  try {
    const authorResponse = await pool.query(getAuthorInfoQuery, [postId]);
    console.log("post id: ", postId, authorResponse);
    return authorResponse.rows[0];
  } catch (err) {
    console.log("error fetching author: ", err);
  }
};

const storeUserInfo = async (user: User) => {
  try {
    const res = await pool.query(createUserQuery, [
      user.name,
      user.email,
      user.image,
    ]);
    return res.rows;
  } catch (err) {
    console.log("error fetching user: ", err);
  }
};

export { getUserInfoByEmail, storeUserInfo, getAuthorByPostId };
