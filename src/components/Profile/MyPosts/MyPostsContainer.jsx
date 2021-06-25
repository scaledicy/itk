import { useDispatch, useSelector } from 'react-redux'
import { addPost } from 'redux/ProfileReducer'
import MyPosts from './MyPosts'

const MyPostsContainer = () => {
    const dispatch = useDispatch()

    const addPostHandler = addNewPost => dispatch(addPost(addNewPost))
    const posts = useSelector(state => state.profilePage.posts)

    return <MyPosts addPost={addPostHandler} posts={posts} />
}

export default MyPostsContainer
