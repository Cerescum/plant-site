import Button from "./Button";
import { useState } from "react";

const Slider2 = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="flex content-card mt-36 mb-16 justify-evenly backdrop-blur-sm">
        <img
          className="plant-img-2 w-30 h-auto"
          src={slides[currentIndex].url}
          alt="plant4"
        />
        <div className="w-5/12 py-10 m-auto">
          <h3 className="text-4xl font-semibold w-fit">
            {slides[currentIndex].name}
          </h3>
          <div className="my-6">
            <p className="font-text">
              {showMore
                ? slides[currentIndex].description
                : `${slides[currentIndex].description.substring(0, 150)}...`}
            </p>
            <button
              className="underline"
              onClick={() => setShowMore(!showMore)}
            >
              {" "}
              {showMore ? "Show less" : "Show more"}{" "}
            </button>
          </div>
          <div className="flex align-middle justify-between">
            <Button />
            <div className="flex align-middle gap-6 my-auto">
              <img
                src="public/src/assets/arrow.svg"
                alt="<"
                className="flip arrow-sm my-auto cursor-pointer"
                onClick={goToPrevious}
              />
              <p className="h-fit">
                <span>{slides[currentIndex].slideNr}</span>/
                <span className="text-xs">02</span>
              </p>
              <img
                src="public/src/assets/arrow.svg"
                alt=">"
                className="my-auto arrow-sm cursor-pointer"
                onClick={goToNext}
              />
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
};

export default Slider2;
