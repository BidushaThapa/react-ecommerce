//userStore
import { create } from "zustand";
interface UserStoreModel {
  sessionId:string|null,
  currentUser:string|null,
  setSessionId:(token:string)=>void,
  logout:()=>void
}

export const UserStore = create<UserStoreModel>()((set) => ({
  sessionId: localStorage.getItem("sessionId") || null,
currentUser:null,
    
  
  setSessionId: (token) => {
    // const user = users.find((u) => u.token === token) || null;
    localStorage.setItem("sessionId", token);
    set({ sessionId: token });
  },

   
  logout: () => {
    localStorage.removeItem("sessionId");
    set({
      sessionId: null,
      currentUser: null,
    });
  },

  
}));
