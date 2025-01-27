import PropTypes from "prop-types";

function Review(props) {
  const classNames = `content-card p-10 ${props.classes}`;
  return (
    <div className={classNames}>
      <div className="flex gap-7">
        <img className="placeholder-user" src={props.src} alt="profile-pic" />
        <div className="my-auto">
          <h4 className="text-xl font-light">{props.name}</h4>
          <img src="public/src/assets/rating-stars.svg" alt="rating" />
        </div>
      </div>
      <p className="mt-5 font-text">{props.description}</p>
    </div>
  );
}
Review.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};
Review.defaultProps = {
  src: "public/src/assets/placeholder-user.jpg",
  name: "User",
  description: "Description wasn't found :(",
};

export default Review;
