import { Pool } from "pg";
import { PostTable, UserTable } from "./initDBScript";

console.log("setting up DB config");

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL,
//   ssl: {
//     rejectUnauthorized: false,
//   },
// });
const pool = new Pool({
  port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  password: process.env.POSTGRES_PASS,
  database: process.env.POSTGRES_DB,
  // only for production ssl config
  // ssl: {
  //   rejectUnauthorized: false,
  // },
});

pool
  .connect()
  .then(() => {
    console.log("Connected to Postgres: ", new Date());
    createTables();
  })
  .catch((err) => console.error("Error connecting to Postgres", err));

const createTables = async () => {
  try {
    await pool.query(UserTable);
    await pool.query(PostTable);
  } catch (err) {
    console.log("error in creating tables", err);
  }
};
// pool.query(`
//     CREATE TABLE IF NOT EXISTS posts (
//       id SERIAL NOT NULL PRIMARY KEY,
//       title TEXT,
//       description TEXT,
//       content TEXT,
//       imageUrl TEXT,
//       createdAt TIMESTAMP,
//       createdBy JSONB,
//       likes INTEGER,
//       comments INTEGER
//     )
// `);

//   id: 1,
//     title: "Post 1",
//     content: "This is the first post",
//     imageUrl:
//       "https://media.gettyimages.com/id/1581627031/photo/startup-hand-shows-a-rocket-and-icons.jpg?s=2048x2048&w=gi&k=20&c=p2AsOU6drCztDC2BecW6YDBVake6wN4doPP8ebpOMfU=",
//     createdAt: "2021-10-10T12:00:00Z",
//     createdBy: {
//       userId: 1,
//       name: "John",
//     },
//     likes: 10,
//     comments: 5,

export { pool };
