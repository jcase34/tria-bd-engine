"use client"

import React from "react"
import { useRouter } from "next/navigation";

const LOGIN_URL = "/api/auth/login"

export default function Page() {

    const router = useRouter()

    async function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget; 

    const formData = new FormData(form);
    const objectFromForm = Object.fromEntries(formData)
    const jsonData = JSON.stringify(objectFromForm)

    const reqOptions = {
        method: "POST",
        headers:  {
            "Content-Type" : "application/json"
        },
        body: jsonData
    }

    const response = await fetch (LOGIN_URL, reqOptions)
    const data = await response.json()
    console.log(data)
    if(response.ok) {
        console.log("logged in")
        console.log(data)
        router.replace('/')
    }
}
    return <div className="h-[95vh]">
        <div className="max-w-md mx-auto py-5">
            <h1> login here </h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="email" placeholder="Your email" />
                    <input type="password" name="password" placeholder="Your password" />
                    <button type="submit">Login</button>
                </form>
            </div>
    </div>
}