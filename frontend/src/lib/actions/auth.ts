"use server"

import { cookies } from "next/headers"


const TOKEN_NAME = 'auth-token'
const REFRESH_TOKEN_NAME = 'auth-refresh-token'
const ACCESS_TOKEN_AGE = 3600 // 1 hour
const REFRESH_TOKEN_AGE = 3600 * 24 * 7 // 7 days 

const getCookieOptions = (maxAge: number) => ({
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: "/", 
  maxAge: maxAge,
})

/**
 * GETTERS
 */
export async function getAccessToken() {
  const cookieStore = await cookies()
  return cookieStore.get(TOKEN_NAME)?.value
}

export async function getRefreshToken() {
  const cookieStore = await cookies()
  return cookieStore.get(REFRESH_TOKEN_NAME)?.value
}

export async function getAccessRefreshTokens() {
  const access = await getAccessToken()
  const refresh = await getRefreshToken()
  return [access, refresh]
}

/**
 * SETTERS
 */
export async function setAccessToken(token: string) {
  const cookieStore = await cookies()
  return cookieStore.set(TOKEN_NAME, token, getCookieOptions(ACCESS_TOKEN_AGE))
}

export async function setRefreshToken(token: string) {
  const cookieStore = await cookies()
  return cookieStore.set(REFRESH_TOKEN_NAME, token, getCookieOptions(REFRESH_TOKEN_AGE))
}

export async function setAccessRefreshTokens(access: string, refresh: string) {
  await setAccessToken(access)
  await setRefreshToken(refresh)
}

/**
 * DELETERS (Logout)
 */
export async function deleteAccessRefreshTokens() {
  const cookieStore = await cookies()
  cookieStore.delete(TOKEN_NAME)
  return cookieStore.delete(REFRESH_TOKEN_NAME)

}