"use client"

import { useRouter } from "next/navigation";
import React from "react"
const LOGOUT_URL = "/api/auth/logout"

export default function Page() {
    const router = useRouter()

    async function handleClick () {
    const reqOptions = {method: "POST"}

    const response = await fetch (LOGOUT_URL, reqOptions)
    if(response.ok) {
        console.log("logged out")
        router.replace("/login")

    }

}
    return <div className="h-[95vh]">
        <div className="max-w-md mx-auto py-5">
            <h1> Logout here </h1>  
                    <button className='bg-red-500 text-white hover:bg-red-300 px-3 py-22' onClick={handleClick}>Logout</button>
            </div>
    </div>
}