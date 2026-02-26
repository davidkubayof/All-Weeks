import { useContext, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Dialog from "./Dialog";
import TodosContext from "../context/TodosContext";

export default function Todo({ todo }) {
  const { setTodos } = useContext(TodosContext);
  if (!todo) return;
  const [isOpenDialog, setIsOpenDialog] = useState(false);
  return (
    <>
      <div className='bg-[#fae8e8] m-2 h-[300px] rounded-lg shadow-xl p-2 w-[80%] sm:w-[30%] flex flex-col items-center justify-around hover:shadow-2xl hover:scale-105' key={todo.id}>
        <h3>{todo.title}</h3>
        <span className="text-center">{todo.description}</span>
        <span>{todo.createdAt}</span>
        <div className="flex justify-around w-full">
          <EditIcon
            className="cursor-pointer hover:scale-110"
            titleAccess="Edit todo"
          />
          <DeleteIcon
            onClick={() => setIsOpenDialog(true)}
            className="cursor-pointer hover:scale-110"
            color="error"
            titleAccess="Delete todo"
          />
        </div>
      </div>
      {isOpenDialog && (
        <Dialog
          dir="rtl"
          desc={`האם אתה בטוח שברצונך למחוק את משימה ${todo.id}?`}
          title={"מחיקת משימה"}
          textConfirm="אישור"
          textCancel="ביטול"
          onCancel={() => setIsOpenDialog(false)}
          onConfirm={() => {
            setTodos((prev) => {
              return prev.filter((t) => t.id !== todo.id);
            });
            setIsOpenDialog(false);
          }}
        />
      )}
    </>
  );
}
