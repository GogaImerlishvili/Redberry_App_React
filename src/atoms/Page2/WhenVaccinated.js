import { useState } from "react";

const WhenVaccinated = ({ name, val }) => {
  const [value, setValue] = useState(val);

  return (
    <div className="container_covid4">
      <p>When did you get your last covid vaccine?</p>
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

export default WhenVaccinated;
