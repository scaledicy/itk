import { createSelector } from 'reselect'
import { AppStore } from './ReduxStore'

export const getUsersSelector = (state: AppStore) => {
    return state.usersPage.users
}
export const getUsersSuperSelector = createSelector(getUsersSelector, users => {
    return users.filter(u => true)
})
export const getPageSize = (state: AppStore) => {
    return state.usersPage.pageSize
}
export const getCurrentPage = (state: AppStore) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state: AppStore) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state: AppStore) => {
    return state.usersPage.followingInProgress
}
export const getPageCount = (state: AppStore) => {
    return state.usersPage.pageCost
}
