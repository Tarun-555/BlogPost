// import { createPost } from "../../utils/actions/post";
import { PostForm } from "@/components/PostForm";
import { auth } from "../../../../auth";
import { redirect } from "next/navigation";

const CreatePost = async () => {
  const session = await auth();

  if (!session) {
    redirect("/");
  }

  return (
    <div>
      <div className="banner !h-[180px]">
        <div className="custom-header">Create Post</div>
      </div>
      <PostForm />
    </div>
  );
};

export default CreatePost;
