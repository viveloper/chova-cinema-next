import { ReactNode } from 'react';
import classes from './ScoreBox.module.css';

export interface ScoreBoxProps {
  score: number;
  totalScore: number;
  description?: ReactNode;
}

const ScoreBox = ({ score, totalScore, description }: ScoreBoxProps) => {
  return (
    <div className={classes['score-box']}>
      <div className={classes['score']}>
        <span className={classes['text']}>총 평점</span>
        <span className={classes['icon-star']}>
          <i className="fas fa-star"></i>
        </span>
        <span className={classes['avg']}>{score}</span>
        <span className={classes['slash']}>/</span>
        <span className={classes['max']}>{totalScore}</span>
      </div>
      <p className={classes['info']}>{description}</p>
    </div>
  );
};

export default ScoreBox;
