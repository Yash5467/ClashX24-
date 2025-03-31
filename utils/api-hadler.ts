import { ApiErrorType, ApiResponseType, AsynchandlerType } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";


export class ApiResponse{
    data
    statusCode
    message
    constructor({statusCode,data,message}:ApiResponseType){
       this.data=data;
       this.statusCode=statusCode
       this.message=message
    }
}

export class ApiError extends Error{
       statusCode
       error
   constructor({statusCode,error,message}:ApiErrorType){
      super(message);
      this.statusCode=statusCode
      this.message=message
      this.error=error
   }
}


export const asynchandler=({fn}:AsynchandlerType)=>{
   return async (req:NextRequest)=>{
      try {
       return await fn(req)
      } catch (error) {
        console.error(`Error Occured :Urgent`,{error})
        return NextResponse.json(new ApiError({statusCode:500,error:"Internal Server Error",message:"Internal Server Error"}),{
         status:500
        });
      }
   }
}