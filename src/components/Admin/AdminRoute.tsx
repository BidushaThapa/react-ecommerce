import { useAuth } from '@/Apihooks/useAuth';
import React from 'react'
import { Navigate } from 'react-router-dom';

export const AdminRoute = ({children}:{children: React.ReactNode}) => {
    const {isAuthenticated,isAdmin}=useAuth();
   if (!isAuthenticated()) 
    return <Navigate to="/login" />;
  if (!isAdmin()) 
    return <Navigate to="/" />;

  return children;
};
