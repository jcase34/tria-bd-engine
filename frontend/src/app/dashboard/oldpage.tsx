"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { useAuth } from "@/components/auth/auth-provider"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Anybody } from "next/font/google"
import { useEffect } from "react"
import { json } from "stream/consumers"
import useSWR from "swr"

const fetcher = async (url: string) => {
  const res = await fetch(url)

  if (!res.ok) {
    // We create a custom error type to hold the status code
    const error = new Error('An error occurred while fetching the data.') as any
    
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  return res.json()
}

const DASHBOARD_ANALYTICS_API_URL = "/api/dashboard/"

export default function Page() {
  
  const {data, error, isLoading} = useSWR(DASHBOARD_ANALYTICS_API_URL, fetcher)
  const auth = useAuth()
  console.log(error?.status)

  //Use Effect - Runs to render changes on components. 
  //in the lines below we run use effect to run operations based on error status
  useEffect(()=> {
    if(error?.status === 401) {
      auth.loginRequiredRedirect()
    }
  },[error, auth])

  if (error) return <div>Failed Load</div>
  if (isLoading) return <div>Loading</div>

  return (
<div>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <h1>dashboard / analytics</h1>
          <div>
            test
          </div>
          <div>
            {JSON.stringify(data)}
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
        </div>
  )
}
