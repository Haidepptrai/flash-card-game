// components/Flashcard.js
import { useState } from "react";

const Flashcard = ({ question, answer, onAnswer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleCorrect = () => {
    onAnswer(true);
    setFlipped(false);
  };

  const handleIncorrect = () => {
    onAnswer(false);
    setFlipped(false);
  };

  return (
    <div
      className={`max-w-xl mx-auto bg-white shadow-lg rounded-lg p-6 my-4 flip-card ${
        flipped ? "flipped" : ""
      }`}
    >
      <div className="flip-card-inner">
        <div className={`flip-card-front  ${flipped ? "hidden" : "block"}`}>
          <div className="text-xl">
            <p>
              <span className="font-semibold">Question: </span>
              {question}
            </p>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleFlip}
          >
            Show Answer
          </button>
        </div>
        <div className={`flip-card-back ${flipped ? "block" : "hidden"}`}>
          <div className="text-xl">
            <p>
              <span className="font-semibold">Answer: </span>
              {answer}
            </p>
          </div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleFlip}
          >
            Show Question
          </button>
          <div className="mt-4 flex justify-between">
            <button
              className="bg-green-500 text-white px-4 py-2 rounded"
              onClick={handleCorrect}
            >
              Correct
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleIncorrect}
            >
              Incorrect
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
