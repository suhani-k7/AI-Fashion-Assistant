import { useState } from 'react'
import axios from "axios";

import './App.css'

function App() {
  const [image,setImage]=useState(null);
  const [budget, setBudget]=useState("");
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("image",image);
    formData.append("budget",budget);
    try{
      const res=await axios.post(
        "http://localhost:8000/upload",
        formData
      );
      console.log(res.data);
    }catch (err){
      console.error(err);
    }
  }
  return(
    <div style={{padding:"20px"}}>
      <h1>AI FASHION ASSISTANT</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(e)=> setImage(e.target.files[0])}
          required
        />
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
    </div>
  );
}

export default App
