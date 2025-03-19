const createUserQuery = `INSERT INTO users (name, email, profileImg) VALUES ($1, $2, $3) RETURNING *`;

const getUserQuery = `SELECT * from users where users.email=$1`;

const getAuthorInfoQuery = `SELECT * from users where users.user_id=$1`;

//    user_id INT NOT NULL PRIMARY KEY,
//    email TEXT,
//    name TEXT,
//    profileImg TEXT

export { createUserQuery, getUserQuery, getAuthorInfoQuery };
