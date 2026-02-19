import axios from 'axios'
import React, { useState } from 'react'

const ApiDemo4 = () => {

    const [pos,setPos]=useState([]);
    const [search,setSearch]=useState("");

    const postDemo= async ()=>{
        const post1= await axios.get(
            `https://www.omdbapi.com/?apikey=9d57be0b&s=${search}`
        );
        console.log(post1);
        console.log(post1.data);
        setPos(post1.data.Search || []);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Hellow world</h1>

        <input 
            type="text" 
            placeholder='Search the movie name'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />

        <button onClick={postDemo}>Movie</button>

        <div>
            <table style={{textAlign:"center"}} border="1">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Year</th>
                        <th>Imdb</th>
                        <th>Type</th>
                        <th>Poster</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pos.map((p,index)=>{
                            return (
                                <tr key={index}>
                                    <td>{p.Title}</td>
                                    <td>{p.Year}</td>
                                    <td>{p.imdbID}</td>
                                    <td>{p.Type}</td>
                                    <td>
                                        <img 
                                            src={p.Poster} 
                                            alt="img" 
                                            style={{height:"200px",width:"200px"}}
                                        />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ApiDemo4
