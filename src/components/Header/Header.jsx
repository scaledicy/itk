import s from "./Header.module.scss";
import Button from '@material-ui/core/Button';

const Header = () => {
  return (
    <div className={s.headerContainer}>
      <img
        src='https://cdn.logo.com/hotlink-ok/logo-social-sq.png'
        alt='logo'
      />
      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </div>
  );
};

export default Header;
