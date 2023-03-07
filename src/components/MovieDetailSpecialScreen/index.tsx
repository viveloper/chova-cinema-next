import { SpecialScreen } from '@/query/types';
import Image from 'next/image';
import React from 'react';
import classes from './MovieDetailSpecialScreen.module.css';

interface MovieDetailSpecialScreen {
  items: SpecialScreen[];
}

const MovieDetailSpecialScreen = ({ items }: MovieDetailSpecialScreen) => {
  return (
    <div className={classes['special-icons-container']}>
      {items.map((item) => (
        <span key={item.SpecialScreenDivisionCode} className={classes['special-icon']}>
          <Image src={`${item.FilePath}${item.IconImageFileName}`} alt="" height={20} width={82} />
        </span>
      ))}
    </div>
  );
};

export default MovieDetailSpecialScreen;
