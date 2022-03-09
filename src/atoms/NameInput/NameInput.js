import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MIN_NAME_VALUE } from "../../constants/validation";

export function NameInput({ name, val }) {
  const [value, setValue] = useState(val);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (value && value.length < MIN_NAME_VALUE) {
      setHasError(true);
    } else if (value && value.length > MIN_NAME_VALUE) {
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
      type="text"
      placeholder="First Name"
      name={name}
      value={value}
      autoComplete="new-name"
      required
      onChange={({ target }) => setValue(target.value)}
    />
  );
}

NameInput.defaultProps = {
  name: "name",
};

NameInput.propTypes = {
  name: PropTypes.string.isRequired,
};
