import PropTypes from "prop-types";
import s from "./Button.module.css";
function Button({ type, buttonName, handleClick }) {
  return (
    <button className={s.button} onClick={handleClick} type={type}>
      {buttonName}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.array,
  buttonName: PropTypes.array,
  handleClick: PropTypes.func,
};

export default Button;
