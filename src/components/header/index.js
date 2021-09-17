import { Link } from "react-router-dom";
import { Nav } from "components/nav";
import { Dropdown } from "ui";
import "./header.scss";
export function Header() {
  return (
    <header className="header">
      <div className="container">
        <Link to={'/users'} className="header__logo">
          LOGO
        </Link>
        <div className="flex items-center">
          <Nav />
          <Dropdown
            className="ml-4"
            text={"Ingresar"}
            links={[
              { text: "Login", url: "/login" },
              { text: "Register", url: "/register" },
            ]}
          />
        </div>
      </div>
    </header>
  );
}
