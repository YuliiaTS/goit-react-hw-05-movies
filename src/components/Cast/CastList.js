import style from '../Cast/Cast.module.css';
import PropTypes from 'prop-types';

export function CastList({ actorName, character, actorPhoto }) {
  let src = `https://image.tmdb.org/t/p/original${actorPhoto}`;

  if (actorPhoto === null) {
    src ='https://d2j1wkp1bavyfs.cloudfront.net/legacy/assets/mf-no-poster-available-v2.png';
  }

  return (
    <li className={style.CastItem}>
      <img src={src} alt="{actorName}" width='100px' />
      <p>{actorName}</p>
      <p> Character: {character}</p>
    </li>
  );
}

CastList.propTypes = {
  actorName: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  actorPhoto: PropTypes.string,
};