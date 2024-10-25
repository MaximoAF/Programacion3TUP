import { heroesData } from '../../../data/heroes';
import { ListarHeroes } from '../../ui/ListarHeroes/ListarHeroes';
export const Home = () => {
  return (
    <>
      <ListarHeroes heroes={heroesData} tittle="Todos los Heroes"/>
    </>
  );
};
