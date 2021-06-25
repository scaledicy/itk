import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import s from './Users.module.scss'
import userEmpty from 'assets/images/user-empty.svg'
import Pagination from '@material-ui/lab/Pagination'
import { setCurrentPage } from '../../redux/UsersReducer'
import { useDispatch, useSelector } from 'react-redux'

const useStyles = makeStyles({
    btnFollow: {
        width: '100%',
        marginTop: 20,
        fontSize: 16,
        padding: 10,
    },
})

const Users = props => {
    const dispatch = useDispatch()

    const classes = useStyles()
    const pageCount = useSelector(state => state.usersPage.pageCost)

    return (
        <div className={s.usersContainer}>
            <h1 className={s.usersTitle}>Users list</h1>
            <Pagination
                count={pageCount}
                onChange={(event, page) => dispatch(setCurrentPage(page))}
                variant='outlined'
                shape='rounded'
            />
            <div className={s.usersList}>
                {props.users.map(u => {
                    return (
                        <div className={s.userItem} key={u.id} id={u.id}>
                            <NavLink to={'/profile/' + u.id}>
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
                                        {u.followed ? 'Followed' : 'Unfollowed'}
                                    </span>
                                </div>
                                <div className={s.statusMessage}>
                                    Status: {u.status}
                                </div>
                                {u.followed ? (
                                    <Button
                                        onClick={() => {
                                            props.unfollow(u.id)
                                        }}
                                        disabled={props.followingInProgress.some(
                                            id => id === u.id
                                        )}
                                        className={classes.btnFollow}
                                        variant='contained'
                                        color='secondary'
                                    >
                                        Unfollow
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={() => {
                                            props.follow(u.id)
                                        }}
                                        disabled={props.followingInProgress.some(
                                            id => id === u.id
                                        )}
                                        className={classes.btnFollow}
                                        variant='contained'
                                        color='primary'
                                    >
                                        Follow
                                    </Button>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Users
