import { FC } from 'react';
import { IHeroes } from '../../../types/IHeroes';
import { Card } from 'react-bootstrap';

interface ICardHero {
  hero: IHeroes;
}
 
export const CardHero: FC<ICardHero> = ({hero}) => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={`./assets/heroes/${hero.id}.jpg`} />
      <Card.Body>
        <Card.Title>{hero.superhero}</Card.Title>
        <Card.Text>
          <p><b>Alterego: </b>{hero.alter_ego}</p>
          <p><b>Primera aparicióm: </b>{hero.first_appearance}</p>
          <p><b>Publicado por: </b>{hero.publisher}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}
