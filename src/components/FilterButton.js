import "./FilterButton.css";
export default function FilterButton({ text, onClick }) {
  return (
    <button className="filter-button" onClick={onClick}>
      {text}
    </button>
  );
}
