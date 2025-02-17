import "./slider.css";
import leftArrow from "../../assets/slider/left-arrow.png";
import rightArrow from "../../assets/slider/right-arrow.png";
import { useEffect, useState } from "react";

export default function Slider({ sliderImages }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      increaseIndex();
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [imageIndex]);

  function increaseIndex() {
    if (imageIndex < sliderImages.length - 1) {
      setImageIndex((prev) => prev + 1);
    } else {
      setImageIndex(0);
    }
  }

  function decreaseIndex() {
    if (imageIndex > 0) {
      setImageIndex((prev) => prev - 1);
    } else {
      setImageIndex(sliderImages.length - 1);
    }
  }

  return (
    <div className="slider">
      <div className="slider__images">
        {sliderImages.map((img, i) => (
          <img
            key={img.id}
            src={sliderImages[i].image}
            className="slider__img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>
      <img
        src={leftArrow}
        alt=""
        className="slider__button-left"
        onClick={decreaseIndex}
      />
      <img
        src={rightArrow}
        alt=""
        className="slider__button-right"
        onClick={increaseIndex}
      />
    </div>
  );
}
