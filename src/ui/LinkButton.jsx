import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function LinkButton({ children, to }) {
  const navigate = useNavigate();
  const className = "text-sm text-blue-500 hover:text-blue-700 hover:underline";
  if (to === "-1")
    return (
      <button onClick={() => navigate(-1)} className={className}>
        {children}
      </button>
    );

  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
}

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
