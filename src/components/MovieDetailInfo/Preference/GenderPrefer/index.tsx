import React from 'react';
import classes from './GenderPrefer.module.css';

export interface GenderPreferProps {
  manPrefer: number;
  womanPrefer: number;
}

const GenderPrefer = ({ manPrefer, womanPrefer }: GenderPreferProps) => {
  return (
    <div className={`${classes['prefer']} ${classes['gender']}`}>
      <div className={classes['graph']}>
        <div
          className={`${classes['bar']} ${classes['male']}`}
          style={{ height: `${manPrefer}%` }}
        ></div>
        <div
          className={`${classes['bar']} ${classes['female']}`}
          style={{
            height: `${womanPrefer}%`,
          }}
        ></div>
        <span
          className={`${classes['value']} ${classes['male']}`}
          style={{ bottom: `${manPrefer}%` }}
        >{`${manPrefer}%`}</span>
        <span
          className={`${classes['value']} ${classes['female']}`}
          style={{
            bottom: `${womanPrefer}%`,
          }}
        >{`${womanPrefer}%`}</span>
      </div>
      <div className={classes['keyword']}>
        <span>남성</span>
        <span>여성</span>
      </div>
    </div>
  );
};

export default GenderPrefer;
