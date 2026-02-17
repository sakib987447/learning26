import React, { useState } from "react";

export const InputDropDown = () => {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const data = {
    India: ["Gujarat", "Rajasthan", "Maharashtra", "Delhi"],
    China: ["Beijing", "Shanghai", "Guangdong"],
    USA: ["California", "Texas", "New York"],
  };

  return (
    <div style={{textAlign:"center", backgroundColor:"pink", height:"609px", color:"blue"}}>
      <h2>Country & State Dropdown</h2>

   
      <label>Country: </label>
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
          setState("");
        }}
      >
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="China">China</option>
        <option value="USA">USA</option>
      </select>

      <br /><br />

     
      <label>State: </label>
      <select
        value={state}
        onChange={(e) => setState(e.target.value)}
        disabled={!country}
      >
        <option value="">Select State</option>
        {country &&
          data[country].map((st, index) => (
            <option key={index} value={st}>
              {st}
            </option>
          ))}
      </select>

      <br /><br />

      <p>
        <strong>Selected:</strong> {country} {state && `- ${state}`}
      </p>
    </div>
  );
};

