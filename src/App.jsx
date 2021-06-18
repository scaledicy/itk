import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import { Switch, Route } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import React from "react";
import { withSuspense } from "./hoc/withSuspense";

const ProfileContainer = React.lazy(() =>
    import("./components/Profile/ProfileContainer")
);
const DialogsContainer = React.lazy(() =>
    import("./components/Dialogs/DialogsContainer")
);
const UsersContainer = React.lazy(() =>
    import("./components/Users/UsersContainer")
);

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
                            <Route
                                path='/profile/:userId?'
                                render={withSuspense(ProfileContainer)}
                            />
                        </Switch>
                        <Route
                            path='/messages'
                            render={withSuspense(DialogsContainer)}
                        />
                        <Route
                            path='/users'
                            render={withSuspense(UsersContainer)}
                        />
                        <Route path='/login'>
                            <Login />
                        </Route>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default App;
