import { useState } from "react";

const Special = ({ name, val, setSpecial }) => {
  const [value, setValue] = useState(val);
  return (
    <div>
      <p>Tell us something special</p>
      <textarea
        placeholder="I.."
        className="textarea1"
        value={value}
        onChange={({ target }) => setSpecial(target.value)}
      ></textarea>
    </div>
  );
};

export default Special;
