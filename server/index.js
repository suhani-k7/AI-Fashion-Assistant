const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("My server working");
});

const axios = require("axios");

app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    console.log("Request Received.");

    const fs = require("fs");
    const imgbytes = fs.readFileSync(req.file.path, {
      encoding: "base64",
    });

const response = await axios.post(
  "https://api.clarifai.com/v2/models/general-image-recognition/outputs",
  {
    user_app_id: {
      user_id: "3bmcvs8o1vt8",
      app_id: "main",
    },
    inputs: [
      {
        data: {
          image: {
            base64: imgbytes,
          },
        },
      },
    ],
  },
  {
    headers: {
      Authorization: "Key 08861459382648e28ad8bb9c2d15a1c8",
      "Content-Type": "application/json",
    },
  }
);

    const concepts =
      response.data.outputs[0].data.concepts.map((c) => c.name);

    console.log("Detected labels:", concepts);

    res.json({
      message: "AI processed image",
      labels: concepts,
    });
  } catch (error) {
    console.error("ERROR:", error.response?.data || error);
    res.status(500).json({ error: "AI Processing FAILED" });
  }
});

app.get("/upload", (req, res) => {
  res.send("Upload route working (GET)");
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
