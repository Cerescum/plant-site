import { useState } from "react";
import Button from "./Button";

const Slider1 = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("");

  const goToNext = () => {
    setAnimationClass("animate-slide");

    setTimeout(() => {
      setAnimationClass("");
    }, 1700);

    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="xl:w-1/3 lg:w-2/5 md:w-11/12 md:mb-0 mt-32 md:mt-0 h-fit border content-card p-0 rounded-5xl backdrop-blur-sm lg:my-14 my-auto">
      <img className="plant-img" src={slides[currentIndex].url} alt="plant_1" />
      <div className="p-10 m-negative">
        <p className="plant-type font-text">{slides[currentIndex].category}</p>
        <div className="flex justify-between">
          <h3 className="plant-name text-4xl my-3">
            {slides[currentIndex].name}
          </h3>
          <img
            className={`my-auto cursor-pointer ${animationClass}`}
            src="public/assets/arrow.svg"
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
              className="text-xs cursor-pointer"
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
