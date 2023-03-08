import classes from './AgePrefer.module.css';

export interface AgePreferProps {
  agePrefer10: number;
  agePrefer20: number;
  agePrefer30: number;
  agePrefer40: number;
}

// TODO: 스타일링 개선(인라인 스타일 및 클래스네임 복잡성 개선)

const AgePrefer = ({ agePrefer10, agePrefer20, agePrefer30, agePrefer40 }: AgePreferProps) => {
  const preferList = [agePrefer10, agePrefer20, agePrefer30, agePrefer40];
  const maxValue = Math.max(...preferList);

  const genClasses = ['gen10', 'gen20', 'gen30', 'gen40'];

  return (
    <div className={`${classes['prefer']} ${classes['age']}`}>
      <div className={classes['graph']}>
        {preferList.map((prefer, i) => (
          <div
            key={i}
            className={`${classes['bar']} ${classes[genClasses[i]]}`}
            style={{
              height: `${prefer}%`,
              backgroundColor: `${prefer === maxValue ? '#f51641' : null}`,
            }}
          ></div>
        ))}
        {preferList.map((prefer, i) => (
          <span
            key={i}
            className={`${classes['value']} ${classes[genClasses[i]]}`}
            style={{
              bottom: `${prefer}%`,
              color: `${prefer === maxValue ? '#f51641' : null}`,
            }}
          >{`${prefer}%`}</span>
        ))}
      </div>
      <div className={classes['keyword']}>
        <span>10대</span>
        <span>20대</span>
        <span>30대</span>
        <span>40대</span>
      </div>
    </div>
  );
};

export default AgePrefer;
