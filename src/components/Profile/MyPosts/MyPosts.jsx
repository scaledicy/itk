import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import Button from "@material-ui/core/Button";
import React from "react";

const MyPosts = props => {
  let postEl = props.posts.map(el => <Post key={el.id} id={el.id} message={el.message} likes={el.likes}/>);

  let newPostEl = React.createRef();

  let addPost = () => {
    let text = newPostEl.current.value;
    props.addPost(text);
    newPostEl.current.value = '';
  }

  return (
    <>
      <div className={s.createPost}>
        <textarea ref={newPostEl} className={s.postTextarea} />
        <Button onClick={addPost} variant='contained' color='primary'>Add post</Button>
      </div>
      <div className={s.postsContainer}>
        {postEl}
      </div>
    </>
  );
};

export default MyPosts;
