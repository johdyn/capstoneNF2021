import "./Header.css";
export default function Header({ text, headerClass, h1Class }) {
  return (
    <header className={headerClass}>
      <h1 className={h1Class}>{text}</h1>
    </header>
  );
}
