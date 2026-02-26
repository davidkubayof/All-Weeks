import React from "react";

export default function AdminComplaintsPage({data}) {
  return (
    <>
      <div className="w-full flex font-bold justify-around items-center h-[10vh] bg-[#d8d1d1] text-2xl">
        Admin Complaints Page
      </div>
      <div className="border h-150 w-250 m-auto">
        <p className="text-2xl font-bold">רשימת תלונות</p>
        <hr className="w-120 " />
        <button className="border w-40 h-11   cursor-pointer hover:bg-[#2864be]">
          כניסה לאדמין
        </button>
        <button className="border w-40 h-11  cursor- hover:bg-[#2864be]">
          כניסה לאדמין
        </button>
        <button className="border w-40 h-11  cursor- hover:bg-[#2864be]">
          כניסה לאדמין
        </button>
        <button className="border w-40 h-11  cursor- hover:bg-[#2864be]">
          כניסה לאדמין
        </button>
        <button className="border w-40 h-11  cursor- hover:bg-[#2864be]">
          כניסה לאדמין
        </button>
        <table >
          <tr>
            <th>סוג התלונה</th>
            <th>תוכן התלונה</th>
            <th>נוצר ב</th>
          </tr>

          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
        </table>
      </div>
    </>
  );
}
