export function Button(props) {
  const { children } = props;

  return (
    <button className="p-4 px-10 rounded bg-green-300 text-white">
      {children}
    </button>
  );
}
