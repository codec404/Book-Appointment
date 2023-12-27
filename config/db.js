import mongoose from "mongoose";

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`MongoDb connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log("Error in connecting to database!!");
  }
};

export default connectDb;
