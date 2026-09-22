import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { useAuth } from "../Apihooks/useAuth";
import { useEffect } from "react";
export const AuthLayout = () => {
  const { sessionId } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionId) {
      navigate("/login");
    }
  }, [sessionId]);
  return (
    <div className="min-h-screen bg-[#f8f7f3]">
      <Header />
      <Outlet />
    </div>
  );
};
