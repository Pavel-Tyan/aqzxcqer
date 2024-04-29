import { FilmCardProps } from "./FilmCard.props";
import styles from "./FilmCard.module.css";

const FilmCard = ({ filmName, filmImage }: FilmCardProps): JSX.Element => {
  return (
    <div className={styles.filmCardWrapper}>
      <div className={styles.filmImageWrapper}>
        <img src={filmImage} className={styles.filmImage} alt="film image" />
      </div>
      <div className={styles.filmName}>{filmName}</div>
    </div>
  );
};

export default FilmCard;
