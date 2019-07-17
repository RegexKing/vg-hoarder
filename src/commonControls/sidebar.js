import React, { useState } from 'react';

const SideBar = (props) => {

  const [gameTitle, updateTitle] = useState("");

  const handleChange = (event) => {
    updateTitle(event.target.value);
  }

  const handleSubmit = () => {
    props.submitSearch(gameTitle);
  }

  return (
  <div>
    <label>
      Game:
      <input type="text" value={gameTitle} onChange={handleChange} />
    </label>
    <button onClick={handleSubmit} />
  </div>
  );
};

export default SideBar;
