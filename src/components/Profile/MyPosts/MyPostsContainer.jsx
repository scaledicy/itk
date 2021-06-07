import { connect } from "react-redux";
import { addPost, onPostChange } from "redux/ProfileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    };
};

const mapDispatchToProps = {
    addPost,
    onPostChange,
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
