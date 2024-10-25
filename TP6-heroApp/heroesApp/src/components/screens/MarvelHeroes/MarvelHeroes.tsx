import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { ListarHeroes } from "../../ui/ListarHeroes/ListarHeroes";

export const MarvelHeroes = () => {
  const [heroes, setHeroes] = useState<IHeroes[]>([]);
  const handleHeroes = () => {
    const result = heroesData.filter((hero) => hero.publisher === "Marvel Comics");
    setHeroes(result);
  };

  useEffect(() => {
    handleHeroes();
  }, []);
  return <ListarHeroes heroes={heroes} tittle="Marvel Heroes" />;
}
