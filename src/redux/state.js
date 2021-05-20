const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likes: 12 },
        { id: 2, message: "It's my first post", likes: 11 },
      ],
      newPostText: "itk",
    },
    messagesPage: {
      dialogs: [
        { id: 1, name: "Dmitry" },
        { id: 2, name: "Alex" },
        { id: 3, name: "Dany" },
        { id: 4, name: "Alice" },
        { id: 5, name: "Ann" },
      ],
      messages: [
        {
          id: 1,
          message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        },
        {
          id: 2,
          message:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, omnis!",
        },
        {
          id: 3,
          message:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam incidunt iste ducimus aut quo atque ad.",
        },
        {
          id: 4,
          message:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, omnis!",
        },
        {
          id: 5,
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus magni provident deleniti eligendi! Magni eveniet accusamus, consequuntur exercitationem distinctio repellat corrupti. Et obcaecati velit nulla consectetur doloribus veniam pariatur.",
        },
      ],
      newMessageText: "Hey-hey!",
    },
    friends: [
      {
        id: 1,
        name: "Dimych",
        img: "https://www.vokrug.tv/pic/person/5/5/3/4/5534779888fe3ee25eb750183028cecf.jpeg",
      },
      {
        id: 2,
        name: "Albina",
        img: "https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/prototypen/w_sexy_gr.jpg",
      },
      {
        id: 3,
        name: "Diana",
        img: "https://kottke.org/plus/misc/images/ai-faces-01.jpg",
      },
    ],
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  //Changed state methods
  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },
  _addMessage() {
    let newMessage = {
      id: 10,
      message: this._state.messagesPage.newMessageText,
    };
    this._state.messagesPage.messages.push(newMessage);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  _updateNewMessageText(newText) {
    this._state.messagesPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },
  //Dispatch
  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText);
    } else if (action.type === ADD_MESSAGE) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._updateNewMessageText(action.newText);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = newText => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: newText,
});

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const updateNewMessageTextActionCreator = newText => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: newText,
});

window.store = store;

export default store;
