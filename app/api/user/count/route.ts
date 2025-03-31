import ConnectDB from "@/lib/db";
import { User } from "@/models/user.model";
import { ApiResponse, asynchandler } from "@/utils/api-hadler";
import { NextRequest, NextResponse } from "next/server";

ConnectDB();

export const GET=asynchandler({
    fn:async()=>{
        const userCount=await User.countDocuments();
        return NextResponse.json(new ApiResponse({
            statusCode:200,
            data:userCount,
            message:"count fetched"
        }));
    }
})