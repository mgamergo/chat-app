import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connection to database is successful")
    } catch (error) {
        console.log('Error connecting to Database:', error.message)
    }
}

export default connectToMongoDB