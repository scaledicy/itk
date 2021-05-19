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
  //Dispatch
  dispatch(action) {
    if (action.type === "ADD-POST") {
      this._addPost();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._updateNewPostText(action.newText);
    }
  },
};

window.store = store;

export default store;
