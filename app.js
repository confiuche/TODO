import express from "express"
import dotenv from "dotenv"
import taskRoutes from "./routes/taskRoutes.js"

dotenv.config();

const app = express();


app.use(express.json());

const PORT = process.env.PORT || 8080;


app.use("/api/v1/users",taskRoutes);


app.listen(PORT, console.log(`App started at ${PORT}`))