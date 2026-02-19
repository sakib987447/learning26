import axios from 'axios'
import React, { useState } from 'react'

const ApiDemo7 = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [age, setAge] = useState("")
  const [password, setPassword] = useState("")
  const [result, setResult] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const data = {
      name: name,
      email: email,
      age: age,
      password: password
    }

    try {
      const res = await axios.post(
       "https://node5.onrender.com/user/user/"
,
        data
      )

      console.log(res.data)

     
      setResult("User Registered Successfully")

    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Simple Register Form</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <input
          type="number"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>

      </form>

      <h3>{result}</h3>

    </div>
  )
}

export default ApiDemo7
