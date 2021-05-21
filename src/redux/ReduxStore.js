import { combineReducers, createStore } from "redux";
import dialogsReducer from "./DialogsReducer";
import friendsReducer from "./FriendsReducer";
import profileReducer from "./ProfileReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebarPage: friendsReducer,
});

let store = createStore(reducers);

export default store;
