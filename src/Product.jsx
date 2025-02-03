import ButtonCart from "./ButtonCart.jsx";
import PropTypes from "prop-types";

function Product(props) {
  return (
    <div className="content-active content-card my-16">
      <img className="plant-img w-full" src={props.src} alt="plant3" />
      <div className="p-10">
        <h3 className="text-4xl font-semibold">{props.name}</h3>
        <p className="my-9 font-text">{props.description}</p>
        <div className="flex justify-between align-middle">
          <h3 className="text-4xl font-semibold my-auto">Rs. 359/-</h3>
          <ButtonCart />
        </div>
      </div>
    </div>
  );
}
Product.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};
Product.defaultProps = {
  src: "/assets/plant-img/plant2.png",
  name: "Plant name",
  description:
    "Lorem ipsum dolor sit ameum natus totam suscipit exercitationem facere fugit doloremque saepe at vero in sequi inventore.",
};

export default Product;
