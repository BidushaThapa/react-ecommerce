import { UserStore } from "../store/UserStore";
import { users } from "./constant";

export const useAuth = () => {
  const logout = UserStore((state) => state.logout);
   const sessionId = UserStore((state)=> state.sessionId)
   const currentUser =UserStore ((state)=>state.currentUser)
  const  isAuthenticated= () =>  Boolean(sessionId);
  

  const getUser= () => users.find((user)=>user.token===sessionId)
  return {
    logout,
    isAuthenticated,
    getUser,
    sessionId,
    currentUser,
  };
};
