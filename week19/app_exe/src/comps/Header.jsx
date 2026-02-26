import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    <div className="h-[10vh] bg-[#09] rounded-b-2xl shadow-md flex items-center justify-around px[40px]">
      <div className="flex items-center gap-3">
        <img className="object-cover w-20 rounded-2xl" src="/vite.svg" alt="" />
        <Link className="hover:text-[blue]" to={"/"}>Home</Link>
      </div>
      <Link className="hover:text-[blue]" to={"/AddTodo"}>Add</Link>
    </div>
  );
}
