import "./Button.css";
export default function Button({ type, text, onClick }) {
  let className = "";
  if (type === "primary") {
    className = "btn";
  }
  if (type === "secondary") {
    className = "btn btn-secondary";
  }
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}
