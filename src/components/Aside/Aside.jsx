import s from "./Aside.module.scss";
import { NavLink } from "react-router-dom";

const Aside = () => {
  return (
    <ul className={s.asideContainer}>
      <li>
        <NavLink to="/profile" activeClassName={s.active}>Profile</NavLink>
      </li>
      <li>
        <NavLink to="/messages" activeClassName={s.active}>Messages</NavLink>
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
