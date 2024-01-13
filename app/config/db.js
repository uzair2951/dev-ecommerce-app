import mongoose from "mongoose";

const connectDB= async() => {
const dbUrl= process.env.mongo_url;

    try{
        const conn= await mongoose.connect(dbUrl);
        console.log(`Connected to === Mongodb Database ${conn.connection.host}`);
       }catch(error){
        console.log("dbUrl",dbUrl);
        console.log( `Error in Mongodb ${error}`);
    }
};
export default connectDB;

    