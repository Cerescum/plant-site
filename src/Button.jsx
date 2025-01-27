import PropTypes from "prop-types";

function Button(props) {
  return (
    <button className="btn mr-5 px-12 py-3 border-gray rounded-xl hover:ring-2 transition duration-500 hover:ease-in-out ring-offset-1 ring-white-500/50">
      {props.name}
    </button>
  );
}
Button.propTypes = {
  name: PropTypes.string,
};
Button.defaultProps = {
  name: "Explore",
};
export default Button;
