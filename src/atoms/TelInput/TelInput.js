import { useEffect, useState } from "react";
import { MIN_TEL_VALUE } from "../../constants/validation";
import { AiOutlineCheck, AiOutlineMinusSquare } from "react-icons/ai";
export function TelInput({ name, val }) {
  const [value, setValue] = useState(val);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (value && value.length < MIN_TEL_VALUE) {
      setHasError(true);
    } else if (value && value.length > MIN_TEL_VALUE) {
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
        type="tel"
        placeholder="+995 5__ __ __ __"
        name={name}
        value={value}
        autoComplete="tel"
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
