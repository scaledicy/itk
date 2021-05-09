import s from "./Aside.module.scss";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <ul className={s.asideContainer}>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/messages">Messages</Link>
      </li>
      <li>
        <a href='/'>News</a>
      </li>
      <li>
        <a href='/'>Music</a>
      </li>
      <li>
        <a href='/'>Settings</a>
      </li>
    </ul>
  );
};

export default Aside;
