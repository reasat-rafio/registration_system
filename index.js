import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import registrationRoutes from "./routes/registrationRoutes.js";

const app = express();

// middlewares
app.use(cors());

// setting the routes
app.use("/", registrationRoutes);

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server started at port: " + PORT));

connectDB().then(() =>
  app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`.bgBlue.bold);
  })
);
