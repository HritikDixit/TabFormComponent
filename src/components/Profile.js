export default Profile = ({ data, setData }) => {
  const { name, email, age, Gender } = data;
  const handleChange = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };
  return (
    <div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => handleChange(e, "name")}
        />
      </div>
      <div>
        <label>Age: </label>
        <input
          type="number"
          placeholder="Enter Age"
          value={age}
          onChange={(e) => handleChange(e, "age")}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => handleChange(e, "email")}
        />
      </div>
    </div>
  );
};
