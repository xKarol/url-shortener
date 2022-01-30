export default function Nav({ title, children }) {
  return (
    <nav className="footer__links">
      <h1 className="footer__link-title">{title}</h1>
      {children}
    </nav>
  );
}
