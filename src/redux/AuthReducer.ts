import { authAPI, securityAPI } from 'api/api'

const SET_USER_DATA = 'SET_USER_DATA'
const SET_CAPTCHA_URL = 'SET_CAPTCHA_URL'

let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null, //if null, then captcha is not required
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA_URL:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state
    }
}

type SetAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

export type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
): SetAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {
        userId,
        email,
        login,
        isAuth,
    },
})

export type SetCaptchaUrlActionType = {
    type: typeof SET_CAPTCHA_URL
    payload: {
        captchaUrl: string
    }
}

export const setCaptchaUrl = (captchaUrl: string): SetCaptchaUrlActionType => ({
    type: SET_CAPTCHA_URL,
    payload: {
        captchaUrl,
    },
})

export default authReducer

//Thunk action creators
export const fetchAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.checkAuth()
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login =
    (email: string, password: string, captcha: string) =>
    async (dispatch: any) => {
        let response = await authAPI.login(email, password, captcha)
        if (response.data.resultCode === 0) {
            dispatch(fetchAuthUserData())
        } else if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
    }

export const getCaptchaUrl = () => async (dispatch: any) => {
    let response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(setCaptchaUrl(captchaUrl))
}

export const logout = () => async (dispatch: any) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
