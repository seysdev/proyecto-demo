export function Nav() {
  const links = [
    {
      text: "Home",
      url: "/",
    },
    {
      text: "Servicios",
      url: "/",
    },
    {
      text: "Portafolio",
      url: "/",
    },
    {
      text: "Contacto",
      url: "/",
    },
  ];

  return (
    <nav className="nav">
      <ul>
        {links.map((link, idx) => (
          <li key={idx}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
