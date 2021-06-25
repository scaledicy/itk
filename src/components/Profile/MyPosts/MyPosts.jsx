import Button from '@material-ui/core/Button'
import s from './MyPosts.module.scss'
import Post from './Post/Post'
import { useFormik } from 'formik'
import { maxLength30 } from 'utils/validators/validators'

const PostForm = props => {
    const validate = maxLength30
    const formik = useFormik({
        initialValues: {
            newPostMessage: '',
        },
        validate,
        onSubmit: values => {
            props.addPost(values.newPostMessage)
        },
    })
    return (
        <form onSubmit={formik.handleSubmit} className={s.createPost}>
            <textarea
                onChange={formik.handleChange}
                className={s.postTextarea}
                value={formik.values.newPostMessage}
                name='newPostMessage'
                id='newPostMessage'
            />
            {formik.errors.newPostMessage && (
                <div>{formik.errors.newPostMessage}</div>
            )}
            <Button type='submit' variant='contained' color='primary'>
                Add post
            </Button>
        </form>
    )
}

const MyPosts = props => {
    let postEl = props.posts.map((el, i) => (
        <Post
            key={'post' + i}
            id={el.id}
            message={el.message}
            likes={el.likes}
        />
    ))

    return (
        <>
            <h1 className={s.postTitle}>My Posts</h1>
            <PostForm addPost={props.addPost} />
            <h1 style={{ fontSize: '156px' }}>useSelector</h1>
            <div className={s.postsContainer}>{postEl}</div>
        </>
    )
}

export default MyPosts
