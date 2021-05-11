import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import Button from "@material-ui/core/Button";

const MyPosts = props => {
  let postEl = props.posts.map(el => <Post key={el.id} id={el.id} message={el.message} likes={el.likes}/>);

  return (
    <>
      <div className={s.createPost}>
        <textarea className={s.postTextarea} />
        <Button variant='contained' color='primary'>Add post</Button>
      </div>
      <div className={s.postsContainer}>
        {postEl}
      </div>
    </>
  );
};

export default MyPosts;
