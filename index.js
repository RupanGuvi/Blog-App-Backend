import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConfig from "./Database/dbConfig.js";
import authRoute from "./Routes/authRoute.js";
import postRoute from "./Routes/postRoute.js";
dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());


dbConfig();

app.get("/",(req,res)=>{
  res.send("Welcome to backend");
})


app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});