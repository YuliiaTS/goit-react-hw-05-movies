import { Link, useLocation } from 'react-router-dom';
import styles from './MovieItem.module.css';
import PropTypes from 'prop-types';

export const MovieItem = ({ filmTitle, movieId }) => {
  const location = useLocation();

  return (
    <li className={styles.item}>
      <Link
        className={styles.itemLink}
        to={`/movies/${movieId}`}
        state={{ from: location }}
      >
        {filmTitle}
      </Link>
    </li>
  );
};

MovieItem.propTypes = {
  filmTitle: PropTypes.string.isRequired,
  movieId: PropTypes.number.isRequired,
};