import "./main.scss";
export function Main(props) {
  const { children } = props;

  return (
    <main className="main">
      <div className="container mx-auto">{children}</div>
    </main>
  );
}
