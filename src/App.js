import "bootstrap/dist/css/bootstrap.css";
import Rating from "./Rating";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsd } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [rating, setRating] = useState(2);

  return (
    <Rating rating={rating} total={3}>
      {(isFilled, starNumber) => {
        const color = isFilled ? "green" : "#ddd";
        const size = "3x";

        return (
          <button
            type="button"
            className="btn btn-link"
            onClick={() => {
              setRating(starNumber);
            }}
          >
            <FontAwesomeIcon icon={faUsd} color={color} size={size} />
          </button>
        );
      }}
    </Rating>
  );
}
