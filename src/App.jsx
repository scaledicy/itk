import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import { Switch, Route } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = () => {
    return (
        <>
            <CssBaseline />

            <div className='appContainer'>
                <HeaderContainer />
                <div className='appGridContent'>
                    <Aside />
                    <div className='appContent'>
                        <Switch>
                            <Route path='/profile/:userId?'>
                                <ProfileContainer />
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
