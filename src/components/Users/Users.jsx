import Button from "@material-ui/core/Button";
import userEmpty from "../../assets/images/user-empty.svg";
import { makeStyles } from "@material-ui/core/styles";
import s from "./Users.module.scss";
import { NavLink } from "react-router-dom";
import * as axios from "axios";

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
            <div className={s.usersList}>
                {props.users.map(u => {
                    return (
                        <div className={s.userItem} key={u.id} id={u.id}>
                            <NavLink to={"/profile/" + u.id}>
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
                            </NavLink>
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
                                        onClick={() => {
                                            axios
                                                .delete(
                                                    `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                    {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY":
                                                                "cdbdb97f-f6ce-4024-8670-0f55e55be85a",
                                                        },
                                                    }
                                                )
                                                .then(response => {
                                                    if (
                                                        response.data
                                                            .resultCode === 0
                                                    ) {
                                                        props.unfollow(u.id);
                                                    }
                                                });
                                        }}
                                        className={classes.btnFollow}
                                        variant='contained'
                                        color='secondary'
                                    >
                                        Unfollow
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => {
                                            axios
                                                .post(
                                                    `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                                    {},
                                                    {
                                                        withCredentials: true,
                                                        headers: {
                                                            "API-KEY":
                                                                "cdbdb97f-f6ce-4024-8670-0f55e55be85a",
                                                        },
                                                    }
                                                )
                                                .then(response => {
                                                    if (
                                                        response.data
                                                            .resultCode === 0
                                                    ) {
                                                        props.follow(u.id);
                                                    }
                                                });
                                        }}
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
            <div className={s.paginationContainer}>
                <ul>
                    {pages.map((p, i) => {
                        return (
                            <li
                                onClick={() => {
                                    props.onPageChanged(p);
                                }}
                                key={i}
                            >
                                {p}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Users;
