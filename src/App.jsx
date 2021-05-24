import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import { Switch, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = props => {
  return (
    <>
      <CssBaseline />

      <div className='appContainer'>
        <Header />
        <div className='appGridContent'>
          <Aside friends={props.appState.sidebarPage.friends} />
          <div className='appContent'>
            <Switch>
              <Route path='/profile'>
                <Profile store={props.store} />
              </Route>
            </Switch>
            <Route path='/messages'>
              <DialogsContainer store={props.store} />
            </Route>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
