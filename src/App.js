import { Header, Footer, Main } from "components";
import { AuthRegister } from "modules/auth";

export function App() {
  return (
    <div className="wrapper flex flex-col h-screen">
      <Header />
      <Main>
        <AuthRegister />
      </Main>
      <Footer />
    </div>
  );
}
