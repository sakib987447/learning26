import React from 'react'
import modi from "../assets/images/OIP.jpeg"

export default function ContentComponent() {
  return (
    <div style={{
      display: "flex",
      width: "80%",
      margin: "50px auto",
      alignItems: "center",
      gap: "40px"
    }}>
      
   
      <img 
        src={modi} 
        alt="Narendra Modi"
        style={{
          width: "250px",
          height: "250px",
          borderRadius: "10px",
          objectFit: "cover"
        }}
      />

      
      <div>
        <h1>Narendra Modi</h1>
        <h3>Prime Minister of India</h3>
        <p>
          Narendra Modi is the 14th Prime Minister of India.
          He is known for leadership, development initiatives,
          and strong vision for Digital India.
        </p>
      </div>

    </div>
  )
}
