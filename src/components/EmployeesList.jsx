import React, { useState } from 'react';

export const EmployeesList = (props) => {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [pass, setPass] = useState("");
  const [mobile, setMobile] = useState("");


  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const rollHandler = (e) => {
    setRoll(e.target.value);
  };

  const passHandler = (e) => {
    setPass(e.target.value);
  };
  const mobileHandler = (e) => {
    setMobile(e.target.value);
  };

  return (
    <div>
      <h1>EmployeesList</h1>
      <p>{props.title}</p>
      <p>{props.description.name}</p>
      <p>{props.description.age}</p>
     <p> {props.description.roll}</p>
     <p> {props.description.mobile}</p>
      <hr />

      <label>Name</label>&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Enter The Name"
        value={name}
        onChange={nameHandler}
      />
      <p>{name}</p>

      <label>Roll No</label>&nbsp;&nbsp;
      <input
        type="number"
        placeholder="Enter The Number"
        value={roll}
        onChange={rollHandler}
      />
      <p>{roll}</p>

      <label>Password</label>&nbsp;&nbsp;
      <input
        type="password"
        placeholder="Enter Password"
        value={pass}
        onChange={passHandler}
      />
      <p>{pass}</p>

      <label>Mobile</label>&nbsp;&nbsp;
      <input
        type="text"
        placeholder="Enter your mobile number"
        value={name}
        onChange={mobileHandler}
      />
    </div>
  );
};
