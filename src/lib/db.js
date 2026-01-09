import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/portfolio'

const connection = {}

async function dbConnection() {
    if(connection.isConnected){
        console.log("Database already connected");
        return;
    }

    try {
        console.log("Attempting to connect to:", MONGODB_URL.replace(/\/\/.*:.*@/, '//***:***@'));
        
        const db = await mongoose.connect(MONGODB_URL, {
            retryWrites: true,
            w: "majority",
        });
        
        connection.isConnected = db.connections[0].readyState;
        
        console.log("✓ Database connection successful");
        
    } catch (error) {
        console.error("✗ Database connection failed:", error.message);
        console.error("Make sure MongoDB is running or MONGODB_URL is correct");
        
        // Don't throw - allow app to start even if DB fails initially
        connection.isConnected = false;
    }
}

export default dbConnection; 