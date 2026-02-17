import axios from 'axios'
import React, { useState } from 'react'

export const ApiDemo2 = () => {

    const [message, setMessage] = useState("")
    const [users, setUsers] = useState([])

    const getUsers = async () => {
        
            const response = await axios.get("https://node5.onrender.com/user/user/")
            
            setMessage(response.data.message)
            setUsers(response.data.data)
    }

    return (
        <div style={{ textAlign: "center", padding: 30 }}>
            <h1>API DEMO 2 - TABLE FORMAT</h1>

            <button onClick={getUsers}>GET USERS</button>

            <h2>Message: {message}</h2>

            <table border="5" cellPadding="10" style={{ margin: "20px auto"}}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>{user.isActive ? "Yes" : "No"}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}