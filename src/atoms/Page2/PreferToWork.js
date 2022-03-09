import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const PreferToWork = ({ name, val, setPreffer }) => {
  const [value, setValue] = useState(val);
  return (
    <div className="container_covid">
      <p>how would you prefer to work?</p>

      <input
        type="radio"
        name={name}
        value={value}
        onChange={({ target }) => setPreffer("From_Sairme_Office")}
      />
      <label>From Sairme office</label>
      <br />
      <input
        type="radio"
        name={name}
        value={value}
        onChange={({ target }) => setPreffer("from_home")}
      />
      <label>From Home</label>
      <br />
      <input
        type="radio"
        name={name}
        value={value}
        onChange={({ target }) => setPreffer("hybrid")}
      />
      <label>Hybrid</label>
    </div>
  );
};

export default PreferToWork;
