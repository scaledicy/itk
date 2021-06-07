import { NavLink } from "react-router-dom";
import s from "./DialogItem.module.scss";

const DialogItem = props => {
    let path = "/messages/" + props.id;
    return (
        <li className={s.dialogLink}>
            <NavLink to={path} activeClassName={s.active}>
                {props.name}
            </NavLink>
        </li>
    );
};

export default DialogItem;
