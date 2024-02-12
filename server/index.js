import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import messageRoute from "./routes/message.js"


const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config();

app.get('/', (req, res) => {
    res.send("This is a Wajahat Hussain API")
})

app.use("/Message", messageRoute)


const PORT = process.env.PORT || 5001

const DATABASE_URL = process.env.CONNECTION_URL 

mongoose.connect(DATABASE_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((err) => console.log(err.message));