const PostTable = `CREATE TABLE IF NOT EXISTS posts (
   post_id SERIAL NOT NULL PRIMARY KEY,
   title TEXT,
   description TEXT,
   content TEXT,
   imageUrl TEXT,
   created_at TIMESTAMP,
   created_by uuid,
   likes INTEGER,
   comments INTEGER,
   FOREIGN KEY(created_by) REFERENCES USERS(user_id) ON DELETE CASCADE
)`;

const UserTable = `CREATE TABLE IF NOT EXISTS users (
   user_id uuid NOT NULL PRIMARY KEY DEFAULT gen_random_uuid(),
   email TEXT,
   name TEXT,
   profileImg TEXT
)`;

export { PostTable, UserTable };
