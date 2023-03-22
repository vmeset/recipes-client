import Auth from "./pages/auth/Auth"
import Home from "./pages/home/Home"
import { HOME_ROUTE, LOGIN_ROUTE, REG_ROUTE } from "./utils/consts";

export const publicRoutes = [
  {
    Component: Auth,
    path: LOGIN_ROUTE
  },
  {
    Component: Auth,
    path: REG_ROUTE
  }
]

export const authRoutes = [
  {
    Component: Home,
    path: HOME_ROUTE
  }
]