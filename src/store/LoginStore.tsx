import { create } from "zustand";

export const useLoginStore = create((set) => ({
  isLogin: true,
  setIsLogin: (value:string) => {
    set({
      isLogin: value,
    });
  },
}));