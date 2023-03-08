import React from 'react';
import numberWithCommas from '@/utils/numberWithCommas';
import classes from './MovieDetailAsideButtons.module.css';
import Link from 'next/link';

interface MovieDetailAsideButtonsProps {
  likeCount: number;
  ticketingPath: string;
}

const MovieDetailAsideButtons = ({ likeCount, ticketingPath }: MovieDetailAsideButtonsProps) => {
  return (
    <div className={classes['aside-menu']}>
      <button className={classes['btn-link']}>
        <i className="fas fa-share-alt"></i>
      </button>
      <button className={classes['btn-like']}>
        <i className="far fa-heart"></i>
        <span className={classes['like-cnt']}>{numberWithCommas(likeCount)}</span>
      </button>
      <Link className={classes['btn-ticketing']} href={ticketingPath}>
        예매하기
      </Link>
    </div>
  );
};

export default MovieDetailAsideButtons;
