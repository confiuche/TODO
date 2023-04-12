import express from "express"
import dotenv from "dotenv"
import taskRoutes from "./routes/taskRoutes.js"
import { database } from "./config/dBconnect.js"

dotenv.config();
database();

const app = express();


app.use(express.json());

const PORT = process.env.PORT || 8080;


app.use("/api/v1/todo",taskRoutes);


app.listen(PORT, console.log(`App started at ${PORT}`))