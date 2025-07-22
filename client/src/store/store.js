import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  setIsAuthenticated: (isAuthenticated) => {
    set({ isAuthenticated });
  },
  setUser: (user) => {
    set({ user });
  },
}));

export default useStore;
