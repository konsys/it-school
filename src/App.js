import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { Route } from "react-router-dom";
import store from "./redux/redux-store";

export const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route
          path="/dialogs"
          render={() => <DialogsContainer store={store} />}
        />

        <Route path="/profile" render={() => <Profile store={store} />} />
      </div>
    </div>
  );
};
