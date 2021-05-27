import "./Button.css";
export default function Button({ type, variety, text, onClick }) {
  let className = "";
  if (variety === "primary") {
    type = "submit";
    className = "btn";
  }
  if (variety === "secondary") {
    type = "reset";
    className = "btn btn-secondary";
  }
  if (variety === "tertiary") {
    className = "btn btn-tertiary";
  }
  if (variety === "back") {
    className = "btn-back";
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
}
