import Casting, { CastingProps } from './Casting';
import Poster, { PosterProps } from './Poster';
import Preference from './Preference';
import { AgePreferProps } from './Preference/AgePrefer';
import { GenderPreferProps } from './Preference/GenderPrefer';
import Synopsis, { SynopsisProps } from './Synopsis';
import Trailer, { TrailerProps } from './Trailer';
import classes from './MovieDetailInfo.module.css';

interface MovieDetailInfoProps {
  synopsis: SynopsisProps['synopsisHtml'];
  prefer: {
    genderPrefer: GenderPreferProps;
    agePrefer: AgePreferProps;
  };
  trailerItems: TrailerProps['items'];
  posterUrls: PosterProps['imageUrls'];
  castingItems: CastingProps['items'];
}

function MovieDetailInfo({
  synopsis,
  prefer,
  trailerItems,
  posterUrls,
  castingItems,
}: MovieDetailInfoProps) {
  return (
    <section className={classes['container']}>
      <div className={classes['flex-container']}>
        <Synopsis synopsisHtml={synopsis} />
        <Preference genderPrefer={prefer.genderPrefer} agePrefer={prefer.agePrefer} />
      </div>
      <Trailer items={trailerItems} />
      <Poster imageUrls={posterUrls} />
      <Casting items={castingItems} />
    </section>
  );
}

export default MovieDetailInfo;
