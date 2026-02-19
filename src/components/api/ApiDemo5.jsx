import axios from 'axios'
import React, { useState } from 'react'

const ApiDemo5 = () => {

    const [pos,setPos]=useState([]);
    const [search,setSearch]=useState("");
    const [details,setDetails]=useState(null);  

    const postDemo= async ()=>{
        const post1= await axios.get(
            `https://www.omdbapi.com/?apikey=9d57be0b&s=${search}`
        );
        setPos(post1.data.Search); 
    }

    
    const getDetails = async (id) => {
        const res = await axios.get(
            `https://www.omdbapi.com/?apikey=9d57be0b&i=${id}`
        );
        setDetails(res.data);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Hello World</h1>

        <input 
            type="text" 
            placeholder='Search the movie name'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            style={{padding:"8px", marginRight:"10px"}}
        />

        <button onClick={postDemo}>Search</button>

        <div style={{
            display:"grid",
            gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",
            gap:"20px",
            marginTop:"30px",
            padding:"20px"
        }}>
            {
                pos.map((p,index)=>{
                    return (
                        <div key={index} style={{
                            border:"1px solid #ccc",
                            borderRadius:"10px",
                            padding:"15px",
                            boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
                        }}>
                            <img 
                                src={p.Poster} 
                                alt="img"
                                style={{width:"100%", height:"300px", objectFit:"cover"}}
                            />
                            <h3>{p.Title}</h3>
                            <p><b>Year:</b> {p.Year}</p>
                            <p><b>IMDB ID:</b> {p.imdbID}</p>
                            <p><b>Type:</b> {p.Type}</p>

                            <button onClick={()=>getDetails(p.imdbID)}>
                                Details
                            </button>
                        </div>
                    )
                })
            }
        </div>

       
        {
            details && (
                <div style={{
                    marginTop:"40px",
                    padding:"20px",
                    border:"2px solid black",
                    borderRadius:"10px"
                }}>
                    <h2>{details.Title}</h2>
                    <img 
                        src={details.Poster} 
                        alt="poster"
                        style={{width:"300px"}}
                    />
                    <p><b>Year:</b> {details.Year}</p>
                    <p><b>Rated:</b> {details.Rated}</p>
                    <p><b>Released:</b> {details.Released}</p>
                    <p><b>Runtime:</b> {details.Runtime}</p>
                    <p><b>Genre:</b> {details.Genre}</p>
                    <p><b>Director:</b> {details.Director}</p>
                    <p><b>Writer:</b> {details.Writer}</p>
                    <p><b>Actors:</b> {details.Actors}</p>
                    <p><b>Plot:</b> {details.Plot}</p>
                    <p><b>Language:</b> {details.Language}</p>
                    <p><b>Country:</b> {details.Country}</p>
                    <p><b>Awards:</b> {details.Awards}</p>
                    <p><b>IMDB Rating:</b> {details.imdbRating}</p>
                </div>
            )
        }

    </div>
  )
}

export default ApiDemo5
