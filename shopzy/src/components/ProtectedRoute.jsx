import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Not logged in — redirect to login page
    return <Navigate to="/login" replace />;
  }

  // Logged in — show the page
  return children;
}
