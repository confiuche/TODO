import express from "express"
import { addTaskController, displayAllTask } from "../comtroller/taskController.js"

const taskRoutes = express.Router()


//displayTask
taskRoutes.get("",displayAllTask)
//addTask
taskRoutes.post("/addTask",addTaskController)
//deleteTask
taskRoutes.delete("/:id")


export default taskRoutes;