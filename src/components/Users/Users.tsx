import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { NavLink } from 'react-router-dom'
import s from './Users.module.scss'
import userEmpty from 'assets/images/user-empty.svg'
import Pagination from '@material-ui/lab/Pagination'
import { compose } from 'redux'
import { withAuthRedirect } from 'hoc/withAuthRedirect'
import useUsersContainer from './useUsersContainer'
import React from 'react'

const useStyles = makeStyles({
    btnFollow: {
        width: '100%',
        marginTop: 20,
        fontSize: 16,
        padding: 10,
    },
})

const Users: React.FC = () => {
    const classes = useStyles()
    const { data, handlers } = useUsersContainer()

    return (
        <div className={s.usersContainer}>
            <h1 className={s.usersTitle}>Users list</h1>
            <Pagination
                count={data.pageCount}
                onChange={(event, page) => handlers.onChangePagination(page)}
                variant='outlined'
                shape='rounded'
            />
            <div className={s.usersList}>
                {data.users.map(u => {
                    return (
                        <div
                            className={s.userItem}
                            key={u.id}
                            id={String(u.id)}
                        >
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
                                        className={u.followed ? s.followed : ''}
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
                                            handlers.unFollow(u.id)
                                        }}
                                        disabled={data.followingInProgress.some(
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
                                            handlers.follow(u.id)
                                        }}
                                        disabled={data.followingInProgress.some(
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

export default compose(withAuthRedirect)(Users)
