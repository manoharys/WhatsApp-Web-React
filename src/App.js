import React, { useState, Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UseStateValue } from "./globalContext/StateProvider";
import Login from "./components/login/login";
import Loader from "./components/Loader";
import ErrorBoundry from "./ErrorBoundry";

const SideBar = lazy(() => import("./components/SideBar"));
const Chat = lazy(() => import("./components/Chat"));

function App() {
  const [{ user }, dispatch] = UseStateValue();

  return (
    <div className="App">
      {!user ? (
        <h1>
          <Login />
        </h1>
      ) : (
        <div className="app_body">
          <Suspense fallback={<Loader />}>
            <Router>
              <SideBar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <ErrorBoundry FallBackComponent={<Loader />}>
                    <Chat />
                  </ErrorBoundry>
                </Route>
                <Route path="/">{/* <Chat /> */}</Route>
              </Switch>
            </Router>
          </Suspense>
        </div>
      )}
    </div>
  );
}

export default App;
