import { FC } from "react";
import { IHeroes } from "../../../types/IHeroes";
import styles from './ListarHeroes.module.css'
import { CardHero } from "../CardHero/CardHero";
interface IListHeroes {
  heroes: IHeroes[];
  tittle: string;
}
export const ListarHeroes: FC<IListHeroes> = ({ heroes, tittle }) => {
  return (
    <div className={`${styles.listContainer}`}>
      <div className={`${styles.listTittle}`}>
        <h2>{tittle}</h2>
      </div>
      <div className={`${styles.ListCardsContainer}`}>
        {heroes.map((hero) => (
          <CardHero hero={hero} key={hero.id}/>
        ))}
      </div>
    </div>
  );
};
