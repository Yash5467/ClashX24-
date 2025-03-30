import mongoose from "mongoose";

interface IUser{
    name:string,
    phone_number:string,
}


type IUserModel=mongoose.Model<IUser> & {};

const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone_number:{
        type:String,
        required:true
    }
});


export const User= mongoose.models.User || mongoose.model<IUser,IUserModel>("User",schema);