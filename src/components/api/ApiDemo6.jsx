import axios from 'axios'
import React, { useState } from 'react'

const ApiDemo6 =  () => {

  const [addedUser, setAddedUser] = useState(null)

  const submit = async () => {
    const user = {
      name: "Sakib",
      age: 21,
      college: "GEC",
      branch: "Computer",
    }

    try {
      const post3 = await axios.post(
        "https://node5.onrender.com/user/user/",
        user
      )

      console.log("Full Response:", post3)
      console.log("Added User Data:", post3.data)

      
      const responseData = post3.data

      setAddedUser(responseData)

    } catch (err) {
      console.log(err);
    }
  }
   
  return (
    <div style={{textAlign:"center"}}>
      <h2>Api Demo 6</h2>
      <button onClick={submit}>Add</button>

      <hr />

      {addedUser && (
        <div>
          <h3>User Added Successfully</h3>
          <p>Name: {addedUser.name}</p>
          <p>Age: {addedUser.age}</p>
          <p>College: {addedUser.college}</p>
          <p>Branch: {addedUser.branch}</p>
        </div>
      )}

    </div>
  )
}

export default ApiDemo6
