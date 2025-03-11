"use client";
import Image from "next/image";

// const posts = [
//   {
//     id: 1,
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
//   },
// ];

const fallBackImg =
  "https://media.gettyimages.com/id/2080972792/photo/ai-chatbot.jpg?s=1024x1024&w=gi&k=20&c=nDNcqBqzoC76ntaqN6zCG7Gq_ZW1oTs60z4Ytl2ldXM=";

interface Post {
  id: number;
  title: string;
  content: string;
  imageurl: string;
  createdAt: string;
  createdBy: {
    userId: number;
    name: string;
  };
  likes: number;
  comments: number;
}

interface PostsProps {
  posts: Post[];
}

const Posts = ({ posts }: PostsProps) => {
  console.log("inside posts", posts);
  return (
    <div className="flex gap-10 flex-wrap justify-items-start px-[60px] mt-8">
      {posts?.length > 0 &&
        posts.map((post) => (
          <div
            key={post.id}
            className="post w-2xs sm:w-2xs md:w-2xs lg:w-2xs border-4 border-[#312f2f] rounded-[10px] shadow-[0px_4px_0px_1px_#312f2f] overflow-hidden"
          >
            <div className="post-image w-full h-[200px]">
              <Image
                src={
                  post?.imageurl?.includes("https")
                    ? post.imageurl
                    : fallBackImg
                }
                alt="Post"
                width={250}
                height={250}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
            <div className="post-content px-2.5 py-2">
              <div className="post-title text-[20px] font-bold">
                {post.title}
              </div>
              <div className="post-body text-[18px]">{post.content}</div>
              <div className="post-footer">
                <div className="post-likes text-[13px] flex gap-0.5">
                  <span>{post.likes}</span>
                  <span>Likes</span>
                </div>
                <div className="post-comments text-[13px] flex gap-0.5">
                  <span>{post.comments}</span>
                  <span>Comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Posts;
