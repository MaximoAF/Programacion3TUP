import { useEffect, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { IHeroes } from "../../../types/IHeroes";
import { heroesData } from "../../../data/heroes";
import { ListarHeroes } from "../../ui/ListarHeroes/ListarHeroes";
import styles from "./Search.module.css";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Search = () => {
  const { values, handleChanges } = useForm({ search: "" });
  const { search } = values;

  const [heroes, setHeroes] = useState<IHeroes[]>([]);
  useEffect(() => {
    const result = heroesData.filter((h) =>
      h.superhero.toLowerCase().trim().includes(search)
    );
    setHeroes(result);
  });

  return (
    <>
      <div className={styles.search}>
        <div className={styles.search__searchBarContainer}>
          <Form.Control
            className={styles.search__searchBar}
            style={{color: "var(--color_gray)"}}
            type="text"
            placeholder="Buscar"
            name="search"
            value={search}
            onChange={handleChanges}
          />
          <div className={styles.search__iconContainer}>
            <FontAwesomeIcon
              className={styles.search__icon}
              icon={faMagnifyingGlass}
            />
          </div>
        </div>
      </div>
      {heroes.length > 0 ? (
        <ListarHeroes heroes={heroes} tittle="Resultados de busqueda" />
      ) : (
        <div className={styles.search__notFound}>
          <h1>Not found</h1>
        </div>
      )}
    </>
  );
};
