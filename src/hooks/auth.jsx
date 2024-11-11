import { createContext, useContext, useState, useEffect, useCookies } from "react"
import { api } from "../service/api"
import Cookies from 'js-cookie'

export const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  const [cookies, setCookie, removeCookie] = useCookies(['token'])

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password }, { withCredentials: true })
      const { user } = response.data

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user))

      setData({ user })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível entrar.")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:user")
    removeCookie()
    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem("@foodexplorer:user")

    if (user) {
      setData({
        user: JSON.parse(user)
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
