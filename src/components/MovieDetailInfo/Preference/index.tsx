import { ReactNode } from 'react';
import AgePrefer, { AgePreferProps } from './AgePrefer';
import GenderPrefer, { GenderPreferProps } from './GenderPrefer';
import classes from './Preference.module.css';

export interface PreferenceProps {
  genderPrefer: GenderPreferProps;
  agePrefer: AgePreferProps;
}

const Preference = ({ genderPrefer, agePrefer }: PreferenceProps) => {
  return (
    <article className={classes['preference']}>
      <h4 className={classes['title']}>관람 선호도</h4>
      <div className={classes['prefer-group']}>
        <GenderPrefer {...genderPrefer} />
        <AgePrefer {...agePrefer} />
      </div>
    </article>
  );
};

export default Preference;
