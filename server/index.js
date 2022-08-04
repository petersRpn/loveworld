import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';


import postRouter from './routes/post.js'

const app = express();


app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors({origin: true, credentials: true}));
app.use('/posts', postRouter)

const CONNECTION_URL = 'mongodb+srv://oizamsipeters:Rpnoizamsi07062639099@cluster0.lfqq7hz.mongodb.net/<dbname>?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
try {
    
     mongoose.connect(CONNECTION_URL , {useNewUrlParser: true, useUnifiedTopology: true})
} catch (error) {
    console.log(error.message)
}
app.listen(PORT, () => console.log(`server start at port: ${PORT}`));
mongoose.connection.on('connected', () => console.log('mongodb connected'))
mongoose.connection.on('error', (error) => console.log('error'))




