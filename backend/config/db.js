import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB Connection : ${conn.connection.host}`.cyan.bold);
  } catch (e) {
    console.error(`Error : ${e.message}`.red);
    process.exit(1);
  }
};

export default connectDB;
