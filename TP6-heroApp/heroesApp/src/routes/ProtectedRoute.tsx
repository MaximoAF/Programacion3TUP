import { Route, Routes } from "react-router-dom"
import { Header } from "../components/ui/Header/Header"
import { Home } from "../components/screens/Home/Home"

export const ProtectedRoute = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  )
}
