import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"
import GlobalStyles from "./styles/global"
import { SignIn } from "./pages/SignIn"
import { SignUp } from "./pages/SignUp"
import { Home } from "./pages/Home"
import { DishDetails } from "./pages/DishDetails"
import { NewDish } from "./pages/NewDish"
import { EditDish } from "./pages/EditDish"
import { AuthProvider } from "./hooks/auth"

import { Routes } from "./routes"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
)
