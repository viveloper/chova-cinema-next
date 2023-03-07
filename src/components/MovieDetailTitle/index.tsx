import { ViewGradeCode } from '@/query/types';
import ViewGradeIcon from '../ViewGradeIcon';
import classes from './MovieDetailTitle.module.css';

interface MovieDetailTitleProps {
  viewGradeCode?: ViewGradeCode;
  title: string;
}

const MovieDetailTitle = ({ viewGradeCode = 0, title }: MovieDetailTitleProps) => {
  return (
    <div className={classes['title']}>
      <ViewGradeIcon size="large" grade={viewGradeCode} />
      <span className={classes['text']}>{title}</span>
    </div>
  );
};

export default MovieDetailTitle;
