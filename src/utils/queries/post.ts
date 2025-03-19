const getAllPostsQuery = `Select * from posts`;

const createPostQuery = `INSERT INTO posts (title, description, imageurl, content, likes, comments, created_by, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;

const getPostByIdQuery = `Select * from posts where posts.post_id=$1`;

export { getAllPostsQuery, createPostQuery, getPostByIdQuery };
