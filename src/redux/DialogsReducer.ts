const ADD_MESSAGE = 'ADD_MESSAGE'

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        { id: 1, name: 'Dmitry' },
        { id: 2, name: 'Alex' },
        { id: 3, name: 'Dany' },
        { id: 4, name: 'Alice' },
        { id: 5, name: 'Ann' },
    ] as Array<DialogType>,
    messages: [
        {
            id: 1,
            message:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            id: 2,
            message:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, omnis!',
        },
        {
            id: 3,
            message:
                'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam incidunt iste ducimus aut quo atque ad.',
        },
        {
            id: 4,
            message:
                'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, omnis!',
        },
        {
            id: 5,
            message:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus magni provident deleniti eligendi! Magni eveniet accusamus, consequuntur exercitationem distinctio repellat corrupti. Et obcaecati velit nulla consectetur doloribus veniam pariatur.',
        },
    ] as Array<MessageType>,
}

export type InitialStateType = typeof initialState

const dialogsReducer = (
    state = initialState,
    action: any
): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: 10,
                        message: action.newMessage,
                    },
                ],
            }
        }
        default:
            return state
    }
}

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    newMessage: string
}

export const addMessage = (newMessage: string): AddMessageActionType => ({
    type: ADD_MESSAGE,
    newMessage,
})

export default dialogsReducer
