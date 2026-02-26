import React from "react";

export default function AdminLoginPage() {
  return (
    <>
      <div className="w-full flex font-bold justify-around items-center h-[10vh] bg-[#d8d1d1] text-2xl">
        Admin Login Page
      </div>
      <div className="border h-50 w-130 m-auto">
        <p className="text-2xl font-bold">כניסה לאדמין</p>
        <hr className="w-120 " />
        <input type="text" className="border" /> :password
        <div>
          <button className="border w-40 h-11 bg-[#2864be] text-white cursor-pointer">
            התחברות
          </button>
        </div>
      </div>
    </>
  );
}
