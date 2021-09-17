import { useEffect, useState } from "react";

export function Home() {
  // const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log(window);
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((users) => setUsers(users));
  }, []);

  // console.log("aca", window);

  return (
    <div>
      {console.log("users", !!users.length)}
      {!!users.length &&
        users.map((user) => (
          <ul>
            <li>
              {user.name}
              {user.lastname}
            </li>
          </ul>
        ))}
    </div>
  );
}
