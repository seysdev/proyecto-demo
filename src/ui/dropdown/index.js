import { Link } from "react-router-dom";
import { useState } from "react";
import "./dropdown.scss";
export function Dropdown(props) {
  const { text = "", links = [], className = "" } = props;
  const [toggle, setToggle] = useState(false);
  // const elUlRef = useRef(null);

  return (
    <div className={`dropdown ${className}`}>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {text}
      </button>
      {toggle && (
        <ul>
          {links.map((link, id) => (
            <li key={id}>
              <Link to={`${link.url}`} onClick={() => setToggle(!toggle)}>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
