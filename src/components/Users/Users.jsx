import s from "./Users.module.scss";
import {makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  btnFollow: {
    width: '100%',
    marginTop: 20,
    fontSize: 16,
    padding: 10,
  },
});

const Users = props => {
  if (props.users.length === 0) {
    props.setUsers(
      [
        {
          id: 1,
          photoUrl: 'https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          followed: false,
          fullName: 'Dmitry',
          status: 'I am a boss',
          location: {
            city: 'Minsk',
            country: 'Belarus'
          }
        },
        {
          id: 2,
          photoUrl: 'https://images.unsplash.com/photo-1568707043650-eb03f2536825?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFjZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          followed: true,
          fullName: 'Sasha',
          status: 'I am a boss too',
          location: {city: 'Moscow', country: 'Russia'}
        },
        {
          id: 3,
          photoUrl: 'https://images.unsplash.com/photo-1569243478735-8fcf29052262?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGZhY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          followed: false,
          fullName: 'Tania',
          status: 'I am a boss too',
          location: {
            city: 'Kiev',
            country: 'Ukraine'
          }
        }
      ]
    )
  }

  const classes = useStyles();

  let user = props.users.map(u => {
    return (
      <div className={s.userItem} key={u.id} id={u.id}>
        <img src={u.photoUrl} alt="userPhoto"/>
        <div className={s.numberOfUser}>{u.id}</div>
        <div className={s.userDesc}>
          <h1>{u.fullName}</h1>
          <div className={s.subStatus}>Subscription status:
            &nbsp;<span className={u.followed ? s.followed : null}>{u.followed ? 'Followed' : 'Unfollowed'}</span>
          </div>
          <div className={s.statusMessage}>Status: {u.status}</div>
          {
            u.followed ? <Button onClick={() => props.unFollow(u.id)} className={classes.btnFollow} variant="contained"
                                 color='secondary'>Unfollow</Button> :
              <Button onClick={() => props.follow(u.id)} className={classes.btnFollow} variant="contained"
                      color="primary">Follow</Button>
          }
        </div>
      </div>
    );
  });
  console.log(props);

  return (
    <div className={s.usersContainer}>
      <h1 className={s.usersTitle}>Users list</h1>
      <div className={s.usersList}>
        {user}
      </div>
    </div>
  );
};

export default Users;