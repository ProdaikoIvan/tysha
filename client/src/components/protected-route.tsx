import { Navigate, Outlet } from "react-router-dom";
import AuthService from "../services/auth.service";
import { ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return AuthService.isLoggedIn() ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;