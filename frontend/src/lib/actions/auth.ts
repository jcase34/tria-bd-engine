"use server" // This tells Next.js: "Run this on the server, not the browser"

import { cookies } from "next/headers"

export async function loginAction(formData: FormData) {
  const email = formData.get("email")
  const password = formData.get("password")

  // 1. The same fetch you just tested!
  const response = await fetch("http://127.0.0.1:8000/api/token/pair", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })

  const data = await response.json()

  if (response.ok) {
    // 2. This is the new part: SAVING the key
    const cookieStore = await cookies()
    
    // We save the Access token
    cookieStore.set("access", data.access, {
      httpOnly: true, // Secure! JavaScript can't read this
      secure: process.env.NODE_ENV === "production",
      path: "/", 
    })

    return { success: true }
  }

  return { success: false, error: data.detail }
}