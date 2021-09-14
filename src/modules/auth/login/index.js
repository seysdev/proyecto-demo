import { Input, Button } from "ui";
export function AuthLogin() {
  return (
    <div className="auth-login w-6/12 mx-auto">
      <h1 className="text-4xl font-bold text-center mb-4 mt-10">Login</h1>
      <form>
        <div className="mb-8">
          <label className="block mb-2">Usuario</label>
          {/* <input
            className="border border-gray-400 rounded w-full p-4 focus:border-gray-500 focus:outline-none"
            type="text"
          /> */}
          <Input />
        </div>
        <div>
          <label className="block mb-2">Password</label>
          {/* <input
            className="border border-gray-400 rounded w-full p-4 focus:border-gray-500 focus:outline-none"
            type="password"
          /> */}
          <Input />
        </div>
        <div className="mt-10">
          <div className="text-center">
            <Button>Ingresar</Button>
          </div>
        </div>
      </form>
    </div>
  );
}
