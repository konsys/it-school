import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";
import store from "./redux/redux-store";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => (
            <Dialogs
              dialogsPage={props.state.dialogsPage}
              dispatch={props.dispatch}
            />
          )}
        />

        <Route path="/profile" render={() => <Profile store={store} />} />
      </div>
    </div>
  );
};

export default App;
