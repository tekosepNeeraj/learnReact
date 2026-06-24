import { useState } from "react";

function AdvanceForm() {
  const [formData, setFormData] = useState({
    gender: "",
    country: "India",
    agree: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <h1>Advance form with checkbox, radio & select </h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />{" "}
          Female
        </label>{" "}
        <br />
        <label>
          Country :
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="India">India</option>
            <option value="US">US</option>
            <option value="UK">UK</option>
          </select>
        </label>{" "}
        <br />
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree to Term and Condition
        </label>
        <br />
        <button type="submit"> save </button>
      </form>
    </>
  );
}
export default AdvanceForm;
