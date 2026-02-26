import "./App.css";
import AdminLoginPage from "./pages/AdminLoginPage";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router";
import SubmitComplaintPage from "./pages/SubmitComplaintPage";
import AdminComplaintsPage from "./pages/AdminComplaintsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit" element={<SubmitComplaintPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<AdminComplaintsPage />} />
      </Routes>
    </>
  );
}

export default App;
