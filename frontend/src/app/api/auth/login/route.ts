import { NextResponse } from 'next/server'
import { setAccessToken, setRefreshToken } from '@/lib/actions/auth'

const DJANGO_BACKEND_API_LOGIN_URL = "http://127.0.0.1:8000/api/token/pair"

//next server call to ping django backend
export async function POST(request: Request) {
    const requestData = await request.json()
    const jsonData = JSON.stringify(requestData)

    const requestOptions = {
        method: "POST",
        headers:  {
            "Content-Type" : "application/json"
        },
        body: jsonData
    }

    const response = await fetch (DJANGO_BACKEND_API_LOGIN_URL, requestOptions)
    const responseData = await response.json()
    if(response.ok) {
        const {access, refresh} = responseData
        //access & refresh are specific fields for django
        await setAccessToken(access)
        await setRefreshToken(refresh)
        return NextResponse.json({"LoggedIn": true}, {status: 200})
    }

    return NextResponse.json({"LoggedIn": false, ...responseData}, {status: 400})
}