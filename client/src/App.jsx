import { useState } from 'react'
import axios from "axios";

import './App.css'

function App() {
  const [image,setImage]=useState(null);
  const [budget, setBudget]=useState("");
  const [result, setResult]=useState([]);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setResult([]);
    setTimeout(()=>{
      const fakeData=[
        "White T-shirt",
        "Blue Jeans",
        "Snkeaers"
      ];

      setResult(fakeData);
    },2200);
  };

  return(
    <div style={{padding:"20px"}}>
      <h1>AI FASHION ASSISTANT</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e)=> setImage(e.target.files[0])}
          required
        />
        {/*uploaded image preview logic*/}
        {image && (
          <div>
            <br />
            <img
              src={URL.createObjectURL(image)}
              alt="preview"
              width="200"
            />
          </div>
        )}

        <br /><br />

        <input
          type="number"
          placeholder="Enter budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Upload</button>
      </form>
        {result.length>0 &&(
           <div>
            <h2> Detected Items: </h2>
            { result.map((item,index)=>(
              <p key={index}>{item}</p>
            ))}
      </div>
      )}
    </div>
  );
}

export default App