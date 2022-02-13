import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(`Db connected`);
  } catch (error) {
    console.log(`db conn error is ${error}`);
    process.exit(1);
  }
};
