import CssBaseline from "@material-ui/core/CssBaseline";
import s from "./App.module.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Aside from "./components/Aside/Aside";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Switch, Route } from "react-router-dom";

let dialogsData = [
  { id: 1,
    name: "Dmitry" 
  },
  { id: 2,
    name: "Alex" 
  },
  { id: 3,
    name: "Dany"
  },
  { id: 4,
    name: "Alice"
  },
  { id: 5,
    name: "Ann"
  }
];

let messagesData = [
  {
    id: 1,
    message: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, omnis!",
  },
  {
    id: 3,
    message:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam incidunt iste ducimus aut quo atque ad.",
  },
  {
    id: 4,
    message:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, omnis!",
  },
  {
    id: 5,
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis natus magni provident deleniti eligendi! Magni eveniet accusamus, consequuntur exercitationem distinctio repellat corrupti. Et obcaecati velit nulla consectetur doloribus veniam pariatur.",
  },
];

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
            <Route exact path='/messages'>
              <Dialogs dialogsData={dialogsData} messagesData={messagesData} />
            </Route>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
