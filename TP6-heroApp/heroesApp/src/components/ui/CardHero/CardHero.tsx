import { FC } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface ICardHero {
  hero: IHeroes;
}

export const CardHero: FC<ICardHero> = ({ hero }) => {
  const navigate = useNavigate();
  const handleHeroNavigate = () => {
    navigate(`/hero/${hero.id}`)
  };

  return (
    <Card style={{ width: "100%", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" }} onClick={handleHeroNavigate}>
      <Card.Img variant="top" src={`/assets/heroes/${hero.id}.jpg`} />
      <Card.Body>
        <Card.Title>{hero.superhero}</Card.Title>
        <Card.Text>
          <p>
            <b>Alterego: </b>
            {hero.alter_ego}
          </p>
          <p>
            <b>Primera aparicióm: </b>
            {hero.first_appearance}
          </p>
          <p>
            <b>Publicado por: </b>
            {hero.publisher}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
