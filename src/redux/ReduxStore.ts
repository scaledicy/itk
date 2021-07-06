import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import dialogsReducer from './DialogsReducer'
import friendsReducer from './FriendsReducer'
import profileReducer from './ProfileReducer'
import usersReducer from './UsersReducer'
import authReducer from './AuthReducer'
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: dialogsReducer,
    sidebarPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer,
})

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunkMiddleware))
)

export type AppStore = ReturnType<typeof store.getState>

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store
