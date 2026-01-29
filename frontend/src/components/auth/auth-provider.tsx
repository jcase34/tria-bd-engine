"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

// 1. Updated Interface: The blueprint must match what you provide below!
interface AuthContextType {
  isAuthenticated: boolean;
  userEmail: string | null;
  login: (email: string) => void;  // Tells TS: "login is a function that returns nothing"
  logout: () => void; // Tells TS: "logout is a function that returns nothing"
  loginRequiredRedirect: () => void; // <--- Add this line!
}

// 2. Create the context
const AuthContext = createContext<AuthContextType | null>(null);

const LOGIN_REDIRECT_URL = "/dashboard"
const LOGOUT_REDIRECT_URL = "/login"
const LOGIN_REQUIRED_URL = "/login"
const LOCAL_STORAGE_KEY = "is-logged-in"
const LOCAL_EMAIL_KEY = "tria-user-email"

//need to consider redirects and user impact if filling out a form and kicking user out
export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState<string | null>(null); // New State

    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(()=> {
        const storedAuthStatus = localStorage.getItem(LOCAL_STORAGE_KEY)
        const storedEmail = localStorage.getItem(LOCAL_EMAIL_KEY);
        if(storedAuthStatus === "1") {
            const storedAuthStatusInt = parseInt(storedAuthStatus)
            setIsAuthenticated(storedAuthStatusInt===1)
            setUserEmail(storedEmail);
        }
    }, [])
  
    const login = (email: string) => {
        setIsAuthenticated(true);
        localStorage.setItem(LOCAL_STORAGE_KEY, "1")
        localStorage.setItem(LOCAL_EMAIL_KEY, email)
        console.log(searchParams)
        const nextUrl = searchParams.get("next")
        const invalidNextUrl = ['/login', '/logout']
        const nextUrlValid = nextUrl && nextUrl.startsWith("/") && !invalidNextUrl.includes(nextUrl)
        if (nextUrlValid) {
            router.replace(nextUrl)
            return
        } else {
            router.replace(LOGIN_REDIRECT_URL)
            return
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.setItem(LOCAL_STORAGE_KEY, "0")
        router.replace(LOGOUT_REDIRECT_URL)
    };

    const loginRequiredRedirect = () => {
        //user not logged in via api
        setIsAuthenticated(false);
        localStorage.setItem(LOCAL_STORAGE_KEY, "0")
        let loginWithNextURL = `${LOGIN_REQUIRED_URL}?next=${pathname}`
        if (LOGIN_REQUIRED_URL === pathname) {
            loginWithNextURL = `${LOGIN_REQUIRED_URL}`
        }
        router.replace(loginWithNextURL)
    };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userEmail, login, logout, loginRequiredRedirect}}>
      {children}
    </AuthContext.Provider>
  );
}

// 4. The Custom Hook
export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  
  return context;
}