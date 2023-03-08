import Image from 'next/image';
import { useState } from 'react';
import classes from './Poster.module.css';

export interface PosterProps {
  imageUrls: string[];
}

const Poster = ({ imageUrls }: PosterProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const SMALL_IMAGE_WIDTH = 225;
  const LARGE_IMAGE_WIDTH = 766;

  const handleLeftClick = () => {
    if (activeImageIndex === 0) {
      setActiveImageIndex(imageUrls.length - 1);
    } else {
      setActiveImageIndex(activeImageIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (activeImageIndex === imageUrls.length - 1) {
      setActiveImageIndex(0);
    } else {
      setActiveImageIndex(activeImageIndex + 1);
    }
  };

  return (
    <div className={classes['poster']}>
      <h4 className={classes['title']}>{`포스터 & 스틸컷 (${imageUrls.length})`}</h4>
      <div className={classes['small-trailer']}>
        <button onClick={handleLeftClick}>
          <i className="fas fa-angle-left"></i>
        </button>
        <div className={classes['items-container']}>
          <ul
            className={classes['items']}
            style={{
              transform: `translateX(${activeImageIndex * SMALL_IMAGE_WIDTH * -1}px)`,
            }}
          >
            {imageUrls.map((imageUrl) => (
              <li key={imageUrl} className={classes['item']}>
                <Image
                  src={imageUrl}
                  alt="poster"
                  width={SMALL_IMAGE_WIDTH}
                  height={150}
                  unoptimized
                  priority
                />
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleRightClick}>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
      <div className={classes['large-trailer']}>
        <button onClick={handleLeftClick}>
          <i className="fas fa-angle-left"></i>
        </button>
        <div className={classes['items-container']}>
          <ul
            className={classes['items']}
            style={{
              transform: `translateX(${activeImageIndex * LARGE_IMAGE_WIDTH * -1}px)`,
            }}
          >
            {imageUrls.map((imageUrl) => (
              <li key={imageUrl} className={classes['item']}>
                <Image
                  src={imageUrl}
                  alt="poster"
                  width={LARGE_IMAGE_WIDTH}
                  height={510}
                  unoptimized
                  priority
                />
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleRightClick}>
          <i className="fas fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Poster;
