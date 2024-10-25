import { Navigate, Route, Routes } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { ProtectedRoute } from "./ProtectedRoute";
import { Login } from "../components/screens/Login/Login";

export const AppRoutes = () => {
  const isLogged = useAppSelector((state) => state.auth.isLogged);

  return (
    <Routes>
      {isLogged ? (
        <Route path="/*" element={<ProtectedRoute />} />
      ) : (
        <Route path="/*" element={<Navigate to={"/login"} />} />
      )}
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
