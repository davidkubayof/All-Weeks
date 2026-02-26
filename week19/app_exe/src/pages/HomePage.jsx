import { useContext, useState } from "react";
import ListTodos from "../comps/ListTodos";
import { TodosContext } from "../context/TodosContext";

export default function HomePage() {
  const { todos } = useContext(TodosContext);
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col items-center min-h-[90vh]">
      <h2 className="text-2xl font-bold m-5">Home</h2>
      <div className="w-full p-3 flex justify-center">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="border border-gray-300 hover:border-gray-500 rounded w-[80%] p-4"
          placeholder="Search todo"
          type="text"
        />
      </div>
      <ListTodos todos={todos.filter((todo) => todo.title.includes(search))} />
    </div>
  );
}
