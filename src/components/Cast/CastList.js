export function CastList({ actorName, character, actorPhoto }) {
  let src = `https://image.tmdb.org/t/p/original${actorPhoto}`;

  if (actorPhoto === null) {
    src ='https://d2j1wkp1bavyfs.cloudfront.net/legacy/assets/mf-no-poster-available-v2.png';
  }

  return (
    <li>
      <img src={src} alt="{actorName}" width='150px' />
      <p>{actorName}</p>
      <p> Character: {character}</p>
    </li>
  );
}