import { ViewGradeCode } from '@/query/types';
import React, { useMemo } from 'react';
import classes from './ViewGradeIcon.module.css';

export interface ViewGradeIconProps {
  size?: 'large' | 'medium' | 'small'; // 36px / 25px / 22px
  grade?: ViewGradeCode;
}

const ViewGradeIcon = ({ size = 'small', grade = 0 }: ViewGradeIconProps) => {
  const iconSize = size === 'small' ? 22 : size === 'large' ? 36 : 25;

  const { color, content, fontSize } = useMemo(() => {
    switch (grade) {
      case 12:
        return {
          color: '#4DD6FF',
          content: '12',
          fontSize: size === 'large' ? '14px' : size === 'medium' ? '13px' : '12px',
        };
      case 15:
        return {
          color: '#FFC134',
          content: '15',
          fontSize: size === 'large' ? '14px' : size === 'medium' ? '13px' : '12px',
        };
      case 18:
        return {
          color: '#ED4C6B',
          content: '청불',
          fontSize: size === 'large' ? '13px' : size === 'medium' ? '11px' : '10px',
        };
      default:
        return {
          color: '#5BC77E',
          content: '전체',
          fontSize: size === 'large' ? '13px' : size === 'medium' ? '11px' : '10px',
        };
    }
  }, [grade, size]);

  return (
    <div
      className={classes['view-grade']}
      style={{
        width: `${iconSize}px`,
        height: `${iconSize}px`,
        background: `${color}`,
      }}
    >
      <span className={classes['text']} style={{ fontSize }}>
        {content}
      </span>
    </div>
  );
};

export default ViewGradeIcon;
