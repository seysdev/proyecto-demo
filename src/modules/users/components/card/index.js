import { Link } from "react-router-dom";


import "./card.scss";
export function Card(props) {
  
  const { id, name, lastname } = props;

  return (
    <Link
      to={{
        pathname: `/users/${id}`,
      }}
      className="card"
    >
      <h2>
        {name}
        {lastname}
      </h2>
    </Link>
  );
}
