import { usersAPI } from 'api/api'
import { UserType } from 'types/types'
import { updateObjectInArray } from 'utils/helpers/objectHelpers'
import { AppStore } from './ReduxStore'
import { Dispatch } from 'react'
import { ThunkAction } from 'redux-thunk'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCH = 'TOGGLE_IS_FETCH'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
const SET_PAGE_COST = 'SET_PAGE_COST'

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, //Array of users id
    pageCost: 1,
}

export type InitialStateType = typeof initialState

const usersReducers = (
    state = initialState,
    action: ActionsTypes
): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {
                    followed: true,
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, 'id', {
                    followed: false,
                }),
            }
        case SET_USERS:
            return { ...state, users: [...action.users] }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_PAGE_COST:
            return { ...state, pageCost: action.cost }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_FETCH:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [
                          ...state.followingInProgress.filter(
                              id => id !== action.userId
                          ),
                      ],
            }
        default:
            return state
    }
}

export default usersReducers

type ActionsTypes =
    | FollowSuccessActionType
    | UnFollowSuccessActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetCostPageActionType
    | setTotalUsersCountActionType
    | setIsFetchingActionType
    | setIsFollowingProgressActionType

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}
type UnFollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}
type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
type SetCostPageActionType = {
    type: typeof SET_PAGE_COST
    cost: number
}
type setTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
type setIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCH
    isFetching: boolean
}
type setIsFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

//==== Action creators ====
export const followSuccess = (userId: number): FollowSuccessActionType => ({
    type: FOLLOW,
    userId,
})
export const unFollowSuccess = (userId: number): UnFollowSuccessActionType => ({
    type: UNFOLLOW,
    userId,
})
export const setUsers = (users: Array<UserType>): SetUsersActionType => ({
    type: SET_USERS,
    users,
})
export const setCurrentPage = (
    currentPage: number
): SetCurrentPageActionType => ({
    type: SET_CURRENT_PAGE,
    currentPage,
})
export const setCostPage = (cost: number): SetCostPageActionType => ({
    type: SET_PAGE_COST,
    cost,
})
export const setTotalUsersCount = (
    totalUsersCount: number
): setTotalUsersCountActionType => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
})
export const setIsFetching = (
    isFetching: boolean
): setIsFetchingActionType => ({
    type: TOGGLE_IS_FETCH,
    isFetching,
})
export const setIsFollowingProgress = (
    isFetching: boolean,
    userId: number
): setIsFollowingProgressActionType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
})

//==== Thunk action creators ====
export const getUsers =
    (
        currentPage: number
    ): ThunkAction<Promise<void>, AppStore, unknown, ActionsTypes> =>
    async (dispatch, getState) => {
        const pageSize = getState().usersPage.pageSize
        dispatch(setIsFetching(true))
        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setIsFetching(false))
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUsersCount(response.data.totalCount))
        dispatch(setCostPage(Math.ceil(response.data.totalCount / pageSize)))
    }

export const follow =
    (
        userId: number
    ): ThunkAction<Promise<void>, AppStore, unknown, ActionsTypes> =>
    async dispatch => {
        let apiMethod = usersAPI.followUser.bind(usersAPI)
        await _followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
    }

export const unFollow =
    (
        userId: number
    ): ThunkAction<Promise<void>, AppStore, unknown, ActionsTypes> =>
    async dispatch => {
        let apiMethod = usersAPI.unFollowUser.bind(usersAPI)
        await _followUnfollowFlow(dispatch, userId, apiMethod, unFollowSuccess)
    }

const _followUnfollowFlow = async (
    dispatch: Dispatch<ActionsTypes>,
    userId: number,
    apiMethod: any,
    actionCreator: (
        userId: number
    ) => FollowSuccessActionType | UnFollowSuccessActionType
) => {
    dispatch(setIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setIsFollowingProgress(false, userId))
}
