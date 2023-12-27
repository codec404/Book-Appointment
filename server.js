import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import userRoute from "./routes/userRoute.js"

//CONFIGURE ENV
dotenv.config();

//REST object
const app = express();

//CONNECT DATABASE
connectDb();

//middlewares

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//Route
app.use('/api/v1/user',userRoute)

const port = process.env.PORT || 8080;

//LISTEN
app.listen(port, () => {
  console.log(`Server Running in ${process.env.NODE_MODE} on ${port}`);
});
