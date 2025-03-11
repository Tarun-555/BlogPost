const getAllPostsQuery = `Select * from posts`;

const createPostQuery = `INSERT INTO posts (title, content, imageUrl, likes, comments, createdBy) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`;

export { getAllPostsQuery, createPostQuery };
