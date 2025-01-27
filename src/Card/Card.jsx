import PropTypes from "prop-types";
import "./Card.css";

function Card(props) {
  return (
    <div className="photographer-card border-slate-300 border p-10 text-center w-1/4 m-0">
      <img src={props.src} alt="photographer" className="rounded-full" />
      <h3 className="photographer-name">{props.name}</h3>
      <p className="photographer-description">{props.description}</p>
    </div>
  );
}
Card.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
};
Card.defaultProps = {
  src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F008%2F442%2F086%2Foriginal%2Fillustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg&f=1&nofb=1&ipt=d3cfeacddd5d28fa4110b775d17fd1ff27811a1d64f316b210e46277482ea97c&ipo=images",
};

export default Card;
