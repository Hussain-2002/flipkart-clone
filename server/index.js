import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js"; // Import DB connection
import DefaultData from "./default.js"; // Import default data
import Router from './routes/route.js';
import cors from 'cors';
import bodyParser from "body-parser";

dotenv.config();

const app = express();  // ✅ Define app FIRST

// ✅ Use middlewares after initializing app
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

const PORT = process.env.PORT || 8000;

// Connect to MongoDB
connectDB();

// Insert Default Data
DefaultData();

app.get("/", (req, res) => {
    res.send("API is running...");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
