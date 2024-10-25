import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { ListarHeroes } from "../../ui/ListarHeroes/ListarHeroes";

export const DcHeroes = () => {
  const [heros, setHeros] = useState<IHeroes[]>([]);
  const handleHeroes = () => {
    const result = heroesData.filter((hero) => hero.publisher === "DC Comics");
    setHeros(result);
  };

  useEffect(() => {
    handleHeroes();
  }, []);
  return <ListarHeroes heroes={heros} tittle="DC Heroes" />;
};
