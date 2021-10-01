import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import { Header, Footer, Main, Loader } from "components";
import { AuthRegister, AuthLogin } from "modules/auth";
import { Users, UsersUserDetail } from "modules/users/containers";
import { CreateUser, EditUser, DeleteUser, AdminUsers } from "modules/admin";
import { NotFound } from "modules/notFound";
import { PageLogout } from "./pages/logout";
import store from "./store";

export function App() {
  const [userLogged, setUserLogged] = useState({});
  const [loader, setLoader] = useState(store.getState().loader.flag);

  store.subscribe(() => {
    setUserLogged(store.getState().user);
    setLoader(store.getState().loader.flag);
  });

  return (
    <Provider store={store}>
      {loader && <Loader />}
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
                render={() =>
                  userLogged.logged ? <AdminUsers /> : <AuthLogin />
                }
              />
              <Route
                path="/admin/users/edit/:id"
                render={() => {
                  return userLogged.logged ? <EditUser /> : <AuthLogin />;
                }}
              />
              <Route
                path="/admin/users/create"
                render={() =>
                  userLogged.logged ? <CreateUser /> : <AuthLogin />
                }
              />
              <Route
                path="/admin/users/delete/:id"
                render={() =>
                  userLogged.logged ? <DeleteUser /> : <AuthLogin />
                }
              />
              <Route path="/logout" render={() => <PageLogout />} />
              <Route path="*">
                <NotFound />
              </Route>

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
    </Provider>
  );
}
