import s from "./MyPosts.module.scss";
import Post from "./Post/Post";
import Button from "@material-ui/core/Button";
import React from "react";

const MyPosts = props => {
    let postEl = props.posts.map(el => (
        <Post key={el.id} id={el.id} message={el.message} likes={el.likes} />
    ));

    let newPostEl = React.createRef();

    const onPostChange = () => {
        let text = newPostEl.current.value;
        props.onPostChangeContainer(text);
    };

    return (
        <>
            <div className={s.createPost}>
                <textarea
                    ref={newPostEl}
                    onChange={onPostChange}
                    className={s.postTextarea}
                    value={props.newPostText}
                />
                <Button
                    onClick={() => {
                        props.addPostContainer();
                    }}
                    variant='contained'
                    color='primary'
                >
                    Add post
                </Button>
            </div>
            <div className={s.postsContainer}>{postEl}</div>
        </>
    );
};

export default MyPosts;
