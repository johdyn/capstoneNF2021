import "./Header.css";
export default function Header({ text }) {
  return (
    <div className="background-container">
      <header className="header">
        <h1 className="h1-class">{text}</h1>
      </header>
    </div>
  );
}
