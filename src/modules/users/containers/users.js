import { useEffect, useState } from "react";
import { apiBase } from "services/api";
import { Card } from "../components";

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    apiBase("http://localhost:3000/users").then((users) =>
      setUsers(users.data)
    );
  }, []);

  return (
    <div>
      <h1 className="text-4xl mb-8 border-black border-b pb-4">Usuarios</h1>
      <div className="grid grid-cols-3 gap-8">
        {!!users.length &&
          users.map((user, id) => (
            <Card
              key={id}
              id={user.id}
              name={user.name}
              lastname={user.lastname}
            />
          ))}
      </div>
    </div>
  );
}
