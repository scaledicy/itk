import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getUsersSuperSelector,
    getPageCount,
} from 'redux/UsersSelectors'
import { follow, getUsers, unFollow, setCurrentPage } from 'redux/UsersReducer'
import { AppState } from 'redux/ReduxStore'

const useUsersContainer = () => {
    const dispatch = useDispatch()

    //Data from global state
    const data = useSelector((state: AppState) => ({
        users: getUsersSuperSelector(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        pageCount: getPageCount(state),
    }))

    //Dispatch handlers
    const followHandler = useCallback(
        (userId: number) => dispatch(follow(userId)),
        [dispatch]
    )
    const unFollowHandler = useCallback(
        (userId: number) => dispatch(unFollow(userId)),
        [dispatch]
    )
    const getUsersHandler = useCallback(
        (page: number) => dispatch(getUsers(page)),
        [dispatch]
    )
    const onChangePaginationHandler = useCallback(
        (page: number) => dispatch(setCurrentPage(page)),
        [dispatch]
    )

    useEffect(() => {
        getUsersHandler(data.currentPage)
    }, [getUsersHandler, data.currentPage])

    return {
        data: {
            users: data.users,
            currentPage: data.currentPage,
            isFetching: data.isFetching,
            followingInProgress: data.followingInProgress,
            pageCount: data.pageCount,
        },
        handlers: {
            follow: followHandler,
            unFollow: unFollowHandler,
            getUsers: getUsersHandler,
            onChangePagination: onChangePaginationHandler,
        },
    }
}

export default useUsersContainer
