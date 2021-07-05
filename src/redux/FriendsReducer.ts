type FriendType = {
    id: number
    name: string
    img: string
}

let initialState = {
    friends: [
        {
            id: 1,
            name: 'Dimych',
            img: 'https://www.vokrug.tv/pic/person/5/5/3/4/5534779888fe3ee25eb750183028cecf.jpeg',
        },
        {
            id: 2,
            name: 'Albina',
            img: 'https://www.uni-regensburg.de/Fakultaeten/phil_Fak_II/Psychologie/Psy_II/beautycheck/english/prototypen/w_sexy_gr.jpg',
        },
        {
            id: 3,
            name: 'Diana',
            img: 'https://kottke.org/plus/misc/images/ai-faces-01.jpg',
        },
    ] as Array<FriendType>,
}

export type InitialStateType = typeof initialState

const friendsReducer = (state = initialState): InitialStateType => {
    return state
}

export default friendsReducer
