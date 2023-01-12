import React from 'react';
import Lottie from 'react-lottie';
import IDisplayLottie from './IDisplayLottie';

const DisplayLottie = ({ animationPath }: IDisplayLottie) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationPath,
  };

  return (
    <div onClick={() => null}>
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default DisplayLottie;
