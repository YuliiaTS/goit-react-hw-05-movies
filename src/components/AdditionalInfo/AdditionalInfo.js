import { Link } from 'react-router-dom';
import styles from '../AdditionalInfo/AdditionalInfo.module.css';

export function AdditionalInfo({ location }) {
  return (
    <div className={styles.additionalWrap}>
        <h2>Additional Information</h2>
        <ul>
          <li>
            <Link
            className={styles.additionalLink}
            to="cast"
            state={{ from: location }}
            >
            Cast
            </Link>
          </li>
          <li>
            <Link
            className={styles.additionalLink}
            to="reviews"
            state={{ from: location }}
            >
            Reviews
            </Link>
          </li>
        </ul>
    </div>
  );
}
