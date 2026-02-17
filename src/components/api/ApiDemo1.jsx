import React, { useState } from 'react'
import axios from 'axios'

export const ApiDemo1 = () => {

    const [users,setUsers]=useState("");
    const [data,setData]=useState([]);

    const user=async()=>{
     const promises= await axios.get("https://node5.onrender.com/user/user/");
    console.log(promises);
    console.log(promises.data);
    console.log(promises.data.message);
    setUsers(promises.data.message);
    console.log("Arry of object");
    setData(promises.data.data);
    }

  return (
    <div style={{textAlign:"center"}}>
        <div>
        <h1>Api Demo1</h1>
        <button onClick={user}>Get</button>
        </div>
        {users}
        <div>

        <table 
        style={{
            borderCollapse:"collapse",
            margin:"20px auto",
            width:"80%",
            border:"2px solid black"
        }}>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>password</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((us)=>{
                        return <tr key={us._id}>
                            <td>{us._id}</td>
                            <td>{us.name}</td>
                            <td>{us.email}</td>
                            <td>{us.password}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>

         </div>
    </div>
  )
}
