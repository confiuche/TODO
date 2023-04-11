import express from "express"
import { addTaskController } from "../comtroller/taskController.js"

const taskRoutes = express.Router()


//displayTask
taskRoutes.get("")
//addTask
taskRoutes.post("/addTask",addTaskController)
//deleteTask
taskRoutes.delete("")


export default taskRoutes;