// pages/index.js
import Flashcard from "@/components/FlashCard";
import { useState } from "react";

// flashcards.js

const flashcards = [
  {
    question:
      "What is the Factory Method pattern, and how does it help in object creation?",
    answer:
      "The Factory Method pattern defines an interface for creating objects but allows subclasses to alter the type of objects that will be created. It helps in object creation by providing a way to delegate the instantiation logic to child classes, which can be useful for managing and maintaining object creation complexity and promoting code extensibility.",
  },
  {
    question:
      "How does the Adapter pattern help in making incompatible interfaces work together?",
    answer:
      "The Adapter pattern allows classes with incompatible interfaces to work together by creating an adapter that translates the interface of a class into another interface that the client expects. This enables objects to communicate and interact even if their interfaces do not match directly.",
  },
  {
    question:
      "What is encapsulation, and why is it important in object-oriented programming?",
    answer:
      "Encapsulation is an OOP principle that involves bundling data (attributes) and methods (functions) that operate on the data into a single unit or class, and restricting access to some of the object’s components. It is important because it helps in hiding the internal state of an object from the outside world, reducing complexity, and protecting the integrity of the data.",
  },
  {
    question: "How does polymorphism benefit code flexibility and reuse?",
    answer:
      "Polymorphism allows objects of different classes to be treated as objects of a common superclass, primarily through a common interface or method signature. It benefits code flexibility and reuse by enabling the same interface or method to be used for different data types or objects, facilitating easier extension and modification of code.",
  },
  {
    question: "What is an interface, and how is it different from a class?",
    answer:
      "An interface in programming is a reference type that defines a contract for classes without implementing any behavior. It specifies a set of methods that must be implemented by any class that implements the interface. Unlike a class, which can provide the implementation of methods and maintain state, an interface only defines method signatures and constants, providing no implementation details.",
  },
  {
    question:
      "What is the purpose of keys in React lists, and why are they important?",
    answer:
      "Keys in React lists help identify which items have changed, are added, or are removed, providing a way for React to optimize rendering and update only the necessary parts of the UI. They are important because they help maintain the integrity of the list and improve performance by minimizing re-renders and enabling efficient reconciliation.",
  },
  {
    question: "What are four main characteristics of OOP?",
    answer:
      "The four main characteristics of Object-Oriented Programming (OOP) are: 1) Encapsulation - bundling data and methods into a single unit and restricting access to some of the object’s components; 2) Abstraction - hiding complex implementation details and showing only the necessary features of an object; 3) Inheritance - creating new classes from existing ones, inheriting attributes and methods; 4) Polymorphism - enabling objects of different classes to be treated as objects of a common superclass through a shared interface or method signature.",
  },
  {
    question: "What is a promise, and why is it used?",
    answer:
      "A promise is an object representing the eventual completion or failure of an asynchronous operation. It is used to handle asynchronous operations in JavaScript by allowing you to attach callbacks for success or failure, facilitating easier management of asynchronous code and improving readability and error handling.",
  },
];

export default function Home() {
  const [unansweredCards, setUnansweredCards] = useState(flashcards);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      const newUnansweredCards = unansweredCards.filter(
        (_, index) => index !== currentCardIndex
      );
      setUnansweredCards(newUnansweredCards);
      setCurrentCardIndex(0);
    } else {
      setCurrentCardIndex((currentCardIndex + 1) % unansweredCards.length);
    }

    if (unansweredCards.length === 1 && isCorrect) {
      alert("Congratulations! You have answered all questions correctly.");
      // Reset the game
      setUnansweredCards(flashcards);
      setCurrentCardIndex(0);
    }
  };

  const progress =
    ((flashcards.length - unansweredCards.length) / flashcards.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Flashcard Game</h1>
      {unansweredCards.length > 0 ? (
        <Flashcard
          question={unansweredCards[currentCardIndex].question}
          answer={unansweredCards[currentCardIndex].answer}
          onAnswer={handleAnswer}
        />
      ) : (
        <div className="text-2xl">All questions answered correctly!</div>
      )}
      <div className="w-full max-w-md mt-4">
        <div className="w-full bg-gray-300 rounded-full">
          <div
            className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
