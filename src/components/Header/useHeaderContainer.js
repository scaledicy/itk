import { useDispatch, useSelector } from 'react-redux'
import { useCallback, useEffect } from 'react'
import { fetchAuthUserData, logout } from 'redux/AuthReducer'

const useHeaderContainer = () => {
    const dispatch = useDispatch()

    const data = useSelector(state => {
        return {
            isAuth: state.auth.isAuth,
            login: state.auth.login,
        }
    })

    const fetchAuthUserDataHandler = useCallback(
        () => dispatch(fetchAuthUserData()),
        [dispatch]
    )
    const logoutHandler = () => dispatch(logout())

    useEffect(() => {
        fetchAuthUserDataHandler()
    }, [fetchAuthUserDataHandler])

    return {
        data: {
            isAuth: data.isAuth,
            login: data.login,
        },
        handlers: {
            logout: logoutHandler,
        },
    }
}

export default useHeaderContainer
