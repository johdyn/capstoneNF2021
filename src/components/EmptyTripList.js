import "./EmptyTripList.css";
import { useHistory } from "react-router-dom";

export default function EmptyTripList({ text, path }) {
  let history = useHistory();
  return (
    <div>
      <button
        className="empty-state-add-button"
        onClick={() => history.push(path)}
      >
        {text}
      </button>
    </div>
  );
}
