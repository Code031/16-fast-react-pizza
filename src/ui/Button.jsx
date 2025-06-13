import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const style = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-2 py-1 text-sm sm:px-4 sm:py-2",
    secondary:
      base +
      " px-4 py-3 sm:px-6 sm:py-4 bg-stone-200 text-stone-600 hover:bg-stone-300 focus:bg-stone-300 focus:ring-stone-300",
    round: base + " px-2.5 py-1 text-sm md:px-3.5 md:py-2",
  };

  if (to) {
    return (
      <Link to={to} className={style[type]}>
        {children}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button onClick={onClick} disabled={disabled} className={style[type]}>
        {children}
      </button>
    );
  }

  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  to: PropTypes.string,
  type: PropTypes.oneOf(["primary", "small", "secondary", "round"]).isRequired,
  onClick: PropTypes.func,
};
