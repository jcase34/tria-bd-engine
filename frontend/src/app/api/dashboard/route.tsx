import { getAccessToken } from "@/lib/actions/auth";
import { NextResponse } from "next/server";

const DJANGO_API_DASHBOARD = ""
//need to build out options to fetch relevant dashboar "home" page data
//most recently selected modules, latest customer, quote pulling, etc

export async function GET(request: Request) {
    const authToken = getAccessToken()
    if (!authToken) {
        return NextResponse.json({}, {status: 401})
    }


    return NextResponse.json({"dashboard": "hello"}, {status: 200})
}