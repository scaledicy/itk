import React from "react";
import { connect } from "react-redux";
import { follow, getUsers, setCurrentPage, unFollow } from "redux/UsersReducer";
import Users from "./Users";
import loaderSVG from "assets/images/loader.svg";
import { withAuthRedirect } from "hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = pageNumber => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    };

    render() {
        return (
            <>
                {this.props.isFetching && <img src={loaderSVG} alt='loader' />}

                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unFollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    };
};

const mapDispatchToProps = {
    follow,
    unFollow,
    setCurrentPage,
    getUsers,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(UsersContainer);
