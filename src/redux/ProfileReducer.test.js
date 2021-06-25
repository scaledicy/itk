import profileReducer, { addPost, deletePost } from './ProfileReducer'

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likes: 12 },
        { id: 2, message: "It's my first post", likes: 11 },
    ],
}

test('length of posts should be incremented', () => {
    //1. test data
    let actionC = addPost('it-kamas.com')
    //2.action
    let newState = profileReducer(state, actionC)
    //3.expectation
    expect(newState.posts.length).toBe(3)
})

test('message of new post should be correct', () => {
    //1. test data
    let actionC = addPost('it-kamas.com')
    //2.action
    let newState = profileReducer(state, actionC)
    //3.expectation
    expect(newState.posts[2].message).toBe('it-kamas.com')
})

test('after deleting length of messages should be decrement', () => {
    //1. test data
    let actionC = deletePost(1)
    //2.action
    let newState = profileReducer(state, actionC)
    //3.expectation
    expect(newState.posts.length).toBe(1)
})
