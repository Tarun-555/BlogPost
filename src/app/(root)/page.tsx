import Form from "next/form";
import Search from "@/components/Search";
import { getAllPosts } from "@/utils/actions/post";
import { Suspense } from "react";
import Posts from "@/components/Posts";
import "./../../utils/db";
import FloatingBtn from "@/components/FloatingBtn";

// const getServersideProps = async () => {
//   const posts = await getAllPosts().then((res) => console.log("Query", res));
//   return {
//     props: {
//       posts,
//     },
//   };
// };
const getPosts = async () => {
  const res = await getAllPosts();
  return res;
};

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ search: string }>;
}) => {
  const query = (await searchParams).search;

  const posts = await getPosts();

  const searchedPosts =
    posts &&
    posts.filter(
      (post: { title: string; description: string }) =>
        post.title?.toLowerCase().includes(query?.toLowerCase()) ||
        post.description?.toLowerCase().includes(query?.toLowerCase())
    );

  console.log("searched posts", searchedPosts);

  return (
    <div>
      <section className="banner" id="search-banner">
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
        <ul className="posts-list px-2.5 pb-[30px]">
          <Suspense>
            <Posts posts={query ? searchedPosts : posts} />
          </Suspense>
        </ul>
        <FloatingBtn />
      </section>
    </div>
  );
};

export default Home;
