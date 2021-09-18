import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Nav } from "components/nav";
import { Dropdown } from "ui";
import "./header.scss";
export function Header() {
  const [userLogged, setUserLogged] = useState({});
  useEffect(() => {
    setUserLogged(JSON.parse(window.localStorage.getItem("user")));
  }, []);

  return (
    <header className="header">
      <div className="container">
        <Link to={"/users"} className="header__logo">
          LOGO
        </Link>
        <div className="flex items-center">
          <Nav />
          {!userLogged ? (
            <Dropdown
              className="ml-4"
              text={"Ingresar"}
              links={[
                { text: "Login", url: "/login" },
                { text: "Register", url: "/register" },
              ]}
            />
          ) : (
            <Dropdown
              className="ml-4"
              text={`Bienvenido ${userLogged.profile?.name}`}
              links={[
                { text: "Create User", url: "/admin/users/create" },
                { text: "Edit User", url: "/admin/users/edit" },
                { text: "Delete User", url: "/admin/users/delete" },
                { text: "Logout", url: "/logout" },
              ]}
            />
          )}
        </div>
      </div>
    </header>
  );
}
