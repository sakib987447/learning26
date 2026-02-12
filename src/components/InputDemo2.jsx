import React, { useState } from 'react'

export const InputDemo2 = () => {
  const [find, setFind] = useState("");
  const [temp, setTemp] = useState("");

  return (
    <div>
      <label>Name</label>&nbsp;
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setTemp(e.target.value)}
      />
      <br />
      <button onClick={() => setFind(temp)}>Submit</button>
      <p>{find}</p>
    </div>
  );
}; 