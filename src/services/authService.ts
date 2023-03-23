import { $host } from "../http"
import {AxiosResponse} from 'axios'
import { AuthResponse } from "../models/AuthResponse"

export default class AuthService {
  static async login(email: String, password: String): Promise<AxiosResponse<AuthResponse>> {
    return $host.post<AuthResponse>('/auth/login', {email, password})
  }
}