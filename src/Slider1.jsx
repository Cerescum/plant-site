import { useState } from "react";
import Button from "./Button";
import { CSSTransition } from "react-transition-group";

const Slider1 = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 400);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div
      className={`xl:w-1/3 lg:w-2/5 md:w-11/12 md:mb-0 mt-32 h-fit border content-card p-0
        rounded-5xl backdrop-blur-sm lg:my-14 my-auto ${
          isAnimating ? "animate-pulse" : ""
        }`}
    >
      <img
        className={`plant-img ${
          isAnimating
            ? "transition ease-in-out transform -translate-x-28 opacity-5 duration-500"
            : ""
        }`}
        src={slides[currentIndex].url}
        alt="plant_1"
      />
      <div className="p-10 m-negative">
        <p className="plant-type font-text">{slides[currentIndex].category}</p>
        <div className="flex justify-between">
          <h3 className="plant-name text-4xl my-3">
            {slides[currentIndex].name}
          </h3>
          <img
            className={`my-auto cursor-pointer ${
              isAnimating ? "animate-arrow" : ""
            }`}
            src="/assets/arrow.svg"
            alt=">"
            id="arrow-left"
            onClick={goToNext}
          />
        </div>
        <Button name="Buy Now" />
        <div className="flex gap-2 mt-9 justify-center">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-xs cursor-pointer ${
                slideIndex === currentIndex ? "text-white" : "text-gray-600"
              }`}
            >
              ●
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Slider1;
