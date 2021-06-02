import Button from "@material-ui/core/Button";
import userEmpty from "../../assets/images/user-empty.svg";
import { makeStyles } from "@material-ui/core/styles";
import s from "./Users.module.scss";

const useStyles = makeStyles({
    btnFollow: {
        width: "100%",
        marginTop: 20,
        fontSize: 16,
        padding: 10,
    },
});

const Users = props => {
    const classes = useStyles();
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

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
                                    props.currentPage === p && s.selected
                                }
                                onClick={e => {
                                    props.onPageChanged(p);
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
                {props.users.map((u, i) => {
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
                                        {u.followed ? "Followed" : "Unfollowed"}
                                    </span>
                                </div>
                                <div className={s.statusMessage}>
                                    Status: {u.status}
                                </div>
                                {u.followed ? (
                                    <Button
                                        onClick={() => props.unFollow(u.id)}
                                        className={classes.btnFollow}
                                        variant='contained'
                                        color='secondary'
                                    >
                                        Unfollow
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => props.follow(u.id)}
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
};

export default Users;
