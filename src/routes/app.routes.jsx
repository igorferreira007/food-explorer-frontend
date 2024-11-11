import { Routes, Route, Navigate } from "react-router-dom"

import { EditDish } from "../pages/EditDish"
import { Home } from "../pages/Home"
import { NewDish } from "../pages/NewDish"
import { DishDetails } from "../pages/DishDetails"
import { useAuth } from "../hooks/auth"

export function AppRoutes() {
  const { user } = useAuth()

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      { user.is_admin ? <Route path="/edit/:id" element={<EditDish />} /> : null }
      { user.is_admin ? <Route path="/new" element={<NewDish />} /> : null }
      <Route path="/details/:id" element={<DishDetails />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
