import { createSelector } from 'reselect'
import { AppState } from './ReduxStore'

export const getUsersSelector = (state: AppState) => {
    return state.usersPage.users
}
export const getUsersSuperSelector = createSelector(getUsersSelector, users => {
    return users.filter(u => true)
})
export const getPageSize = (state: AppState) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state: AppState) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppState) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppState) => {
    return state.usersPage.followingInProgress
}
export const getPageCount = (state: AppState) => {
    return state.usersPage.pageCost
}
