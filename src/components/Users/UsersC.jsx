import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import React from "react";
import userEmpty from "../../assets/images/user-empty.svg";
import s from "./Users.module.scss";

const useStyles = () => ({
    btnFollow: {
        width: "100%",
        marginTop: 20,
        fontSize: 16,
        padding: 10,
    },
});

class Users extends React.Component {
    componentDidMount() {
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }
    onPageChanged = pageNumber => {
        this.props.setCurrentPage(pageNumber);
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
            )
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    };

    render() {
        const { classes } = this.props;
        let pageCount = Math.ceil(
            this.props.totalUsersCount / this.props.pageSize
        );

        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i);
        }

        return (
            <div className={s.usersContainer}>
                <h1 className={s.usersTitle}>Users list</h1>
                <div className={s.paginationContainer}>
                    <Button variant='contained' color='primary'>
                        Prev
                    </Button>
                    <ul>
                        {pages.map(p => {
                            return (
                                <li
                                    className={
                                        this.props.currentPage === p &&
                                        s.selected
                                    }
                                    onClick={e => {
                                        this.onPageChanged(p);
                                    }}
                                >
                                    {p}
                                </li>
                            );
                        })}
                    </ul>
                    <Button variant='contained' color='primary'>
                        Next
                    </Button>
                </div>
                <div className={s.usersList}>
                    {this.props.users.map((u, i) => {
                        return (
                            <div className={s.userItem} key={i} id={u.id}>
                                {u.photos.small !== null ? (
                                    <img
                                        className={s.userPhoto}
                                        src={u.photos.small}
                                        alt='userPhoto'
                                    />
                                ) : (
                                    <img
                                        className={s.userEmpty}
                                        src={userEmpty}
                                        alt='emptyPhoto'
                                    />
                                )}
                                <div className={s.numberOfUser}>{u.id}</div>
                                <div className={s.userDesc}>
                                    <h1>{u.name}</h1>
                                    <div className={s.subStatus}>
                                        Subscription status: &nbsp;
                                        <span
                                            className={
                                                u.followed ? s.followed : null
                                            }
                                        >
                                            {u.followed
                                                ? "Followed"
                                                : "Unfollowed"}
                                        </span>
                                    </div>
                                    <div className={s.statusMessage}>
                                        Status: {u.status}
                                    </div>
                                    {u.followed ? (
                                        <Button
                                            onClick={() =>
                                                this.props.unFollow(u.id)
                                            }
                                            className={classes.btnFollow}
                                            variant='contained'
                                            color='secondary'
                                        >
                                            Unfollow
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={() =>
                                                this.props.follow(u.id)
                                            }
                                            className={classes.btnFollow}
                                            variant='contained'
                                            color='primary'
                                        >
                                            Follow
                                        </Button>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default withStyles(useStyles)(Users);
