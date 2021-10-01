import { useState } from "react";
import { Input, Button } from "ui";
import { useHistory } from "react-router-dom";
import { apiBase } from "services/api";
import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import "./register.scss";
export function AuthRegister() {
  let history = useHistory();
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    user: "",
    password: "",
    country: "",
    typeUser: "",
  });

  async function registerUserClient(user, cb = () => {}) {
    try {
      const response = await apiBase.post("/users", user);
      console.log("response", response);
      cb();
    } catch (err) {
      console.log("el cliente no se pudo registrar");
    }
  }

  async function registerUserAdmin(user, cb = () => {}) {
    try {
      const response = await apiBase.post("/usersRegister", user);

      cb();
    } catch (err) {
      console.log("el cliente admin no se pudo registrar");
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    const { typeClient } = user;

    const objAdmin = {
      user: user.user,
      password: user.password,
      profile: {
        name: user.name,
        lastname: user.lastname,
        edad: 32,
        sex: user.sex,
      },
    };

    const redirect = () => {
      console.log("wowwww");
      history.push("/login");
    };

    typeClient === "1"
      ? await registerUserClient(user, redirect)
      : await registerUserAdmin(objAdmin, redirect);
  };

  const responseFacebook = (response) => {
    console.log("responsefacebook", response);
  };

  const responseGoogle = (response) => {
    console.log("respuesta google", response.profileObj);
  };

  const responseFailedGoogle = (response) => {
    console.log("responseFailedGoogle", response);
  };

  return (
    <div className="auth-register w-6/12 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4 mt-10">Registrate</h1>
      <form onSubmit={onSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-2">Nombre</label>
            <Input
              value={user.name}
              onInput={(value) =>
                setUser((state) => ({ ...state, name: value }))
              }
            />
          </div>
          <div>
            <label className="block mb-2">Apellido</label>
            <Input
              value={user.lastname}
              onInput={(value) =>
                setUser((state) => ({ ...state, lastname: value }))
              }
            />
          </div>
          <div>
            <label className="block mb-2">Usuario</label>
            <Input
              value={user.user}
              onInput={(value) =>
                setUser((state) => ({ ...state, user: value }))
              }
            />
          </div>
          <div>
            <label className="block mb-2">Password</label>
            <Input
              type="password"
              value={user.password}
              onInput={(value) =>
                setUser((state) => ({ ...state, password: value }))
              }
            />
          </div>
          <div>
            <label className="block mb-2">Pais</label>
            <select
              className="border border-gray-400 rounded w-full p-4 focus:border-gray-500 focus:outline-none"
              onChange={(event) =>
                setUser((state) => ({ ...state, country: event.target.value }))
              }
            >
              <option value="">Seleccionar</option>
              <option value="1">Peru</option>
              <option value="2">Chile</option>
              <option value="3">Argentina</option>
              <option value="4">Bolivia</option>
            </select>
          </div>
          <div>
            <label>Sexo</label>
            <div className="flex items-center">
              <label className="flex items-center mr-4 cursor-pointer">
                <input
                  name="sex"
                  className="mr-2 cursor-pointer"
                  type="radio"
                  value="f"
                  onChange={(event) =>
                    setUser((state) => ({
                      ...state,
                      sex: event.target.value,
                    }))
                  }
                />
                <span className="font-bold">F</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  name="sex"
                  className="mr-2 cursor-pointer"
                  type="radio"
                  value="m"
                  onChange={(event) =>
                    setUser((state) => ({
                      ...state,
                      sex: event.target.value,
                    }))
                  }
                />
                <span className="font-bold">M</span>
              </label>
            </div>
          </div>
          <div
            style={{
              gridColumnStart: 1,
              gridColumnEnd: 3,
            }}
          >
            <label className="block mb-2">Tipo de usuario</label>
            <select
              className="border border-gray-400 rounded w-full p-4 focus:border-gray-500 focus:outline-none"
              onChange={(event) =>
                setUser((state) => ({
                  ...state,
                  typeUser: event.target.value,
                }))
              }
            >
              <option value="">Seleccionar</option>
              <option value="1">Cliente</option>
              <option value="2">Administrador</option>
            </select>
          </div>
        </div>
        <FacebookLogin
          appId="849324069085202"
          autoLoad={false}
          fields="name,email,picture"
          // onClick={componentClicked}
          callback={responseFacebook}
          icon="fa-facebook"
          textButton="Registrarte con facebook"
          cssClass="btn-fb"
        />
        <GoogleLogin
          clientId="1054045558021-gugtmq0qncge0pvq0p942e6okfatrnkg.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseFailedGoogle}
          cookiePolicy={"single_host_origin"}
          buttonText="Registrarte con Gmail"
          className="btn-gmail"
        />
        <div className="mt-10">
          <div className="text-center">
            <Button type="submit">Ingresar</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
