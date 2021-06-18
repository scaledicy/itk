import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";

const Header = props => {
    return (
        <div className={s.headerContainer}>
            <img
                src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'
                alt='logo'
            />
            {props.isAuth ? (
                <div>
                    <span style={{ marginRight: "15px" }}>{props.login}</span>
                    <button type='button' onClick={props.logout}>
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
    );
};

export default Header;
