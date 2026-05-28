# AI Fashion Assistant

An AI-powered fashion assistant web application that analyzes uploaded outfit images, detects fashion-related items using Google Vision API, and recommends matching products based on detected labels and user budget.

---

## Features

### Image Upload & Preview

* Upload outfit images directly from your device
* Preview selected image before submission

### AI-Based Fashion Detection

* Uses Google Cloud Vision API for image analysis
* Detects fashion-related labels from uploaded outfit images

### Fashion Label Filtering

* Filters generic AI labels into fashion-specific categories
* Focuses on clothing, footwear, accessories, and fashion-related terms

### Product Recommendation System

* Matches detected fashion labels with predefined product data
* Dynamically displays relevant fashion items

### Budget Filtering

* Filters recommended products according to user-entered budget

### Dynamic UI Rendering

* React state-based rendering for:

  * detected labels
  * recommended products
  * conditional display sections

---

## Tech Stack

### Frontend

* React
* Vite
* JavaScript
* CSS

### Backend

* Node.js
* Express.js

### AI / APIs

* Google Cloud Vision API

### Libraries & Tools

* Axios
* Multer
* CORS
* dotenv

---

## Project Flow

```text
User uploads image
↓
Frontend sends image to backend
↓
Backend processes image using Google Vision API
↓
AI returns labels
↓
Backend filters fashion-related labels
↓
Frontend receives filtered labels
↓
Matching fashion products are displayed
↓
Budget filtering is applied
```

---

## Current MVP Scope

The current MVP supports:

* image-based fashion detection
* fashion label filtering
* basic recommendation logic
* budget-based filtering

Future improvements may include:

* real shopping API integration
* personalized recommendations
* outfit color analysis
* authentication
* saved wardrobes
* advanced fashion-specific AI models

---

## Installation

### Clone Repository

```bash
git clone https://github.com/suhani-k7/AI-Fashion-Assistant.git
```

### Frontend Setup

```bash
cd client
npm install
npm run dev
```

### Backend Setup

```bash
cd server
npm install
node index.js
```

---

## Environment Variables

Create a `.env` file inside the server folder:

```env
GOOGLE_VISION_API_KEY=your_api_key_here
```

---

## Learning Goals Behind This Project

This project was built to:

* understand full-stack application flow
* learn React state management
* practice backend API integration
* understand AI API workflows
* strengthen JavaScript fundamentals
* build AI-assisted recommendation systems
