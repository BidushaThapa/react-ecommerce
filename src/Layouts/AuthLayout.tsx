import {  Outlet, useNavigate } from "react-router-dom";
import { Header } from "../components/Header"; 
import { useAuth } from "../Apihooks/useAuth"; 
import { useEffect } from "react";
export const AuthLayout = () => {
const {sessionId}=useAuth();
 const navigate =useNavigate () ;
 useEffect(()=>{
    if (!sessionId){
        navigate("/login")
    }
 },[sessionId])
  return (

    <div className="h-screen">
      <Header />
      <Outlet />
    </div>
  );
};
