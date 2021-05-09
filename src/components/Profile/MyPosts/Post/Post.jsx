import s from "./Post.module.scss";

const Post = () => {
  return (
    <div className={s.post}>
      <img className={s.postImage} src="https://i.guim.co.uk/img/media/8a13052d4db7dcd508af948e5db7b04598e03190/0_294_5616_3370/master/5616.jpg?width=620&quality=85&auto=format&fit=max&s=e0fc927800e51cc02cdf509d8d64d9ca" alt="post"/>
      <div className={s.postText}>post 1</div>
    </div>
  );
};

export default Post;
