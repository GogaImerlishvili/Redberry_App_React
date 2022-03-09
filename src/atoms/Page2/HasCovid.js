const HasCovid = ({ name, setHasCovid, value }) => {
  return (
    <div className="container_covid1">
      <p>Did you contact covid 19? :(</p>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={({ target }) => setHasCovid(true)}
      />
      <label>Yes</label>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={({ target }) => setHasCovid(false)}
      />
      <label>No</label>
    </div>
  );
};

export default HasCovid;
