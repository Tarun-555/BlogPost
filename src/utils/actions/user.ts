import { createUserQuery, getUserQuery } from "../queries/user";
import { pool } from "./../db";

const getUserInfo = async (email: string) => {
  try {
    const res = await pool.query(getUserQuery, [email]);
    // console.log("res", res.rows[0]);
    return res.rows[0];
  } catch (err) {
    console.log("error fetching user: ", err);
  }
};

const storeUserInfo = async (user: {
  name: string;
  email: string;
  image: string;
}) => {
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

export { getUserInfo, storeUserInfo };
