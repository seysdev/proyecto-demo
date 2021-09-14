import { Header, Footer, Main } from "components";
import { AuthRegister, AuthLogin } from "modules/auth";

export function App() {
  return (
    <div className="wrapper flex flex-col h-screen">
      <Header />
      <Main>
        <AuthLogin />
        <AuthRegister />
      </Main>
      <Footer />
    </div>
  );
}
