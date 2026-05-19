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
  const fashionKeywords = [
    // General fashion terms
    "Fashion",
    "Clothing",
    "Apparel",
    "Outfit",
    "Style",
    "Streetwear",
    "Luxury",
    "Designer",
    "Casual",
    "Formal",
    "Ethnic",
    "Westernwear",
    "Street Fashion",
    "Fashion Design",
    "Costume",
    "Uniform",
    "Garment",

    // Tops
    "Shirt",
    "T-shirt",
    "Tee",
    "Polo",
    "Tank Top",
    "Crop Top",
    "Blouse",
    "Tunic",
    "Kurti",
    "Sweater",
    "Cardigan",
    "Hoodie",
    "Sweatshirt",
    "Jersey",
    "Vest",
    "Sleeve",
    "Long Sleeve",
    "Short Sleeve",
    "Tube Top",
    "Off-shoulder",
    "Camisole",
    "Peplum Top",
    "Henley Shirt",
    "Flannel Shirt",
    "Graphic Tee",
    "Pullover",

    // Bottoms
    "Jeans",
    "Pants",
    "Trousers",
    "Joggers",
    "Leggings",
    "Shorts",
    "Cargo Pants",
    "Chinos",
    "Skirt",
    "Mini Skirt",
    "Maxi Skirt",
    "Midi Skirt",
    "Palazzo",
    "Track Pants",
    "Wide-leg Pants",
    "Skinny Jeans",
    "Denim Jeans",
    "Sweatpants",
    "Flared Pants",
    "Cargo",
    "Denim",

    // Dresses & One-pieces
    "Dress",
    "Gown",
    "Jumpsuit",
    "Romper",
    "Kaftan",
    "Saree",
    "Lehenga",
    "Anarkali",
    "Bodycon Dress",
    "Cocktail Dress",
    "Evening Gown",
    "Summer Dress",
    "Wrap Dress",
    "Slip Dress",
    "Kurta",

    // Outerwear
    "Jacket",
    "Blazer",
    "Coat",
    "Overcoat",
    "Windbreaker",
    "Bomber Jacket",
    "Denim Jacket",
    "Puffer Jacket",
    "Raincoat",
    "Leather Jacket",
    "Trench Coat",
    "Shrug",
    "Cape",
    "Poncho",

    // Footwear
    "Shoes",
    "Sneakers",
    "Boots",
    "Sandals",
    "Heels",
    "Loafers",
    "Slippers",
    "Flip Flops",
    "Moccasins",
    "Flats",
    "Running Shoes",
    "Sports Shoes",
    "High Heels",
    "Ankle Boots",
    "Platforms",
    "Canvas Shoes",
    "Footwear",

    // Bags & Accessories
    "Bag",
    "Handbag",
    "Backpack",
    "Wallet",
    "Belt",
    "Cap",
    "Hat",
    "Beanie",
    "Scarf",
    "Gloves",
    "Sunglasses",
    "Watch",
    "Jewelry",
    "Necklace",
    "Bracelet",
    "Ring",
    "Earrings",
    "Tote Bag",
    "Shoulder Bag",
    "Crossbody Bag",
    "Clutch",
    "Purse",
    "Chain",
    "Pendant",
    "Anklet",

    // Activewear
    "Gym Wear",
    "Activewear",
    "Sportswear",
    "Yoga Pants",
    "Tracksuit",
    "Athleisure",
    "Running Gear",
    "Workout Clothes",

    // Innerwear & Sleepwear
    "Lingerie",
    "Bra",
    "Underwear",
    "Boxers",
    "Nightwear",
    "Pajamas",
    "Robe",
    "Sleepwear",

    // Fabrics & Materials
    "Denim",
    "Leather",
    "Cotton",
    "Linen",
    "Silk",
    "Wool",
    "Velvet",
    "Satin",
    "Polyester",
    "Knitted Fabric",

    // Fashion patterns/styles
    "Printed",
    "Floral",
    "Striped",
    "Checked",
    "Oversized",
    "Slim Fit",
    "Regular Fit",
    "Vintage",
    "Minimalist",
    "Bohemian",
    "Aesthetic",
    "Monochrome",
    "Pattern",
    "Graphic",
    "Plaid",

    // Body/fit related labels often returned
    "Waist",
    "Collar",
    "Pocket",
    "Button",
    "Zipper",
    "Sleeve",
    "Footwear",
    "Outerwear",

    // Colors
    "Black",
    "White",
    "Blue",
    "Red",
    "Green",
    "Yellow",
    "Orange",
    "Pink",
    "Purple",
    "Brown",
    "Grey",
    "Gray",
    "Beige",
    "Cream",
    "Maroon",
    "Navy",
    "Olive",
    "Turquoise",
    "Silver",
    "Gold"
  ];
  const filteredLabels = labels.filter((label) =>
    fashionKeywords.includes(label)
  );

  console.log("Detected labels:", filteredLabels);

  res.json({
    message: "AI processed image",
    labels: filteredLabels,
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
