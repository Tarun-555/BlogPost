import Navbar from "@/components/Navbar";
import Form from "next/form";
import Search from "@/components/Search";
import { getAllPosts } from "@/utils/actions/post";
import { Suspense } from "react";
import Posts from "@/components/Posts";
// import "./../../utils/db";

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
          <Suspense>
            <Posts posts={posts} />
          </Suspense>
        </ul>
      </section>
    </div>
  );
};

export default Home;
