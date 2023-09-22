import mongoose from"mongoose";

const connectDB = async () => {
  try {
    const mongoURI = "mongodb://localhost:27017/blogTest";
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB connected to ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
