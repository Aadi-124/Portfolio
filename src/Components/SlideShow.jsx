import React, { useState, useEffect } from 'react';
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import './Portfolio.css';


const SlideShow = (props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [interval, setInterval] = useState(3000); // Transition interval in milliseconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (autoplay) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % props.slides.length);
      }
    }, interval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [autoplay, interval, props.slides.length]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.slides.length);
  };

  const goToPrevSlide = () => {
    const prevIndex = (currentIndex - 1 + props.slides.length) % props.slides.length;
    setCurrentIndex(prevIndex);
  };

  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };

  return (
    <div className='slideShowMainDiv'>
      <div className='slideShowSubDiv slideShowImages'>
        <Slide duration={interval} transition={Fade}>
          {props.slides.map((item, index) => (
            <div className="each-slide slideContainer" key={index}>
              <img className='slideImage' src={item.url} alt={item.caption} />
              {item.caption && <span className="caption">{item.caption}</span>}
            </div>
          ))}
        </Slide>
      </div>
      <div className='slideShowSubDiv slideShowIcon'>

      </div>
    </div>
  );
};

export default SlideShow;
