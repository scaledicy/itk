import s from "./Aside.module.scss";
import { NavLink } from "react-router-dom";
import StoreContext from "../../StoreContext";

const Friend = props => {
  return (
    <li>
      <a className={s.friendItem} href='/'>
        <img src={props.img} alt='/' />
        <span>{props.name}</span>
      </a>
    </li>
  );
};

const Aside = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        let state = store.getState().sidebarPage.friends;

        let friends = state.map(el => (
          <Friend key={el.id} id={el.id} name={el.name} img={el.img} />
        ));

        return (
          <div className={s.asideContainer}>
            <ul className={s.asideList}>
              <li>
                <NavLink to='/profile' activeClassName={s.active}>
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to='/messages' activeClassName={s.active}>
                  Messages
                </NavLink>
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
            <ul className={s.friendsList}>{friends}</ul>
          </div>
        );
      }}
    </StoreContext.Consumer>
  );
};

export default Aside;
