import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import { Switch, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = () => {
    return (
        <>
            <CssBaseline />

            <div className='appContainer'>
                <Header />
                <div className='appGridContent'>
                    <Aside />
                    <div className='appContent'>
                        <Switch>
                            <Route path='/profile'>
                                <Profile />
                            </Route>
                        </Switch>
                        <Route path='/messages'>
                            <DialogsContainer />
                        </Route>
                        <Route path='/users'>
                            <UsersContainer />
                        </Route>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default App;
