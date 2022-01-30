export default function Nav({ title, children }) {
  console.log(children);
  return (
    <nav className="footer__links">
      <h1 className="footer__link-title">{title}</h1>
      {children}
    </nav>
  );
}
