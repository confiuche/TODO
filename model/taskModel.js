import mongoose,{ Schema } from "mongoose";

const todoTaskSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    status:{
        type:String,
    },
    date:{
        type:Date,
        default:Date.now
    },
},
{
    timestamps:true,
    toJSON:{virtuals:true}
}
);
const addTask = mongoose.model("Post",todoTaskSchema);

export default addTask;