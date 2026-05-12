require("dotenv").config();
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
    `https://vision.googleapis.com/v1/images:annotate?key=${process.env.GOOGLE_VISION_API_KEY}`,
    {
      requests: [
        {
          image: {
            content: imgbytes,
          },
          features: [
            {
              type: "LABEL_DETECTION",
              maxResults: 5,
            },
          ],
        },
      ],
    }
  );

  const labels =
    response.data.responses[0].labelAnnotations.map(
      (item) => item.description
    );

  console.log("Detected labels:", labels);

  res.json({
    message: "AI processed image",
    labels: labels,
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
