import { combineReducers, createStore } from "redux";
import dialogsReducer from "./DialogsReducer";
import friendsReducer from "./FriendsReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebarPage: friendsReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;
