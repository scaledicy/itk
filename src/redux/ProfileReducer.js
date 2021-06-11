import { profileAPI } from "api/api";

const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        { id: 1, message: "Hi, how are you?", likes: 12 },
        { id: 2, message: "It's my first post", likes: 11 },
    ],
    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: 5,
                        message: action.newPostText,
                        likesCount: 0,
                    },
                ],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };
        }
        default:
            return state;
    }
};

export default profileReducer;

//Actions creators
export const addPost = newPostText => ({ type: ADD_POST, newPostText });
export const setUserProfile = profile => ({
    type: SET_USER_PROFILE,
    profile,
});
export const setStatus = status => ({
    type: SET_STATUS,
    status,
});

//Thunk actions creators
export const fetchUserProfile = userId => dispatch => {
    profileAPI.getProfile(userId).then(data => dispatch(setUserProfile(data)));
};

export const getStatus = userId => dispatch => {
    profileAPI.getStatus(userId).then(data => {
        dispatch(setStatus(data));
    });
};

export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status).then(data => {
        if (data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    });
};
