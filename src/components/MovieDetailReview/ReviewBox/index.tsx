import { ReviewPostMode } from '@/query/types';
import { useState, useEffect, ChangeEvent } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import classes from './ReviewBox.module.css';

export interface ReviewBoxProps {
  mode: ReviewPostMode;
  score: number;
  text: string;
  maxLength: number;
  isLoading?: boolean;
  onScoreChange: (score: number) => void;
  onTextChange: (text: string) => void;
  onSubmit: ({ mode, score, text }: { mode: ReviewPostMode; score: number; text: string }) => void;
}

const ReviewBox = ({
  mode,
  score,
  text,
  maxLength,
  isLoading = false,
  onScoreChange,
  onTextChange,
  onSubmit,
}: ReviewBoxProps) => {
  const handleScoreChange = (score: number) => {
    onScoreChange(score);
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    onTextChange(text);
  };

  const handleSubmit = () => {
    onSubmit({ mode, score, text });
  };

  return (
    <div className={classes['review-box']}>
      <div className={classes['score-box']}>
        <span className={classes['text-score']}>
          <span className={classes['score']}>{score}</span> 점
        </span>
        <div className={classes['star-score']}>
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <span
                key={index}
                className={classes['icon-star']}
                onMouseOver={() => handleScoreChange(index + 1)}
                style={{
                  color: `${index < score ? 'orange' : '#ccc'}`,
                }}
              >
                <i className="fas fa-star"></i>
              </span>
            ))}
        </div>
      </div>
      <div className={classes['text-box']}>
        <textarea
          value={text}
          onChange={handleTextChange}
          maxLength={maxLength}
          placeholder="평점 및 영화 관람평을 작성해주세요."
        ></textarea>
        <span className={classes['text-count-container']}>
          <span className={classes['count']}>{text.length}</span>
          {` / ${maxLength}`}
        </span>
      </div>
      <button className={classes['btn-write']} onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? (
          <ThreeDots
            height="24"
            width="24"
            radius="9"
            color="#bbb"
            ariaLabel="three-dots-loading"
            wrapperStyle={{ display: 'inline-block', width: 'fit-content' }}
            visible={true}
          />
        ) : (
          <span>{mode === 'add' ? '관람평 작성' : '관람평 수정'}</span>
        )}
      </button>
    </div>
  );
};

export default ReviewBox;
