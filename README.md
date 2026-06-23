# 🛍️ Fashion Wander Wear - Sales Forecasting and Optimization for Fashion Retail

**An AI-Powered Solution to Optimize Sales, Inventory, and Order Management**  
FashioNexus is a powerful, AI-driven platform for fashion retailers. Built on the MERN stack with Firebase Authentication, Flask, and Python-based machine learning models, it leverages predictive analytics to enhance decision-making, streamline operations, and boost sales.

![Fashion Wander Wear  Banner](https://your-image-url.com/banner.png) <!-- Replace with your image URL or animation -->

---

## 📈 Key Features

- **🔮 AI-Driven Sales Forecasting** - Predicts future sales patterns using historical data for better inventory and marketing decisions.
- **🔄 Automated Reordering System** - Triggers alerts or auto-orders when stock levels are low, minimizing stockouts.
- **🚚 Real-Time Order Tracking** - Provides end-to-end tracking visibility, enhancing customer satisfaction and trust.
- **📊 Promotion Performance Dashboard** - Tracks and evaluates marketing efforts, showing live metrics on customer engagement and ROI.

---

## 📸 Demo

![Demo GIF](https://your-image-url.com/demo.gif) <!-- Add a GIF demonstrating your app -->

---

## 🚀 Technologies Used

- **Frontend**: React, TailwindCSS
- **Backend**: Node.js, Express, Flask (for ML models), Firebase Authentication
- **Machine Learning**: Python (Extra Trees Regressor, Gradient Boosting), Scikit-Learn
- **Database**: MongoDB, Firebase Cloud Storage
- **Deployment**: Docker, Kubernetes, Firebase Hosting

---

## 🛠️ Project Structure

```plaintext
FashioNexus-Web-base-Sales-Optimization-Solution-for-Fashion-Retail/
├── client/                 # React frontend
│   ├── public/             
│   └── src/
├── api/                 # Node.js & Express backend
│   ├── routes/
│   ├── controllers/
│   └── models/
├── prdictionAPI/                 # Flask API for ML models
│   ├── venv/
│   └── server.py
├── db/                     # MongoDB connection and schemas
└── README.md
```


## ⚙️ Configuration & Setup

### Prerequisites

- **Node.js** & **NPM**: Ensure you have Node.js and NPM installed.
- **Python 3.x**: Install Python with Flask for the machine learning API.
- **MongoDB**: Make sure MongoDB is set up locally or use a MongoDB cloud instance.
- **Firebase**: Create a Firebase project for Authentication and Cloud Storage.

### Local Installation

1. **Clone the repository**:
 ```bash
 git clone https://github.com/malakasadeep/FashioNexus-Web-base-Sales-Optimization-Solution-for-Fashion-Retail.git
 cd FashioNexus-Web-base-Sales-Optimization-Solution-for-Fashion-Retail
 ```
## 📦 Install Dependencies

After cloning the repository, navigate to each directory to install the required dependencies.

### 1. Frontend (React)
```bash
cd client
npm install
```
### 2. Backend (Node.js & Express)
```bash
cd ../api
npm install
```
### 3. Machine Learning API (Flask & Python)
```bash
cd ../prdictionAPI
pip install -r requirements.txt
```

## 🔐 Set Up Environment Variables

Create a .env file in both api and client directories with the following configurations.

### 1. For .env
```bash
MONGO_URI=<Your MongoDB URI>
JWT_TOCKEN=<TOCKEN>
```
### 2. For client/.env
```bash
FIREBASE_API_KEY=<Your Firebase API Key>
```


## 🚀 Run the Project

To run the application locally, start each component in separate terminals.

### 1. Start React Client
```bash
cd client
npm run dev
```
### 2. Start Node.js Server
```bash
cd ../server
npm run dev
```
### 3. Start ML API (Flask)
```bash
cd ../prdictionAPI
venv/bin/activate
py server.py 
```



## 👥 Authors & Acknowledgments

- **MalakaSadeep** - _Initial work_
- Special thanks to the open-source community for amazing libraries and inspiration!

