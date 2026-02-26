import Todo from "./Todo";

export default function ListTodos({ todos }) {
  if (!todos || !Array.isArray(todos) || todos.length === 0)
    return <>nut items</>;
  return (
    <div className="flex flex-wrap justify-center sm:justify-between w-[80%]">
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}
