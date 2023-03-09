import { useState, useEffect, ChangeEvent } from 'react';
import classes from './ReviewBox.module.css';

type Value = {
  id?: number;
  score: number;
  text: string;
};

type Mode = 'add' | 'edit';

export interface ReviewBoxProps {
  mode: Mode;
  maxLength: number;
  initialValue?: Value;
  onSubmit: ({ mode, value }: { mode: Mode; value: Value }) => void;
}

const ReviewBox = ({ mode, maxLength, initialValue, onSubmit }: ReviewBoxProps) => {
  const [value, setValue] = useState<Value>({
    id: undefined,
    text: '',
    score: 10,
  });

  useEffect(() => {
    if (initialValue) {
      setValue(initialValue);
    }
  }, [initialValue]);

  const handleStarOver = (score: number) => {
    setValue((v) => ({ ...v, score }));
  };

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setValue((v) => ({ ...v, text }));
  };

  const handleSubmit = () => {
    onSubmit({
      mode,
      value,
    });
    setValue({
      id: undefined,
      text: '',
      score: 10,
    });
  };

  return (
    <div className={classes['review-box']}>
      <div className={classes['score-box']}>
        <span className={classes['text-score']}>
          <span className={classes['score']}>{value.score}</span> 점
        </span>
        <div className={classes['star-score']}>
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <span
                key={index}
                className={classes['icon-star']}
                onMouseOver={() => handleStarOver(index + 1)}
                style={{
                  color: `${index < value.score ? 'orange' : '#ccc'}`,
                }}
              >
                <i className="fas fa-star"></i>
              </span>
            ))}
        </div>
      </div>
      <div className={classes['text-box']}>
        <textarea
          value={value.text}
          onChange={handleTextChange}
          maxLength={maxLength}
          placeholder="평점 및 영화 관람평을 작성해주세요."
        ></textarea>
        <span className={classes['text-count-container']}>
          <span className={classes['count']}>{value.text.length}</span>
          {` / ${maxLength}`}
        </span>
      </div>
      <button className={classes['btn-write']} onClick={handleSubmit}>
        {mode === 'add' ? '관람평 작성' : '관람평 수정'}
      </button>
    </div>
  );
};

export default ReviewBox;
