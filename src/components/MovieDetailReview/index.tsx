import ReviewBox, { ReviewBoxProps } from './ReviewBox';
import ScoreBox, { ScoreBoxProps } from './ScoreBox';
import classes from './MovieDetailReview.module.css';

// TODO: CSR(Client Side Rendering)
export default function MovieDetailReview() {
  const mockScoreBoxProps: ScoreBoxProps = {
    score: 8,
    totalScore: 10,
    description: (
      <>
        영화 관람 후 관람평을 작성하시면 <br />
        L.POINT 50P를 적립해 드립니다.
      </>
    ),
  };
  const mockReviewBoxProps: ReviewBoxProps = {
    mode: 'add',
    maxLength: 220,
    initialValue: {
      text: '',
      score: 10,
    },
    onSubmit: ({
      mode,
      value,
    }: {
      mode: 'add' | 'edit';
      value: { id?: number; score: number; text: string };
    }) => {
      console.log(mode, value);
    },
  };
  return (
    <section className={classes['container']}>
      <ScoreBox {...mockScoreBoxProps} />
      <ReviewBox {...mockReviewBoxProps} />
    </section>
  );
}
