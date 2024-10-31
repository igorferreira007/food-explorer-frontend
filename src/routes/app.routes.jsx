import { Routes, Route } from "react-router-dom"

import { EditDish } from "../pages/EditDish"
import { Home } from "../pages/Home"
import { NewDish } from "../pages/NewDish"
import { DishDetails } from "../pages/DishDetails"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/edit" element={<EditDish />} />
      <Route path="/new" element={<NewDish />} />
      <Route path="/details/:id" element={<DishDetails />} />
    </Routes>
  )
}
