import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { loginApi, returnComplaintsApi } from "../api/complaintsApi";

export default function HomePage() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log(password);

  async function loginAdmin() {
    const res = await loginApi(password); 
    if(res.Unauthorized){
      
    }   
    if(res.token){
      navigate("/admin")
      const data = await returnComplaintsApi(res.token)      
    }
  }
  return (
    <>
      <div className="w-full flex font-bold justify-around items-center h-[10vh] bg-[#d8d1d1] text-2xl">
        Home Page
      </div>
      <div className="m-auto w-100">
        <div className="border h-40">
          <p className="text-2xl font-bold">תיבת תלונות אננונמיות בבסיס צבאי</p>
          <hr className="w-90 m-auto " />
          <p className="mt-4">שלחו תלונה בצורה אנונימית פשוטה</p>
          <Link to={"/submit"}>
            <p className="flex justify-center items-center mt-10  bg-[#469655] text-white cursor-pointer hover:bg-[#469655a3]">
              שליחת תלונה
            </p>
          </Link>
        </div>
        <div className="border h-40 mt-10">
          <p className="text-2xl font-bold">מפקדים בלבד</p>
          <hr className="w-90 m-auto" />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="border mt-5"
          />{" "}
          :password
          <div>
            <button
              onClick={loginAdmin}
              className="mt-5 w-30  h-10 bg-[#2864be] text-white cursor-pointer hover:bg-[#2864be8a]"
            >
              כניסה לאדמין
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
