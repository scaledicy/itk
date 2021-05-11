import s from "./DialogItem.module.scss";
import { NavLink } from "react-router-dom";

const DialogItem = props => {
  let path = '/messages/' + props.id;
  return (
    <li className={s.active}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </li>
  );  
}

export default DialogItem;

