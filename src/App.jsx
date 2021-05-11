import CssBaseline from "@material-ui/core/CssBaseline";
import s from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Switch, Route, Redirect } from "react-router-dom";

const App = props => {
  return (
    <>
      <CssBaseline />

      <div className={s.appContainer}>
        <Header />
        <div className={s.appGridContent}>
          <Aside friends={props.appState.friends} />
          <div className={s.appContent}>
            <Switch>
              <Route path='/profile'>
                <Profile posts={props.appState.profilePage.posts} />
              </Route>
              <Redirect from="/" to="/profile" />
            </Switch>
            <Route exact path='/messages'>
              <Dialogs messagesPage={props.appState.messagesPage} />
            </Route>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
