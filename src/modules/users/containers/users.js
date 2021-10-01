import { useEffect, useState } from "react";
import { apiBase } from "services/api";
import { Card } from "../components";
import { Carousel } from "3d-react-carousal";

export function Users() {
  const [users, setUsers] = useState([]);
  const [componentsUsers, setComponentsUsers] = useState([]);

  useEffect(() => {
    apiBase("http://localhost:3000/users").then((users) =>
      setUsers(users.data)
    );
  }, []);

  // function Card() {
  //   return (
  //     <div>
  //       HOLA MUNDO
  //       <img src="https://picsum.photos/800/304/?random" alt="5" />
  //     </div>
  //   );
  // }

  // let slides = [<Card />, <Card />, <Card />, <Card />, <Card />];

  useEffect(() => {
    users.length > 0 &&
      setComponentsUsers(
        users.map((user, id) => (
          <Card
            key={id}
            id={user.id}
            name={user.name}
            lastname={user.lastname}
          />
        ))
      );
  }, [users]);

  // console.log("slides", slides);
  console.log("componentsUsers", componentsUsers);

  return (
    <div>
      <h1 className="text-4xl mb-8 border-black border-b pb-4">Usuarios</h1>
      <Carousel className="w-96" slides={componentsUsers} />
      <div className="grid grid-cols-3 gap-8">
        {/* {!!users.length &&
          users.map((user, id) => (
            <Card
              key={id}
              id={user.id}
              name={user.name}
              lastname={user.lastname}
            />
          ))} */}
        {/* {console.log("componentsUsers", componentsUsers)} */}
       
      </div>
    </div>
  );
}
