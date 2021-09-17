export function Input(props) {
  const {
    value,
    type,
    placeholder,
    className,
    onInput = () => {},
    required = false,
  } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`border border-gray-400 rounded w-full p-4 focus:border-gray-500 focus:outline-none ${className}`}
      value={value}
      onInput={(event) => onInput(event.target.value)}
      required={required}
    />
  );
}
