import styles from './MovieInfo.module.css';

export function MovieInfo({
  movieTitle,
  movieOverview,
  movieRait,
  moviePoster,
  movieGenres,
  movieDate,
}) {
  const movScore = Math.round(movieRait * 10);
  let src = `https://image.tmdb.org/t/p/w500${moviePoster}`;
  if (moviePoster === null) {
    src ='https://d2j1wkp1bavyfs.cloudfront.net/legacy/assets/mf-no-poster-available-v2.png';
  }
  return (
    <div className={styles.movieInfoWrap}>
      <div className={styles.posterWrap}>
        <img className={styles.movieInfoPoster} src={src} alt={movieTitle} width='250px' />
      </div>
      <div>
        <h2>
          {movieTitle} ({movieDate})
        </h2>
        <p className={styles.overview}>User Score: {movScore}%</p>
        <p className={styles.overview}>Overview</p>
        <p className={styles.overviewContent}>{movieOverview}</p>
        <p className={styles.overview}>Genres</p>
        <p>{movieGenres}</p>
      </div>
    </div>
  );
}
