import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const When = ({ name, val }) => {
  const [skills, setSkills] = useState([]);
  const [value, setValue] = useState(val);
  const [hasError, setHasError] = useState(false);
  const { setUser, data } = useContext(AuthContext);

  return (
    <div className="container_covid2">
      <p>When?</p>
      <input
        type="date"
        name={name}
        value={value}
        placeholder="Date"
        onChange={({ target }) => setValue(target.value)}
      />
    </div>
  );
};

export default When;
