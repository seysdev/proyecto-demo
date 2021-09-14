import { Nav } from "components/nav";
import "./header.scss";
export function Header() {
  return (
    <header className="header">
      <div className="container">
        <strong className="header__logo">LOGO</strong>
        <Nav />
      </div>
    </header>
  );
}
