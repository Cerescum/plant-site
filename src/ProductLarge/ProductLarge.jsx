import Button from "../Button.jsx";
import PropTypes from "prop-types";
import ButtonCart from "../ButtonCart.jsx";
import "./ProductLarge.css";
import { useState } from "react";

function ProductLarge(props) {
  const className = `md:flex content-card my-36 justify-evenly ${props.direction} backdrop-blur-sm`;
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={className}>
      <img
        className="plant-img-2 w-full md:w-2/5 h-auto object-contain"
        src={props.src}
        alt="plant2"
      />
      <div className="w-full md:w-5/12 p-10 md:py-2 lg:p-10 m-auto">
        <h3 className="text-4xl font-semibold w-fit">{props.name}</h3>
        <div className="my-6 md:my-2 lg:my-6">
          <p className="font-text">
            {showMore
              ? props.description
              : `${props.description.substring(0, 100)}...`}
          </p>
          <button className="underline" onClick={() => setShowMore(!showMore)}>
            {" "}
            {showMore ? "Show less" : "Show more"}{" "}
          </button>
        </div>
        <h3 className="my-6 md:my-2 lg:my-6 text-4xl font-semibold w-fit">
          Rs. 599/-
        </h3>
        <div className="flex align-middle w-fit">
          <Button />
          <ButtonCart />
        </div>
      </div>
    </div>
  );
}
ProductLarge.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};
ProductLarge.defaultProps = {
  src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F008%2F442%2F086%2Foriginal%2Fillustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg&f=1&nofb=1&ipt=d3cfeacddd5d28fa4110b775d17fd1ff27811a1d64f316b210e46277482ea97c&ipo=images",
  name: "Lorem ipsum dolor sit",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis alias laudantium obcaecati odio non ullam, dolore cum natus totam suscipit exercitationem facere fugit doloremque saepe at vero in sequi inventore.",
};

export default ProductLarge;
