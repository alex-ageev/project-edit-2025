import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import productRouter from './routers/productRouter.js';

dotenv.config();

// App creation
const app = express();
const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "";

// The data format (JSON)
app.use(express.json());

app.use('/api', productRouter);

app.use(express.static('static'));

const startApp = async () => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(MONGO_URI);
    console.log("Successefully connected to MongoDB");

    app.listen(PORT, () => {
      if (process.env.NODE_ENV === 'development') {
        console.log(`Server is running in development mode on port ${PORT}`);
      } else {
        console.log(`Server is running in production mode on port ${PORT}`);
      }
    });
  } catch (error) {
    console.log('Error connecting to MongoDB:', error);
  }
}

startApp();

