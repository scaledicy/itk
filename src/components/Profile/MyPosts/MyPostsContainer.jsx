import { connect } from "react-redux";
import { addPost } from "redux/ProfileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = state => {
    return {
        posts: state.profilePage.posts,
    };
};

const mapDispatchToProps = {
    addPost,
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
