import styles from "./FilmsList.module.css";
import { FilmsListProps } from "./FilmsList.props";
import FilmCard from "../FilmCard/FilmCard";
import Button from "../Button/Button";
import { useState } from "react";
import { Film } from "../../axios/entities/film";

const FILMS_COUNT_PER_PAGE = 3;

const FilmsList = ({ films }: FilmsListProps): JSX.Element => {
  let pageCount: number = Math.floor(films.length / FILMS_COUNT_PER_PAGE);

  if (films.length % FILMS_COUNT_PER_PAGE !== 0) {
    pageCount++;
  }

  const initialState = [];

  for (let i = 0; i < films.length; i++) {
    initialState.push(films[i]);

    if (initialState.length === FILMS_COUNT_PER_PAGE) {
      break;
    }
  }
  const [currentFilms, setCurrentFilms] = useState<Film[]>(initialState);

  const handleClick = (index: number) => {
    const updatedCurrentFilms = [];

    for (
      let i = index * FILMS_COUNT_PER_PAGE - FILMS_COUNT_PER_PAGE;
      i < films.length;
      i++
    ) {
      updatedCurrentFilms.push(films[i]);

      if (updatedCurrentFilms.length === FILMS_COUNT_PER_PAGE) {
        break;
      }
    }

    setCurrentFilms(updatedCurrentFilms);
  };

  return (
    <div className={styles.filmsListWrapper}>
      <div className={styles.currentFilms}>
        {currentFilms.map((film) => (
          <FilmCard
            filmName={film.titleText.text}
            filmImage={film.primaryImage?.url}
            key={film.id}
          />
        ))}
      </div>
      <div className={styles.buttons}>
        {new Array(pageCount).fill(0).map((_, index) => {
          return (
            <Button onClick={() => handleClick(index + 1)}>{index + 1}</Button>
          );
        })}
      </div>
    </div>
  );
};

export default FilmsList;
