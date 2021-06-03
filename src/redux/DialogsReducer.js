const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
            message:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                newMessageText: "",
                messages: [
                    ...state.messages,
                    {
                        id: 10,
                        message: state.newMessageText,
                    },
                ],
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                messages: [...state.messages],
                newMessageText: action.newText,
            };
        }
        default:
            return state;
    }
};

export const addMessage = () => ({ type: ADD_MESSAGE });

export const onMessageChange = newText => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: newText,
});

export default dialogsReducer;
