import Post from "../model/taskModel.js"

//displayTask
export const displayAllTask = async (req, res) => {
    try {
        const allTask = await Post.find({});
        res.json({
            status: "success",
            data: allTask
        })
    } catch (error) {
        res.json(error.message) 
    }
}

//addTask
export const addTaskController = async (req, res) => {
    const {content,date,status} = req.body;
    try {
        const addTask = await Post.create({
            content,
            status,
            date
        })
        res.json({
            status: "success",
            data: addTask
        })
    } catch (error) {
        res.json(error.message);
    }
}

//deleteTask