import React, { useState } from "react";

const LearningForms = () => {
  const [textValue, setTextValue] = useState("");
  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  const [textAreaValue, setTextAreaValue] = useState("");
  const handleTextAreaChange = (event) => {
    setTextAreaValue(event.target.value);
  };

  const [selectValue, setSelectValue] = useState("coconut");
  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleSubmit = (event) => {
    console.log({ textValue, textAreaValue, selectValue });
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="myText"
            type="text"
            value={textValue}
            onChange={handleTextChange}
          />
        </label>

        <br />
        <br />

        <label>
          About:
          <textarea value={textAreaValue} onChange={handleTextAreaChange} />
        </label>

        <br />
        <br />

        <select onChange={handleSelectChange} value={selectValue}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>

        <br />
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LearningForms;
