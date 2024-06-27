//@ts-check
import jwt from "jsonwebtoken";
export const sendCookie = (user, res, message, statusCode=200) =>{

    
   const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);
   
   
   res
      .status(statusCode)
      .cookie("token", token ,{
      httpOnly: true,
      maxAge: 15*60*1000,
      sameSite: process.env.NODE_ENV === "develpoment"?"lax": "nono",
      secure : process.env.NODE_ENV === "develpoment" ?false :true,
   })
        .json({
          success: true,
          message:"account created"
      });
};