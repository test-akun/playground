import express from 'express';
import mongoose from 'mongoose';
import route from './routes/index.js'
// import cors from "cors";

const app = express();

const PORT = '3000';
const MONGODB_URI =
  'mongodb+srv://fikri:fikri1234@sandbox.be6qh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

db.on('error', (error) => console.error(error));

db.once('open', () => console.log('Mongoose is connected!!!!'));

// app.use(cors());
app.use(express.json())
app.use('/product', route)

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
