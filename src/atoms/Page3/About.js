const About = ({ name, setDevtalk, value }) => {
  return (
    <div>
      <p>Would you attend Devtaliks and maybe also organize you onw?</p>
      <input
        type="radio"
        name="yes"
        value={value}
        onChange={({ target }) => setDevtalk(true)}
      />
      <label>Yes</label>
      <input
        type="radio"
        name={name}
        onChange={() => setDevtalk(false)}
        value={value}
      />
      <label>No</label>
    </div>
  );
};

export default About;
