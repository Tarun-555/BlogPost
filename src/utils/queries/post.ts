const getAllPostsQuery = `Select * from posts`;

const createPostQuery = `INSERT INTO posts (title, description, imageUrl, content, likes, comments, createdBy, createdAt) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;

const getPostByIdQuery = `Select * from posts where posts.id=$1`;

export { getAllPostsQuery, createPostQuery, getPostByIdQuery };
