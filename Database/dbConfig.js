import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

/**
 * Asynchronously connects to the MongoDB database using the connection URL
 * specified in the environment variables. Logs a success message upon connection
 * and logs any errors encountered during the connection attempt.
 */
const dbConfig = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};
export default dbConfig;