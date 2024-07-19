import express from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import route from './routes/user.js';


const app = express();
app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000
const MONGOURL = process.env.MONGOURL

//Connection
mongoose.connect(MONGOURL,).then(() => {
    console.log("Connected to MongoDB")
    app.listen(PORT, () => {
        console.log(`Server Started At PORT: ${PORT}`)
    })
}).catch(error => console.log(error))

app.use('/api', route)

