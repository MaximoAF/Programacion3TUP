import { useEffect, useState } from "react";
import { IHeroes } from "../../../types/IHeroes";
import { useParams } from "react-router-dom";
import { heroesData } from "../../../data/heroes";
import styles from "./HeroPage.module.css";
import { ErrorPage } from "../../ui/ErrorPage/ErrorPage";

export const HeroPage = () => {
  const [hero, setHero] = useState<IHeroes | null>(null);
  const id = useParams().id;
  const getHeroById = () => {
    const result = heroesData.find((h) => h.id === id);
    result ? setHero(result) : setHero(null);
  };

  useEffect(() => {
    getHeroById();
  });

  return (
    <>
      {hero ? (
        <div className={styles.heroPage}>
          <div className={styles.heroPage__container}>
            <div className={styles.heroPage__imageContainer}>
              <img
                src={`/assets/heroes/${hero.id}.jpg`}
                alt={`Imagen de ${hero.id}`}
                className={styles.heroPage__img}
              />
            </div>
            <div className={styles.heroPage__content}>
              <h1 className={styles.heroPage__title}>{hero.superhero}</h1>
              <p><strong>Publisher:</strong> {hero.publisher}</p>
              <p><strong>Alter Ego:</strong> {hero.alter_ego}</p>
              <p><strong>First Appearance:</strong> {hero.first_appearance}</p>
              <p><strong>Characters:</strong> {hero.characters}</p>

              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam tempore minus facere sit. Sit quis commodi tempora id eum. Assumenda, omnis sapiente. Officia quidem nesciunt reprehenderit totam asperiores laudantium nobis.</p>
            
            </div>
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </>
  );
};
