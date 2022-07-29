import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { MIN_EMAIL_VALUE } from "../../../../constants/validation";
import classes from "./ExperienceInput.module.css";
export function ExperienceInput({ name, val, addSkill, val1, skill }) {
  const [value, setValue] = useState(val);

  const addInput = () => {
    const mySkill = val1.find((e) => e.title === skill);
    addSkill(mySkill.id, value);

    return;
  };
  return (
    <>
      <input
        className="input"
        type="text"
        placeholder="Experience Duration in years"
        name={name}
        autoComplete="text"
        value={value}
        onChange={({ target }) => setValue(target.value)}
        required
      />
      <div>
        <button
          className={classes["add_language"]}
          onClick={() => {
            addInput();
          }}
        >
          Add Programming Language
        </button>
      </div>
    </>
  );
}

ExperienceInput.defaultProps = {
  name: "skills",
};
ExperienceInput.propTypes = {
  name: PropTypes.string.isRequired,
};
