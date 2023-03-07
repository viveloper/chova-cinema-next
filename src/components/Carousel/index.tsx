import Image from 'next/image';
import { useEffect, useState, MouseEvent } from 'react';
import useLayerMovieTrailer from '@/hooks/useLayerMovieTrailer';
import LayerMovieTrailer from '../LayerMovieTrailer';
import { Theme } from '../types';
import classes from './Carousel.module.css';
import { CarouselItem } from '@/query/types';

interface Props {
  theme?: Theme;
  height?: number;
  width?: number;
  items: Array<CarouselItem>;
  delay?: number;
}

const Carousel = ({ theme = 'light', height, width, items, delay = 5000 }: Props) => {
  const [activeItem, setActiveItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextClick();
    }, delay);
    return () => {
      clearInterval(interval);
    };
  });

  const handlePrevClick = () => {
    const prevIndex =
      (activeItem - 1 < 0 ? items.length + (activeItem - 1) : activeItem - 1) % items.length;
    setActiveItem(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (activeItem + 1) % items.length;
    setActiveItem(nextIndex);
  };

  const handleImgClick = (e: MouseEvent<HTMLAnchorElement>, index: number) => {
    e.preventDefault();
    const { video } = items[index];
    if (!video) return;
    handlePlay(video);
  };

  const { src, isActive, handlePlay, handleClose } = useLayerMovieTrailer();

  return (
    <div className={`${classes.carousel} ${theme === 'dark' ? `${classes.dark}` : ''}`}>
      <div className={classes.container}>
        <ul className={classes.items} style={{ transform: `translateX(${activeItem * -100}%)` }}>
          {items.map((item, index) => (
            <li key={item.img} className={`${classes.item} ${item.video ? classes.playable : ''}`}>
              <a href="#play" onClick={(e) => handleImgClick(e, index)}>
                <div
                  className={classes.imgContainer}
                  style={{
                    width: width ?? 'auto',
                    height: height ?? 'auto',
                  }}
                >
                  <Image src={item.img} alt="poster" fill priority />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <button className={`${classes.btnNav} ${classes.btnNavPrev}`} onClick={handlePrevClick}>
        <span className={classes.prev}>
          <i className="fas fa-angle-left fa-4x"></i>
        </span>
      </button>
      <button className={`${classes.btnNav} ${classes.btnNavNext}`} onClick={handleNextClick}>
        <span className={classes.next}>
          <i className="fas fa-angle-right fa-4x"></i>
        </span>
      </button>

      <LayerMovieTrailer src={src} isActive={isActive} onClose={handleClose} />
    </div>
  );
};

export default Carousel;
