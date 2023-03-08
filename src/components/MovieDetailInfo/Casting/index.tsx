import { Casting } from '@/query/types';
import Image from 'next/image';
import classes from './Casting.module.css';

export interface CastingProps {
  items: Casting[];
}

const CastingComponent = ({ items }: CastingProps) => {
  return (
    <div>
      <h4 className={classes['title']}>감독 및 배우</h4>
      <ul className={classes['casting']}>
        {items.map((item) => (
          <li key={item.StaffName} className={classes['staff']}>
            <Image
              src={item.StaffImage}
              alt="staff"
              width={90}
              height={90}
              className={classes['staff-image']}
              unoptimized
              priority
            />
            <div className={classes['staff-info']}>
              <a href="##" className={classes['name']}>
                {item.StaffName}
              </a>
              <p className={classes['role']}>{item.Role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastingComponent;
