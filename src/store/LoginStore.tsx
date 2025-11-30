import { create } from "zustand";

export const useLoginStore = create((set) => ({
  isLogin: true,
  setIsLogin: (value) => {
    set({
      isLogin: value,
    });
  },
}));