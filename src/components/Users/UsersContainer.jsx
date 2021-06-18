import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { follow, getUsers, unFollow } from "redux/UsersReducer";
import Users from "./Users";
import loaderSVG from "assets/images/loader.svg";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import { compose } from "redux";
import {
    getTotalUsersCount,
    getCurrentPage,
    getIsFetching,
    getFollowingInProgress,
    getUsersSuperSelector,
} from "redux/UsersSelectors";

const UsersContainer = () => {
    const dispatch = useDispatch();

    //Data from global state
    const data = useSelector(state => {
        return {
            users: getUsersSuperSelector(state),
            totalUsersCount: getTotalUsersCount(state),
            currentPage: getCurrentPage(state),
            isFetching: getIsFetching(state),
            followingInProgress: getFollowingInProgress(state),
        };
    });

    //Dispatch handlers
    const followHandler = userId => dispatch(follow(userId));
    const unFollowHandler = userId => dispatch(unFollow(userId));
    const getUsersHandler = useCallback(
        page => dispatch(getUsers(page)),
        [dispatch]
    );

    useEffect(() => {
        getUsersHandler(data.currentPage);
    }, [getUsersHandler, data.currentPage]);

    return (
        <>
            {data.isFetching && <img src={loaderSVG} alt='loader' />}

            <Users
                totalUsersCount={data.totalUsersCount}
                currentPage={data.currentPage}
                onPageChanged={getUsersHandler}
                users={data.users}
                follow={followHandler}
                unfollow={unFollowHandler}
                followingInProgress={data.followingInProgress}
            />
        </>
    );
};

export default compose(withAuthRedirect)(UsersContainer);
