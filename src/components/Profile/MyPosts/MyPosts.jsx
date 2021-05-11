import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import Button from "@material-ui/core/Button";

let postData = [
  {id: 1, message: 'Hi, how are you?', likes: 12},
  {id: 2, message: 'It\'s my first post', likes: 11},
];

let postEl = postData.map(el => <Post id={el.id} message={el.message} likes={el.likes}/>)

const MyPosts = () => {
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
