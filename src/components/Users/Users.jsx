import s from "./Users.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import * as axios from "axios";
import userEmpty from "../../assets/images/user-empty.svg";

const useStyles = makeStyles({
    btnFollow: {
        width: "100%",
        marginTop: 20,
        fontSize: 16,
        padding: 10,
    },
});

const Users = props => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }
    };

    const classes = useStyles();   

    let user = props.users.map(u => {
        return (
            <div className={s.userItem} key={u.id} id={u.id}>
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
                        <span className={u.followed ? s.followed : null}>
                            {u.followed ? "Followed" : "Unfollowed"}
                        </span>
                    </div>
                    <div className={s.statusMessage}>Status: {u.status}</div>
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
    });
    return (
        <div className={s.usersContainer}>
            <h1 className={s.usersTitle}>Users list</h1>
            <button type="button" onClick={getUsers}>Get users</button>
            <div className={s.usersList}>{user}</div>
        </div>
    );
};

export default Users;
