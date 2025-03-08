import Navbar from "@/components/Navbar";
import Form from "next/form";
import Search from "@/components/Search";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Post 1",
    content: "This is the first post",
    imageUrl:
      "https://media.gettyimages.com/id/1488105061/photo/the-power-of-ai-transforming-industries-and-customer-service-a-look-into-the-future-yellow-ai.jpg?s=612x612&w=0&k=20&c=I2n0qzivdUE467LOkCe6p-QRRISHbgaHeKP0TAdsI2U=",
    createdAt: "2021-10-10T12:00:00Z",
    createdBy: {
      userId: 1,
      name: "John",
    },
    likes: 10,
    comments: 5,
  },
];

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) => {
  const query = (await searchParams).search;

  console.log("Query", query);
  return (
    <div>
      <Navbar />
      <section className="banner">
        <div className="custom-header">
          Inspire, connect, and encourage engagement with posts
        </div>
        <p className="sub-header">
          Find posts relevant to your interests and explore
        </p>
        <Form action="/" className="mt-10 relative search-form">
          <input
            type="text"
            name="search"
            placeholder="Search for posts"
            className="w-[440] px-4 py-2 rounded-4xl border-b-black border-2  relative bg-amber-50"
          />
          <Search query={query} btnType={"submit"} />
        </Form>
      </section>

      <section className="posts-container">
        {query ? (
          <h2 className="posts-header">Search for {query} posts</h2>
        ) : (
          <h2 className="posts-header">All posts</h2>
        )}
        <ul className="posts-list px-2.5">
          {posts.length > 0 &&
            posts.map((post) => (
              <div
                key={post.id}
                className="post w-2xs sm:w-2xs md:w-2xs lg:w-2xs border-4 border-[#312f2f] rounded-[10px] shadow-[3px_4px_0px_4px_#312f2f] overflow-hidden"
              >
                <div className="post-image w-full h-[200px]">
                  <Image
                    src={post.imageUrl}
                    alt="Post"
                    width={0}
                    height={0}
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
        </ul>
      </section>
    </div>
  );
};

export default Home;
