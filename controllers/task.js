//@ts-check
import ErrorHandler from "../middlewares/error.js";
import { task} from "../models/task.js";

export const newTask = async(req, res, next)=> {

try {
  const {title, description} = req.body;


await task.create    ({

    title,
     description,
    user : req.user,
});
console.log("working1");
  res.status(201).json({

    success: true,
    message: "Task added successfully",
  });

}catch(error){
     
  next(error);
}
};
export const getMyTask =async (req, res, next) =>{
 
  try {
    const userid = req.user._id;

    const tasks = await task.find({user: userid});
  
    res.status(200).json({
       success: true,
       tasks,
    });
  } catch (error) {
    next(error);
  }

};
export const updateTask =async (req, res, next) =>{

  try {
    
  const Task = await task.findById(req.params.id);

  if(!Task)  return  next (new ErrorHandler("Task not found",404));
 
  
  
   task.isCompleted =  !task.isCompleted;
   await Task.save();
   
   res.status(200).json({
     success: true,
     message : "Task Updated!",
  });
  } catch (error) {
    next(error);
  }
  
};
export const deleteTask =async (req, res, next) =>{
  try {
    const Task = await task.findById(req.params.id);
  

  if(!Task)  return  next (new ErrorHandler("Task not found",404));
  await Task.deleteOne();


    res.status(200).json({
     success: true,
     message : "Task Deleted!",
  });
  } catch (error) {
    next(error);
  }
};