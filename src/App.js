import { Header, Footer, Main } from "components";

export function App() {
  return (
    <div className="wrapper flex flex-col h-screen">
      <Header />
      <Main>HOLA MUNDO</Main>
      <Footer />
    </div>
  );
}
