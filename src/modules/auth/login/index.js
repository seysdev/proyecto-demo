import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input, Button } from "ui";
export function AuthLogin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [stateForm, setStateForm] = useState({
    user: "",
    password: "",
  });

  function existTheUser(users, userLogged) {
    const currentUser = users.filter((data) => data.user === userLogged.user);

    return new Promise((resolve, reject) => {
      console.log("currentUser", currentUser);
      !!currentUser.length
        ? resolve(currentUser[0])
        : reject("No existe el usuario");
    });
  }

  const onSubmit = (userLogged) => {
    // event.preventDefault();
    // console.log("stateForm", stateForm);

    fetch("http://localhost:3000/usersRegister")
      .then((response) => response.json())
      .then((users) => {
        return existTheUser(users, userLogged);
      })
      .then((user) => {
        alert(`Bienvenido!! ${user.profile.name}`);
        console.log("user", user);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.reload();
      })
      .catch((err) => {
        console.log("err", err);
        alert("El usuario no existe");
      });
    // console.log("data", data);
  };

  return (
    <div className="auth-login w-6/12 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4 mt-10">Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-8">
          <label className="block mb-2">Usuario</label>
          <input
            type="text"
            className={`border-2 border-gray-400 rounded w-full p-4 focus:border-gray-500 focus:outline-none ${
              errors.user && " border-red-800"
            }`}
            onInput={(event) =>
              setStateForm((state) => ({ ...state, user: event.target.value }))
            }
            {...register("user", { required: true })}
          />
          {/* <Input
            value={stateForm.user}
            placeholder="Usuario"
            onInput={(value) =>
              setStateForm((state) => ({ ...state, user: value }))
            }
            required
            {...register("example")}
          /> */}
          {errors.user && (
            <span className="text-red-800 font-bold">
              El valor es obligatorio
            </span>
          )}
        </div>
        <div>
          <label className="block mb-2">Password</label>
          {/* <Input
            value={stateForm.password}
            placeholder="Password"
            type="password"
            onInput={(value) =>
              setStateForm((state) => ({ ...state, password: value }))
            }
            required
          /> */}
          <input
            type="password"
            className={`border-2 border-gray-400 rounded w-full p-4 
            focus:border-gray-500 focus:outline-none ${
              errors.password && " border-red-800"
            }`}
            {...register("password", { required: true, maxLength: 6 })}
            onInput={(event) =>
              setStateForm((state) => ({
                ...state,
                password: event.target.value,
              }))
            }
          />
        </div>
        {errors.password && errors.password.type == "required" && (
          <span className="text-red-800 font-bold">
            El valor es obligatorio
          </span>
        )}
        {errors.password && errors.password.type == "maxLength" && (
          <span className="text-red-800 font-bold">
            La longitud maxima es de 6 caracteres
          </span>
        )}

        <div className="mt-10">
          <div className="text-center">
            <Button type="submit">Ingresar</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
