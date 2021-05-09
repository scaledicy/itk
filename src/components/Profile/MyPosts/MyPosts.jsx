import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import Button from "@material-ui/core/Button";

const MyPosts = () => {
  return (
    <>
      <div className={s.createPost}>
        <textarea className={s.postTextarea} />
        <Button variant='contained' color='primary'>Add post</Button>
      </div>
      <div className={s.postsContainer}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default MyPosts;
