import { useState } from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import EditTodo from "./pages/EditTodo";
import AddTodo from "./pages/AddTodo";
import DeleteTodo from "./pages/DeleteTodo";
import UserContext from "./context/UserContext";
import Header from "./comps/Header";
import TodosContext from "./context/TodosContext.js";
import "./App.css";

export default function App() {
  const user = { username: "David" };
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Buy groceries",
      description: "Pick up milk, eggs, and kale for the smoothie phase.",
      createdAt: "2026-02-20T09:00:00Z",
      toggle: true,
    },
    {
      id: 2,
      title: "Finish report",
      description:
        "Complete the Q1 financial projections for the board meeting.",
      createdAt: "2026-02-21T10:30:00Z",
      toggle: false,
    },
    {
      id: 3,
      title: "Gym session",
      description: "Upper body workout and 20 minutes of cardio.",
      createdAt: "2026-02-21T17:15:00Z",
      toggle: false,
    },
    {
      id: 4,
      title: "Call Mom",
      description: "Catch up and wish her a happy early birthday.",
      createdAt: "2026-02-22T08:00:00Z",
      toggle: true,
    },
    {
      id: 5,
      title: "Debug API",
      description: "Fix the 500 error on the /users/auth endpoint.",
      createdAt: "2026-02-22T11:20:00Z",
      toggle: false,
    },
    {
      id: 6,
      title: "Water plants",
      description: "The monstera is looking a little dramatic again.",
      createdAt: "2026-02-22T14:00:00Z",
      toggle: true,
    },
    {
      id: 7,
      title: "Book flights",
      description: "Find a direct flight to Tokyo for the summer trip.",
      createdAt: "2026-02-23T09:45:00Z",
      toggle: false,
    },
    {
      id: 8,
      title: "Read Chapter 5",
      description: "Finish the chapter on Quantum Mechanics in 'The Universe'.",
      createdAt: "2026-02-23T20:00:00Z",
      toggle: false,
    },
    {
      id: 9,
      title: "Car wash",
      description: "Inside and out. Don't forget the trunk.",
      createdAt: "2026-02-24T07:30:00Z",
      toggle: false,
    },
    {
      id: 10,
      title: "Laundry",
      description: "Separate whites and colors this time.",
      createdAt: "2026-02-24T16:00:00Z",
      toggle: true,
    },
    {
      id: 11,
      title: "Update Resume",
      description: "Add the new certification and current project details.",
      createdAt: "2026-02-25T10:00:00Z",
      toggle: false,
    },
    {
      id: 12,
      title: "Vet appointment",
      description: "Take Luna for her annual vaccinations at 4 PM.",
      createdAt: "2026-02-25T12:00:00Z",
      toggle: false,
    },
    {
      id: 13,
      title: "Dinner with Sarah",
      description: "Table booked at 'The Italian Place' for 7 PM.",
      createdAt: "2026-02-25T15:30:00Z",
      toggle: true,
    },
    {
      id: 14,
      title: "Pick up parcel",
      description: "Amazon package is at the locker down the street.",
      createdAt: "2026-02-26T08:15:00Z",
      toggle: false,
    },
    {
      id: 15,
      title: "Meditation",
      description: "10 minutes of mindfulness to start the day.",
      createdAt: "2026-02-26T06:00:00Z",
      toggle: true,
    },
    {
      id: 16,
      title: "Pay rent",
      description: "Transfer funds to the landlord before the 1st.",
      createdAt: "2026-02-26T09:00:00Z",
      toggle: false,
    },
    {
      id: 17,
      title: "Clean desk",
      description: "Clear off the coffee mugs and scrap paper.",
      createdAt: "2026-02-26T11:00:00Z",
      toggle: false,
    },
    {
      id: 18,
      title: "Write blog post",
      description: "Draft 500 words on the future of AI in 2026.",
      createdAt: "2026-02-26T13:45:00Z",
      toggle: false,
    },
    {
      id: 19,
      title: "Coffee beans",
      description: "Need to restock the espresso blend.",
      createdAt: "2026-02-26T15:00:00Z",
      toggle: false,
    },
    {
      id: 20,
      title: "Review PRs",
      description: "Go through the pending pull requests on GitHub.",
      createdAt: "2026-02-26T16:30:00Z",
      toggle: false,
    },
  ]);

  return (
    <>
      <div>
        <UserContext.Provider value={user}>
          <TodosContext.Provider value={{ todos, setTodos }}>
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/AddTodo" element={<AddTodo />} />
              {user.username === "David" &&  <>
                  <Route path="/EditTodo/:id" element={<EditTodo />} />
                  <Route path="/DeleteTodo" element={<DeleteTodo />} />
                </>}
            </Routes>
          </TodosContext.Provider>
        </UserContext.Provider>
      </div>
    </>
  );
}
