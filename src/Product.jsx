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
  src: "https://s3-alpha-sig.figma.com/img/c8eb/5b1a/bede1308e0eaf899d1f7faae62a0c2f6?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b61ljuYdLty3mmPChQFwDqNsd0GyVoHVQrXpe2xzplXBcsYX7cnu14lZDafFHqy5HNYV4LUK4gnsW3GhY1Mk9bY9CqdLoZvtSJ7zFhpCS4TsxQzrApTD~SNzl0A4G8Wfufc4L-RtBckYQeRpNWgigY3~fgFO0yzw5ps-XH7ZlOEgLQuQC0SHNhrfjGRloUJkxPeDalEbK5h5WL0jCln2FZZVzurHqEbrkVnt8IdsmFASe2k1ZJbMMlRhO7QIFkwvsXJLRliXWXex1iB~Uhl-CIlZh0OZyFmLiuQMPKTZTkvQPhpJ7JUfcvFd6AdFZOX1cQEUN9uXPwW4eRljCgA1Vw__",
  name: "Plant name",
  description:
    "Lorem ipsum dolor sit ameum natus totam suscipit exercitationem facere fugit doloremque saepe at vero in sequi inventore.",
};

export default Product;
