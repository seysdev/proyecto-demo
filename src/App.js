import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header, Footer, Main } from "components";
import { AuthRegister, AuthLogin } from "modules/auth";
import { Users, UsersUserDetail } from "modules/users/containers";
import { NotFound } from "modules/notFound";

export function App() {
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
            {/* <Redirect from="/" to="/home" /> */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}
