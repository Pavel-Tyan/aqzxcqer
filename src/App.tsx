import { useFilms } from "./hooks/useFilms";
import styles from "./App.module.css";
import FilmsList from "./components/FilmsList/FilmsList";
import FilmInfo from "./components/FilmInfo/FilmInfo";

function App() {
  const { data: films, isLoading, error } = useFilms();

  if (isLoading) {
    return (
      <main className={`${styles.appWrapper} ${styles.appText}`}>
        Loading ...
      </main>
    );
  }

  if (error || !films) {
    return (
      <main className={`${styles.appWrapper} ${styles.appText}`}>
        Произошла ошибка во время получения данных о фильмах. Попробуйте
        перезагрузить страницу
      </main>
    );
  }

  return (
    <main className={styles.appWrapper}>
      <FilmInfo
        filmName={films[0].titleText.text}
        filmImage={films[0].primaryImage.url}
        releaseDate={
          new Date(
            films[0].releaseDate.day,
            films[0].releaseDate.month,
            films[0].releaseDate.year
          )
        }
      />
      <FilmsList films={films} />
    </main>
  );
}

export default App;
