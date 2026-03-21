import { Navigate } from "react-router";

export default function ProtactedRoute({ children, roles=["admin"] }) {
  if(!localStorage.getItem('token')) return <Navigate to="/login" replace />; 
  if (localStorage.getItem("user_type") !== "admin") return null;
  return (
    <>{children}</>
  )
}
