import { MouseEvent } from 'react';
import Link from 'next/link';
import MovieCardList from '../MovieCardList';
import { Props as MovieCardListProps } from '../MovieCardList';
import classes from './TopMovies.module.css';
import { Movie } from '@/query/types';

interface Props {
  title: string;
  showNum: number;
  movies: Movie[];
  onMoreClick: () => void;
}

const TopMovies = ({ title, showNum, movies, onMoreClick }: Props) => {
  const handleMoreClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onMoreClick();
  };
  return (
    <div className={classes['container']}>
      <div className={classes['header']}>
        <h3 className={classes['title']}>
          {title} <strong>{`TOP ${showNum}`}</strong>
        </h3>
        <Link href="" onClick={handleMoreClick}>
          {'더보기 >'}
        </Link>
      </div>
      <MovieCardList
        movies={movies}
        showNum={showNum}
        theme="light"
        ticketingPath="/ticketing"
        movieDetailBasePath="/movies"
      />
    </div>
  );
};

export default TopMovies;
