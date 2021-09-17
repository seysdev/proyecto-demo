import { useEffect, useState } from "react";

import { Card } from "../components";

export function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-8">
        {!!users.length &&
          users.map((user) => (
            <Card id={user.id} name={user.name} lastname={user.lastname} />
          ))}
      </div>
    </div>
  );
}
