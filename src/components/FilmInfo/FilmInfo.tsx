import { FilmInfoProps } from "./FilmInfo.props";
import styles from "./FilmInfo.module.css";

const FilmInfo = ({
  filmName,
  filmImage,
  releaseDate,
}: FilmInfoProps): JSX.Element => {
  return (
    <div className={styles.filmInfoWrapper}>
      <div className={styles.filmTitle}>{filmName}</div>
      <div className={styles.filmImageWrapper}>
        <img src={filmImage} alt="film image" className={styles.filmImage} />
      </div>
      <div
        className={styles.filmReleaseDate}
      >{`Release date: ${releaseDate.toLocaleDateString("en-US")}`}</div>
    </div>
  );
};

export default FilmInfo;
