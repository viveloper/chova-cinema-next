import { useState } from 'react';

const useLayerMovieTrailer = () => {
  const [src, setSrc] = useState('');
  const [isActive, setIsActive] = useState(false);
  const handlePlay = (src: string) => {
    if (!src) return;
    setSrc(src);
    setIsActive(true);
  };
  const handleClose = () => {
    setIsActive(false);
  };

  return {
    src,
    isActive,
    handlePlay,
    handleClose,
  };
};

export default useLayerMovieTrailer;
