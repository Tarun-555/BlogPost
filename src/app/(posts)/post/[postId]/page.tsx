import { bebas_neue, roboto } from "@/app/layout";
import MarkdownPreview from "@/components/MarkdownPreview";
import { getPostById } from "@/utils/actions/post";
import { getAuthorByPostId } from "@/utils/actions/user";
import Image from "next/image";
// import MarkdowmPreview from "@uiw/react-markdown-preview";

const dummyAuthorImg =
  "https://imgs.search.brave.com/a77ewf5mkBES0JGG9_O7ZXD54dG6hNKUNIIZ56lozjc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ3/NjE3MDk2OS9waG90/by9wb3J0cmFpdC1v/Zi15b3VuZy1tYW4t/cmVhZHktZm9yLWpv/Yi1idXNpbmVzcy1j/b25jZXB0LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13OFNs/S3YtNHU2eFl5VTA3/Q1hlQlJ2Zlc2RjBp/WXgtYTdIUjJDaE04/WmJVPQ";

const PostDetailPage = async ({ params }: { params: { postId: number } }) => {
  const { postId } = params;
  const post = await getPostById(postId);
  const author = await getAuthorByPostId(post.created_by);
  console.log("data from id", post, postId, params, author);

  return (
    <div>
      <div id="post-container" className="px-8 pb-8 post-container">
        <div className="flex justify-center px-1 mb-5">
          <Image
            src={post.imageurl}
            width={500}
            height={100}
            style={{ width: "98%", height: "450px", objectFit: "contain" }}
            alt="post-img"
          />
        </div>
        <div className="author-info px-8 flex  justify-between">
          <h1
            className={`text-4xl font-extrabold ${bebas_neue.className} tracking-[1px]`}
          >
            {post.title}
          </h1>
          <div className="flex items-center gap-3.5">
            <Image
              src={dummyAuthorImg}
              placeholder="empty"
              height={50}
              width={50}
              alt="author"
              style={{ height: 50, width: 50, objectFit: "cover" }}
              className="rounded-[50px]"
            />
            <div className="flex flex-col text-sm">
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
              <span>{author.name}</span>
            </div>
          </div>
        </div>
        <h3 className={`text-2xl px-8 mb-3 ${roboto.className}`}>
          {post.description}
        </h3>
        <div className="px-8 [&_wmde-markdown]:!bg-amber">
          <MarkdownPreview content={post.content} />
        </div>
      </div>
    </div>
  );
};

export default PostDetailPage;
