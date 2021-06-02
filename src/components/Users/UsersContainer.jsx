import { connect } from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
} from "../../redux/UsersReducer";
import UsersC from "./UsersC";

let mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    };
};
let mapDispatchToProps = dispatch => {
    return {
        follow: userId => {
            dispatch(followAC(userId));
        },
        unFollow: userId => {
            dispatch(unfollowAC(userId));
        },
        setUsers: users => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: pageNumber => {
            dispatch(setCurrentPageAC(pageNumber));
        },
        setTotalUsersCount: totalCount => {
            dispatch(setTotalUsersCountAC(totalCount));
        },
    };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);
export default UsersContainer;
