import { MouseEvent } from 'react';
import Link from 'next/link';
import { MovieType } from '@/query/movie';
import { Movie } from '@/types/movie';
import MovieCardList from '../MovieCardList';
import { Props as MovieCardListProps } from '../MovieCardList';
import classes from './TopMovies.module.css';

interface Props {
  title: string;
  showNum: number;
  movies: Movie[];
  onMoreClick: () => void;
  onTicketingClick: MovieCardListProps['onTicketingClick'];
  onDetailClick: MovieCardListProps['onDetailClick'];
}

const TopMovies = ({
  title,
  showNum,
  movies,
  onMoreClick,
  onTicketingClick,
  onDetailClick,
}: Props) => {
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
        onTicketingClick={onTicketingClick}
        onDetailClick={onDetailClick}
      />
    </div>
  );
};

export default TopMovies;
