import PropTypes from "prop-types";

const Button = ({ customClass, additionalStyles, onClick, children }) => {
  let btnClasses =
    "mx-2 h-min bg-transparent hover:bg-[#10b981] text-[#06b6d4] font-semibold hover:text-white border border-[#06b6d4] hover:border-transparent focus:outline-none rounded transition duration-300";

  if (customClass && customClass !== "") {
    btnClasses = customClass;
  }

  if (additionalStyles && additionalStyles !== "") {
    btnClasses += " " + additionalStyles;
  }

  return (
    <button className={btnClasses} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  customClass: PropTypes.string,
  additionalStyles: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
