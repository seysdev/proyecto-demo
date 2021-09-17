import { useState } from "react";
import { Input, Button } from "ui";
export function AuthLogin() {
  const [stateForm, setStateForm] = useState({
    user: "",
    password: "",
  });

  const onsubmit = (event) => {
    event.preventDefault();
    console.log("stateForm", stateForm);
  };

  return (
    <div className="auth-login w-6/12 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4 mt-10">Login</h1>
      <form onSubmit={onsubmit}>
        <div className="mb-8">
          <label className="block mb-2">Usuario</label>
          <Input
            value={stateForm.user}
            placeholder="Usuario"
            onInput={(value) =>
              setStateForm((state) => ({ ...state, user: value }))
            }
            required
          />
        </div>
        <div>
          <label className="block mb-2">Password</label>
          <Input
            value={stateForm.password}
            placeholder="Password"
            type="password"
            onInput={(value) =>
              setStateForm((state) => ({ ...state, password: value }))
            }
            required
          />
        </div>
        <div className="mt-10">
          <div className="text-center">
            <Button type="submit">Ingresar</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
