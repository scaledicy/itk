import { usersAPI } from 'api/api'
import { updateObjectInArray } from '../utils/helpers/objectHelpers'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCH = 'TOGGLE_IS_FETCH'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'
const SET_PAGE_COST = 'SET_PAGE_COST'

let initialState = {
    users: [],
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    pageCost: 1,
}

const usersReducers = (state = initialState, action) => {
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
                          state.followingInProgress.filter(
                              id => id !== action.userId
                          ),
                      ],
            }
        default:
            return state
    }
}

export default usersReducers

//Action Creators
export const followSuccess = userId => ({ type: FOLLOW, userId })
export const unFollowSuccess = userId => ({ type: UNFOLLOW, userId })
export const setUsers = users => ({ type: SET_USERS, users })
export const setCurrentPage = currentPage => ({
    type: SET_CURRENT_PAGE,
    currentPage,
})
export const setCostPage = cost => ({
    type: SET_PAGE_COST,
    cost,
})
export const setTotalUsersCount = totalUsersCount => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount,
})
export const setIsFetching = isFetching => ({
    type: TOGGLE_IS_FETCH,
    isFetching,
})
export const setIsFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
})

//Thunk actions creators
export const getUsers = currentPage => async (dispatch, getState) => {
    const pageSize = getState().usersPage.pageSize
    dispatch(setIsFetching(true))
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setIsFetching(false))
    dispatch(setUsers(response.data.items))
    dispatch(setTotalUsersCount(response.data.totalCount))
    dispatch(setCostPage(Math.ceil(response.data.totalCount / pageSize)))
}

export const follow = userId => async dispatch => {
    let apiMethod = usersAPI.followUser.bind(usersAPI)
    await followUnfollowFlow(dispatch, userId, apiMethod, followSuccess)
}

export const unFollow = userId => async dispatch => {
    let apiMethod = usersAPI.unFollowUser.bind(usersAPI)
    await followUnfollowFlow(dispatch, userId, apiMethod, unFollowSuccess)
}

const followUnfollowFlow = async (
    dispatch,
    userId,
    apiMethod,
    actionCreator
) => {
    dispatch(setIsFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(setIsFollowingProgress(false, userId))
}
