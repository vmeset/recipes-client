import { create } from "zustand";
import { immer } from 'zustand/middleware/immer'
import { IUser } from "../models/IUser";

interface AuthState {
  isAuth: Boolean
  user: IUser
  setAuth: (payload: Boolean) => void
}

export const useAuthStore = create<AuthState>()(immer((set) => ({
  user: {
    id: 0,
    email: 'guest',
    isActivated: false
  },
  isAuth: false,
  setAuth: (payload: Boolean) => set(state => {
    state.isAuth = payload
  })

})))