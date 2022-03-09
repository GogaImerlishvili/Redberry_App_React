const Vaccinated = ({ name, val, setVaccinated, value }) => {
  return (
    <div className="container_covid3">
      <p>Have you been vaccinated?</p>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={({ target }) => setVaccinated(true)}
      />
      <label>Yes</label>
      <input
        type="radio"
        name={name}
        value={value}
        onChange={({ target }) => setVaccinated(false)}
      />
      <label>No</label>
    </div>
  );
};

export default Vaccinated;
