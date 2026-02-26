import { useNavigate } from "react-router";
import ComplaintForm from "../components/ComplaintForm";
import { useState } from "react";
import { createComplaintsApi } from "../api/complaintsApi";

export default function SubmitComplaintPage() {
  const navigate = useNavigate();

  const [complaint, setComplaint] = useState({
    category: "אוכל",
    message: "",
  });
  const [res, setRes] = useState({ color: "", display: "hidden", message: "" });

  async function appendCompl() {
    setRes(await createComplaintsApi(complaint));
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }

  return (
    <>
      <div className="w-full flex font-bold justify-around items-center h-[10vh] bg-[#d8d1d1] text-2xl">
        Submit Complaint Page
      </div>
      <div className="border w-150 h-120 m-auto">
        <ComplaintForm data={complaint} setData={setComplaint} />
        <button
          className=" border w-40 h-11 bg-[#469655] text-white cursor-pointer"
          onClick={appendCompl}
        >
          שליחה
        </button>
        <div className={`border ${res.color} ${res.display} `}>
          ADDED complaint: {res.message}{" "}
        </div>
      </div>
    </>
  );
}
