export default Interest = ({ data, setData }) => {
  const { interests } = data;
  const handleDataChange = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interests: e.target.checked
        ? [...prevState.interests, e.target.name]
        : prevState.interests.filter((i) => i !== e.target.name),
    }));
  };
  console.log(interests);
  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={interests.includes("coding")}
            onChange={handleDataChange}
          />
        </label>
        Coding
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={interests.includes("music")}
            onChange={handleDataChange}
          />
        </label>
        Music
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="react"
            checked={interests.includes("react")}
            onChange={handleDataChange}
          />
        </label>
        React
      </div>
    </div>
  );
};
