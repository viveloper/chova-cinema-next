import React from 'react';
import numberWithCommas from '@/utils/numberWithCommas';
import classes from './MovieDetailAsideButtons.module.css';

interface MovieDetailAsideButtonsProps {
  likeCount: number;
  onTicketingClick: () => void;
}

const MovieDetailAsideButtons = ({ likeCount, onTicketingClick }: MovieDetailAsideButtonsProps) => {
  return (
    <div className={classes['aside-menu']}>
      <button className={classes['btn-link']}>
        <i className="fas fa-share-alt"></i>
      </button>
      <button className={classes['btn-like']}>
        <i className="far fa-heart"></i>
        <span className={classes['like-cnt']}>{numberWithCommas(likeCount)}</span>
      </button>
      <button className={classes['btn-ticketing']} onClick={onTicketingClick}>
        예매하기
      </button>
    </div>
  );
};

export default MovieDetailAsideButtons;
