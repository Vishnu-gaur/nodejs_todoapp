//@ts-check

import mongoose from "mongoose";


export const connectdb =()=> {mongoose
.connect(process.env.MONGO_URI,{
    dbName: "backendapi",
})
 .then(()=> console.log("Database connected"))
  .catch((e)=> console.log(e));
};