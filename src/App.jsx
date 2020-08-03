import React, { useCallback, useState } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Users } from "./pages/Users";
import { NewPlace } from "./pages/NewPlace";
import { MainNavigation } from "./shared/MainNavigation";
import { UserPlaces } from "./pages/UserPlaces";
import { UpdatePlace } from "./pages/UpdatePlace";
import { Auth } from "./pages/Auth";
import { AuthContext } from "./context/auth-context";

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const login = useCallback(() => {
    setLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setLoggedIn(false);
  }, []);

  let routes;

  if (loggedIn) {
    routes = (
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path="/:uid/places">
          <UserPlaces />
        </Route>
        <Route exact path="/places/new">
          <NewPlace />
        </Route>
        <Route path="/places/:pid">
          <UpdatePlace />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/">
          <Users />
        </Route>
        <Route exact path="/:uid/places">
          <UserPlaces />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ loggedIn: loggedIn, login: login, logout: logout }}
    >
      <BrowserRouter>
        <MainNavigation />
        <main>{routes}</main>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
