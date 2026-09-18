import { useAuth } from '@/Apihooks/useAuth'
import React from 'react'

const AdminDashboard = () => {
    const {getUser,logout}=useAuth();
    const admin= getUser();
  return (
    <div className="p-6 h-screen flex items-center justify-center flex-col">
      <h1>Welcome Admin, {admin?.name}</h1>
      <p>Email: {admin?.email}</p>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-2 rounded mt-4"
      >
        Logout
      </button>

      {/* You can add more admin widgets here, e.g., orders, products */}
    </div>
  )
}

export default AdminDashboard