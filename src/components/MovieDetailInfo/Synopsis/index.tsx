import classes from './Synopsis.module.css';

export interface SynopsisProps {
  synopsisHtml: string;
}

const Synopsis = ({ synopsisHtml }: SynopsisProps) => {
  return (
    <article className={classes['synopsis']}>
      <h4 className={classes['title']}>시놉시스</h4>
      <p
        className={classes['content']}
        dangerouslySetInnerHTML={{
          __html: synopsisHtml,
        }}
      ></p>
    </article>
  );
};

export default Synopsis;
