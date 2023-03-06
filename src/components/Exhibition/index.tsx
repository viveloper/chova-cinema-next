import React, { CSSProperties } from 'react';
import Link from 'next/link';
import { Movie } from '@/types/movie';
import MovieCardList from '../MovieCardList';
import classes from './Exhibition.module.css';

interface ExhibitionProps {
  title: string;
  subTitle: string;
  link?: {
    name: string;
    url?: string;
  };
  movies: Movie[];
  backgroundImage: string;
  fontColor: CSSProperties['color'];
}

const Exhibition = ({
  title,
  subTitle,
  link,
  movies,
  backgroundImage,
  fontColor,
}: ExhibitionProps) => {
  return (
    <div
      className={classes['exhibition']}
      style={{ background: `url('${backgroundImage}') no-repeat 0 0` }}
    >
      <div className={classes.info} style={{ color: fontColor }}>
        <div className={classes.description}>
          {subTitle}
          <br />
          {title}
        </div>
        {link && (
          <Link href={link.url ?? '#'} style={{ color: fontColor }}>
            {link.name + ' >'}
          </Link>
        )}
      </div>
      {movies && movies.length > 0 ? (
        <MovieCardList
          movies={movies}
          showNum={1}
          theme="light"
          onTicketingClick={() => null}
          onDetailClick={() => null}
        />
      ) : (
        <div className={classes.commingSoon}>
          <div>comming soon</div>
          <span>준비중입니다.</span>
        </div>
      )}
    </div>
  );
};

export default Exhibition;
