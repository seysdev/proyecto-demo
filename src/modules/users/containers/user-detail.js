import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Card } from "../components";

export function UsersUserDetail() {
  const history = useHistory();
  const { id: idUser } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/users/${idUser}`)
      .then((response) => response.json())
      .then((user) => setUser(user));
  }, [idUser]);

  return (
    <div>
      <button onClick={() => history.push("/users")}>Atras</button>
      <Card name={user.name} lastname={user.lastname} />
    </div>
  );
}
