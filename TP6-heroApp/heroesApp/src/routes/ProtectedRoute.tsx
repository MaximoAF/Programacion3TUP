import { Route, Routes } from "react-router-dom"
import { Header } from "../components/ui/Header/Header"
import { Home } from "../components/screens/Home/Home"
import { Search } from "../components/screens/Search/Search"
import { MarvelHeroes } from "../components/screens/MarvelHeroes/MarvelHeroes"
import { DcHeroes } from "../components/screens/DcHeroes/DcHeroes"
import { HeroPage } from "../components/screens/HeroPage/HeroPage"

export const ProtectedRoute = () => {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/marvelHeroes" element={<MarvelHeroes />} />
        <Route path="/dcHeroes" element={<DcHeroes />} />
        <Route path="/hero/:id" element={<HeroPage />} />

      </Routes>
    </>
  )
}
