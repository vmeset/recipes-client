import axios from "axios"
import { create } from "zustand"
import { immer } from 'zustand/middleware/immer'
import { AuthResponse } from "../models/AuthResponse"
import { IUser } from "../models/IUser"
import AuthService from "../services/AuthService"

interface AuthState {
  isAuth: boolean
  isLoading: boolean
  user: IUser
  setAuth: (payload: boolean) => void
  login: (email: string, password: string) => void
  checkAuth: () => void
}

export const useAuthStore = create<AuthState>()(immer((set) => ({
  user: {
    id: '',
    email: '',
    isActivated: false
  },
  isAuth: false,
  isLoading: false,
  setAuth: (payload: boolean) => set(state => {
    state.isAuth = payload
  }),
  login: async (email: string, password: string) => {
    try {
      const response = await AuthService.login(email, password)
      localStorage.setItem('accessToken', response.data.accessToken)
      set({isAuth: true})
      set({user: response.data.user})
    } catch(e: any) {
      console.log(e.response?.data?.message)
    }
  },
  checkAuth: async () => {
    set({isLoading: true})
    try {
      const response = await axios.get<AuthResponse>(`${process.env.REACT_APP_API_URL}/auth/refresh`,
        {withCredentials: true})
      localStorage.setItem('accessToken', response.data.accessToken)
      set({isAuth: true})
      set({user: response.data.user})
    } catch(e: any) {
      console.log(e.response?.data?.message)
    } finally {
      set({isLoading: false})
    }
  }
})))



class Rect {
  width
  private height

  constructor(w: number, h: number) {
    this.width = w
    this.height = h
  }

}

const rect = new Rect(10, 20)

rect.width = 33

