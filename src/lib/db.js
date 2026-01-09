import mongoose from 'mongoose';

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/portfolio'


const connection = {}

async function dbConnection() {
    if(connection.isConnected){
        console.log("Database alredy connected");
        return
    }

    try {
        const db = await mongoose.connect(MONGODB_URL);
        
        connection.isConnected = db.connections[0].readyState;
        
        console.log("db connection successfully");
        console.log(db);
        
        
        
    } catch (error) {

        console.log("Databse connection faild", error)
        process.exit(0);
        
    }
}

export default dbConnection; 