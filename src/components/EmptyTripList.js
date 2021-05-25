import "./EmptyTripList.css";
import { useHistory } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

export default function EmptyTripList({ text, path }) {
  let history = useHistory();
  return (
    <button
      className="empty-state-add-button"
      onClick={() => history.push(path)}
    >
      {text}
    </button>
  );
}
