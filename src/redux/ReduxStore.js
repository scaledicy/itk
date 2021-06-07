import { combineReducers, createStore } from "redux";
import dialogsReducer from "./DialogsReducer";
import friendsReducer from "./FriendsReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebarPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
