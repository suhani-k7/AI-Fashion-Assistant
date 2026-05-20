import { useState } from 'react'
import axios from "axios";
import products from "./data/products";

import './App.css'

function App() {
  const [image,setImage]=useState(null);
  const [budget, setBudget]=useState("");
  const [result, setResult]=useState([]);
  const matchedProducts=products.filter((product)=>
  result.includes(product.category) && product.price<=Number(budget)
  )

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const formData=new FormData();
    formData.append("image", image);
    formData.append("budget", budget);
    const res = await axios.post(
      "http://localhost:8000/upload",
      formData
    );
    console.log(res.data);
    setResult(res.data.labels);
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
      {matchedProducts.length>0 &&(
        <div>
          <h2>Recommended Products:</h2>
          {matchedProducts.map((product)=>(
            <div key={product.id}>
              <img src={product.image}
              alt={product.name}
              width="150"
              />
              <p>{product.name}</p>
              <p>₹{product.price}</p>
            </div>
        ))}
      </div>
    )}
    </div>
  );
}

export default App