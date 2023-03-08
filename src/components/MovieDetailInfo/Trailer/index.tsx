import LayerMovieTrailer from '@/components/LayerMovieTrailer';
import useLayerMovieTrailer from '@/hooks/useLayerMovieTrailer';
import Image from 'next/image';
import React, { useState } from 'react';
import classes from './Trailer.module.css';

export interface TrailerProps {
  items: Array<{
    videoUrl: string;
    imageUrl: string;
    title: string;
  }>;
}

const Trailer = ({ items }: TrailerProps) => {
  const [startActiveIndex, setStartActiveIndex] = useState(0);

  const handlePrevClick = () => {
    if (startActiveIndex === 0) return;
    setStartActiveIndex((v) => v - 1);
  };

  const handleNextClick = () => {
    if (startActiveIndex + 3 >= items.length) return;
    setStartActiveIndex((v) => v + 1);
  };

  const { src, isActive, handlePlay, handleClose } = useLayerMovieTrailer();

  return (
    <div className={classes['trailer-container']}>
      <div className={classes['header']}>
        <h4 className={classes['title']}>{`트레일러 (${items.length})`}</h4>
        <div className={classes['nav']}>
          <button onClick={handlePrevClick}>
            <i className="fas fa-angle-left"></i>
          </button>
          <button onClick={handleNextClick}>
            <i className="fas fa-angle-right"></i>
          </button>
        </div>
      </div>
      <ul
        className={classes['trailer']}
        style={{ transform: `translateX(${startActiveIndex * -333.5}px)` }}
      >
        {items.map((item) => (
          <li
            key={item.videoUrl}
            className={classes['item']}
            onClick={() => handlePlay(item.videoUrl)}
          >
            <Image
              src={item.imageUrl}
              width={313}
              height={193}
              alt="trailer"
              unoptimized
              priority
            />
            <p className={classes['media-title']}>{item.title}</p>
          </li>
        ))}
      </ul>
      <LayerMovieTrailer src={src} isActive={isActive} onClose={handleClose} />
    </div>
  );
};

export default Trailer;
