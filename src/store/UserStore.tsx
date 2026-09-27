//userStore
import { create } from "zustand";

export interface CurrentUser {
  name: string;
  email: string;
  role?: string;
}

interface UserStoreModel {
  sessionId: string | null;
  currentUser: CurrentUser | null;
  setSessionId: (token: string) => void;
  setCurrentUser: (user: CurrentUser) => void;
  logout: () => void;
}

const readStoredUser = (): CurrentUser | null => {
  const raw = localStorage.getItem("currentUser");
  if (!raw) return null;
  try {
    return JSON.parse(raw) as CurrentUser;
  } catch {
    return null;
  }
};

export const UserStore = create<UserStoreModel>()((set) => ({
  sessionId: localStorage.getItem("sessionId") || null,
  currentUser: readStoredUser(),

  setSessionId: (token) => {
    localStorage.setItem("sessionId", token);
    set({ sessionId: token });
  },

  setCurrentUser: (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
    set({ currentUser: user });
  },

  logout: () => {
    localStorage.removeItem("sessionId");
    localStorage.removeItem("currentUser");
    set({
      sessionId: null,
      currentUser: null,
    });
  },
}));