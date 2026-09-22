import { UserStore } from "../store/UserStore";

export const useAuth = () => {
  const logout = UserStore((state) => state.logout);
   const sessionId = UserStore((state)=> state.sessionId)
   const currentUser =UserStore ((state)=>state.currentUser)
  const  isAuthenticated= () =>  Boolean(sessionId);

  const getUser = () => currentUser;

  const isAdmin=()=>{
    return currentUser?.role === "admin" || currentUser?.email === "admin@gmail.com";
  }
  return {
    logout,
    isAuthenticated,
    getUser,
    sessionId,
    currentUser,
    isAdmin
  };
};