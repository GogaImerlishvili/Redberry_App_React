const SpeakAbout = ({ value, setDevtalkTopic }) => {
  return (
    <div>
      <p>What would you speak about at Devtalik?</p>
      <textarea
        placeholder="I Would..."
        className="textarea"
        name="devtalk_topik"
        value={value}
        onChange={({ target }) => setDevtalkTopic(target.value)}
      ></textarea>
    </div>
  );
};

export default SpeakAbout;
