import express from 'express';
import dotenv from 'dotenv'
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';

// Variables
const app = express()
const PORT = process.env.PORT || 3000;

// Configurations
dotenv.config()

// Middlewares
app.use(express.json())
app.use('/api/auth', authRoutes)

// Initializing the server
app.listen(PORT, () => {
    connectToMongoDB().then(() => {
        console.log(`Listening on port ${PORT}`);
    })
})