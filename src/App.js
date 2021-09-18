import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Header, Footer, Main } from "components";
import { AuthRegister, AuthLogin } from "modules/auth";
import { Users, UsersUserDetail } from "modules/users/containers";
import { CreateUser, EditUser, DeleteUser, AdminUsers } from "modules/admin";
import { NotFound } from "modules/notFound";

export function App() {
  const [userLogged, setUserLogged] = useState({});
  useEffect(() => {
    setUserLogged(JSON.parse(window.localStorage.getItem("user")));
  }, []);

  return (
    <Router>
      <div className="wrapper flex flex-col h-screen">
        <Header />
        <Main>
          <Switch>
            <Route path="/login">
              <AuthLogin />
            </Route>
            <Route path="/register">
              <AuthRegister />
            </Route>
            <Route exact path="/users">
              <Users />
            </Route>
            <Route path="/users/:id">
              <UsersUserDetail />
            </Route>
            <Route
              path="/admin/users"
              exact
              render={() => (userLogged ? <AdminUsers /> : <AuthLogin />)}
            />
            <Route
              path="/admin/users/edit/:id"
              render={() => {
                return userLogged ? <EditUser /> : <AuthLogin />;
              }}
            />
            <Route
              path="/admin/users/create"
              render={() => (userLogged ? <CreateUser /> : <AuthLogin />)}
            />
            <Route
              path="/admin/users/delete/:id"
              render={() => (userLogged ? <DeleteUser /> : <AuthLogin />)}
            />
            <Route path="*">
              <NotFound />
            </Route>

            {console.log("userLogged", userLogged)}

            {userLogged ? (
              <Redirect from="/login" to="/admin/users" />
            ) : (
              <Redirect to="/login" />
            )}
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}
