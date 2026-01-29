import { getAccessToken } from "@/lib/actions/auth";
import { NextResponse } from "next/server";

const DJANGO_ANALYTICS_URL = "http://127.0.0.1:8000/api/hello";
//need to build out options to fetch relevant dashboar "home" page data
//most recently selected modules, latest customer, quote pulling, etc

export async function GET(request: Request) {
    const authToken = await getAccessToken()
    if (!authToken) {
        return NextResponse.json({}, {status: 401})
    }

    const options = { 
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization" : `Bearer ${authToken}`
        }
    }

    const response = await fetch (DJANGO_ANALYTICS_URL, options)
    console.log(response)
    //get data from django API, can unpack
    const result = await response.json()
    let status = 200
    if (!response.ok) {
        status = 401
    }


    return NextResponse.json({...result}, {status: status})
}