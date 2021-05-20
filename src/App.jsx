import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Switch, Route } from "react-router-dom";

const App = props => {
  return (
    <>
      <CssBaseline />

      <div className='appContainer'>
        <Header />
        <div className='appGridContent'>
          <Aside friends={props.appState.friends} />
          <div className='appContent'>
            <Switch>
              <Route path='/profile'>
                <Profile
                  profilePage={props.appState.profilePage}
                  dispatch={props.dispatch}
                />
              </Route>
            </Switch>
            <Route path='/messages'>
              <Dialogs
                messagesPage={props.appState.messagesPage}
                dispatch={props.dispatch}
              />
            </Route>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
