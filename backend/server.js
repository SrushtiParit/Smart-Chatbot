const express = require("express");
const cors = require("cors");
require("dotenv").config();
const AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.region,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Smart Chatbot Backend is Running!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});