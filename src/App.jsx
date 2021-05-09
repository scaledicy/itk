import CssBaseline from "@material-ui/core/CssBaseline";
import s from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <CssBaseline />

            <div className={s.appContainer}>
                <Header />
                <div className={s.appGridContent}>
                    <Aside />
                    <div className={s.appContent}>
                        <Switch>
                            <Route path='/profile'>
                                <Profile />
                            </Route>
                        </Switch>
                        <Route path='/messages'>
                            <Dialogs />
                        </Route>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default App;
