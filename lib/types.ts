import { ApiError, ApiResponse } from "@/utils/api-hadler"
import { NextRequest, NextResponse } from "next/server"

export interface AsynchandlerType {
    fn: (req: NextRequest) => Promise<NextResponse<ApiError | ApiResponse | unknown>>
}

export interface ApiResponseType {
    data: {},
    statusCode: number,
    message: string
}

export interface ApiErrorType {
    statusCode: number,
    message: string,
    error: {}
}