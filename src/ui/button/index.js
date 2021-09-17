export function Button(props) {
  const { children, cb = () => {}, type = "button" } = props;

  return (
    <button
      type={type}
      className="p-4 px-10 rounded bg-green-300 text-white"
      onClick={() => cb()}
    >
      {children}
    </button>
  );
}
