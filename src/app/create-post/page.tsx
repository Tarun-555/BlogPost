import Navbar from "@/components/Navbar";
// import { createPost } from "../../utils/actions/post";
import { PostForm } from "@/components/PostForm";

const CreatePost = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <div className="custom-header">Create Post</div>
      </div>

      <PostForm />
    </div>
  );
};

export default CreatePost;
