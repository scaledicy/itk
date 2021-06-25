import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import s from './Header.module.scss'
import useHeaderContainer from './useHeaderContainer'

const Header = () => {
    const { data, handlers } = useHeaderContainer()

    return (
        <div className={s.headerContainer}>
            <img
                src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'
                alt='logo'
            />
            {data.isAuth ? (
                <div>
                    <span style={{ marginRight: '15px' }}>{data.login}</span>
                    <button type='button' onClick={handlers.logout}>
                        Logout
                    </button>
                </div>
            ) : (
                <Button
                    component={Link}
                    to='/login'
                    variant='contained'
                    color='primary'
                >
                    Login
                </Button>
            )}
        </div>
    )
}

export default Header
