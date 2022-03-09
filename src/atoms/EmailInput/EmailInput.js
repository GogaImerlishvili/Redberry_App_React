import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MIN_EMAIL_VALUE } from "../../constants/validation";
import { AiOutlineCheck } from "react-icons/ai";
export function EmailInput({ name, val }) {
  const [value, setValue] = useState(val);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (value && value.length < MIN_EMAIL_VALUE) {
      setHasError(true);
    } else if (value && value.length > MIN_EMAIL_VALUE) {
      setHasError(false);
    }
  }, [value]);

  const renderClassName = () => {
    let className = "input";
    if (hasError && value) {
      className += "is-danger";
    } else if (!hasError && value) {
      className += "is-success";
    }
    return className;
  };
  return (
    <input
      className={renderClassName()}
      type="email"
      placeholder="E Mail"
      name={name}
      autoComplete="email"
      value={value}
      onChange={({ target }) => setValue(target.value)}
      required
    />
  );
}

EmailInput.defaultProps = {
  name: "email",
};
EmailInput.propTypes = {
  name: PropTypes.string.isRequired,
};
