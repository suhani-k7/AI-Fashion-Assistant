const express=require("express");
const cors=require("cors");
const multer=require("multer");

const upload=multer({dest:"uploads/"});
const app=express();
app.use(cors());
app.use(express.json());
app.get("/", (req,res)=>{
    res.send("My server working");
});
app.listen(8000,()=>{
    console.log("Server running on port 8000");
})

app.post("/upload", upload.single("image"), (req,res) =>{
    try{
        console.log("File:", req.file);
        console.log("Budget:", budget);
        res.json({
            message: "data received succesfully",
        });
    } catch (error) {
        console.error("ERROR:",error);
        res.status(500).json({
            message: "Error occurred while processing the request",
        });
    }
app.get("/upload", (req, res) => {
  res.send("Upload route working (GET)");
});
});