// pages/index.js
import Flashcard from "@/components/FlashCard";
import { useState } from "react";

// flashcards.js

// const flashcards = [
//   {
//     question:
//       "What is the difference between authentication and authorization in .NET?",
//     answer:
//       "Authentication verifies the identity of the user, confirming who they are, while authorization determines what the authenticated user is allowed to do within the system. Authentication answers 'Who are you?', and authorization answers 'What can you do?'",
//   },
//   {
//     question: "How does ASP.NET Core Identity handle user authentication?",
//     answer:
//       "ASP.NET Core Identity is a membership system that allows you to add login functionality to your app. It handles user authentication by managing user information, passwords, roles, and claims. It uses cookies to maintain the user's session and provides built-in features like password hashing, login/logout, and security token validation.",
//   },
//   {
//     question: "What is role-based authorization in .NET?",
//     answer:
//       "Role-based authorization in .NET allows access to certain parts of an application based on the user's assigned roles. It uses the [Authorize] attribute to protect specific routes or actions, and roles are typically defined within the system, such as 'Admin', 'User', or 'Manager'.",
//   },
//   {
//     question:
//       "What is policy-based authorization in .NET, and how does it differ from role-based authorization?",
//     answer:
//       "Policy-based authorization in .NET allows more granular control by defining rules or policies that users must satisfy to access certain parts of the application. Unlike role-based authorization, which checks for user roles, policy-based authorization can include custom requirements such as specific claims, roles, or other user properties.",
//   },
//   {
//     question:
//       "What is claims-based authorization, and how is it implemented in .NET?",
//     answer:
//       "Claims-based authorization uses information about the user in the form of claims to determine access to resources. Each claim represents a piece of information about the user (e.g., email, roles). In .NET, you can use the [Authorize] attribute with specific claims or define custom policies that check for specific claims in the user's identity.",
//   },
//   {
//     question: "What is JWT (JSON Web Token)? Define structure of an JWT",
//     answer:
//       "JWT (JSON Web Token) is a compact, URL-safe token format used to represent claims between two parties. It is commonly used for authentication and information exchange in web applications. A JWT consists of three parts: a header, a payload, and a signature. The header typically specifies the algorithm used for signing the token, the payload contains the claims or user information, and the signature is used to verify the token's authenticity and ensure that it has not been tampered with. JWTs are often used in stateless authentication scenarios, where the token is included in the Authorization header of HTTP requests to verify the identity and permissions of the user.",
//   },
//   {
//     question:
//       "How can you use external login providers like Google or Facebook in an ASP.NET Core app?",
//     answer:
//       "External login providers like Google or Facebook can be integrated using OAuth in ASP.NET Core. This involves registering the provider in the Startup class by calling AddAuthentication().AddGoogle() or AddFacebook(), providing client ID and secret from the respective provider, and using the authentication middleware to handle the OAuth flow.",
//   },
//   {
//     question: "What is the purpose of the [AllowAnonymous] attribute in .NET?",
//     answer:
//       "The [AllowAnonymous] attribute in .NET is used to allow access to specific controllers or actions without requiring authentication. It overrides the global or class-level [Authorize] attribute, enabling certain pages (e.g., login, registration) to be accessed by unauthenticated users.",
//   },
// ];

const flashcards = [
  {
    question: "What is a Thread in .NET?",
    answer:
      "A Thread in .NET is the smallest unit of processing that can be scheduled by the operating system. Threads allow concurrent execution of code, enabling multiple tasks to run at the same time within the same application.",
  },
  {
    question: "How does the ThreadPool work in .NET?",
    answer:
      "The ThreadPool in .NET manages a pool of worker threads that can be reused for executing multiple tasks. When a task is queued, the ThreadPool assigns an available thread from the pool, allowing for efficient management of threads without the overhead of creating and destroying them repeatedly.",
  },
  {
    question: "What is the Task Parallel Library (TPL) in .NET?",
    answer:
      "The Task Parallel Library (TPL) is a set of public types and APIs in .NET that simplifies parallel programming. It provides an abstraction for working with asynchronous and parallel operations through the Task class, enabling developers to write scalable and efficient code.",
  },
  {
    question: "What is the difference between concurrency and parallelism?",
    answer:
      "Concurrency refers to the ability to manage multiple tasks at the same time, potentially overlapping in execution. Parallelism, on the other hand, is the actual simultaneous execution of multiple tasks across multiple CPU cores.",
  },
  {
    question: "What is asynchronous programming in .NET?",
    answer:
      "Asynchronous programming in .NET allows for the execution of tasks without blocking the main thread. It enables the application to remain responsive while performing long-running operations by using the async and await keywords to manage asynchronous tasks.",
  },
  {
    question: "How do async and await work in .NET?",
    answer:
      "The async keyword modifies a method to allow the use of await within it. The await keyword pauses the execution of the async method until the awaited task completes, allowing other operations to run concurrently without blocking the main thread.",
  },
  {
    question: "What is the significance of the Task class in TPL?",
    answer:
      "The Task class represents an asynchronous operation in TPL. It allows you to create, start, and manage tasks that can run concurrently. Tasks provide a higher-level abstraction over threads, making it easier to work with asynchronous programming.",
  },
  {
    question: "How does the ThreadPool handle tasks efficiently?",
    answer:
      "The ThreadPool reduces the overhead of thread management by reusing existing threads for multiple tasks. When a task is completed, the thread returns to the pool instead of being destroyed, allowing for quick allocation for new tasks.",
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

