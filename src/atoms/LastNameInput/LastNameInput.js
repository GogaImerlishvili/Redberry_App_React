import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MIN_NAME_VALUE } from "../../constants/validation";
import { AiOutlineCheck, AiOutlineMinusSquare } from "react-icons/ai";

export function LastNameInput({ name, val }) {
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
    <article className="control">
      <input
        className={renderClassName()}
        type="text"
        placeholder="Last Name"
        name={name}
        value={value}
        autoComplete="last_name"
        required
        onChange={({ target }) => setValue(target.value)}
      />
      {!hasError && value && (
        <span className="icon">
          <AiOutlineCheck />
        </span>
      )}

      {hasError && value && (
        <span className="icon-minus">
          <AiOutlineMinusSquare />
        </span>
      )}
    </article>
  );
}

LastNameInput.defaultProps = {
  name: "last_name",
};

LastNameInput.propTypes = {
  name: PropTypes.string.isRequired,
};
