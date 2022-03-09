import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";
import { MIN_EMAIL_VALUE } from "../../../constants/validation";
import { ExperienceInput } from "./ExperienceInput";
import { FaTrash } from "react-icons/fa";
export function SkillsInput({ name, val, add }) {
  const [skills, setSkills] = useState([]);
  const [value, setValue] = useState(val);
  const [hasError, setHasError] = useState(false);
  const { setUser, data, removeById } = useContext(AuthContext);

  const GetSkills = async () => {
    const fetched = await fetch(`https://bootcamp-2022.devtest.ge/api/skills`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await fetched.clone().json();
    console.log(res);
    setSkills(res);
    setValue(res[0].title);
  };
  useEffect(() => {
    GetSkills();
  }, []);

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
  console.log(value);
  return (
    <div>
      <select
        className={renderClassName()}
        placeholder="Skills"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {skills.map((item, index) => {
          return (
            <option
              value={item.title}
              key={item.id}
              selected={item.title === value}
              // selected={selected}
            >
              {item.title}
            </option>
          );
        })}
      </select>
      <div className="last_name">
        <ExperienceInput
          name="last_name"
          // val={data.work_preference}
          val1={skills}
          addSkill={add}
          skill={value}
        />
      </div>
      {data.skills?.map((e) => {
        const skill = skills.find((s) => s.id === e.id);
        return (
          <div>
            <article className="input">
              <div className="btn-container">
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeById(e.id)}
                >
                  <FaTrash />
                </button>
              </div>
              <div className="skill_input">
                {skill?.title}
                {e?.experience}
              </div>
            </article>
          </div>
        );
      })}
    </div>
  );
}

SkillsInput.defaultProps = {
  name: "skills",
};
SkillsInput.propTypes = {
  name: PropTypes.string,
};
