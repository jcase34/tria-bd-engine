"use client"

import useSWR from "swr"
import { columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

// Fetcher that includes the JWT token
const fetcher = async (url: string) => {
  const token = localStorage.getItem("access_token")
  
  const res = await fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  })

  if (!res.ok) {
    if (res.status === 401) throw new Error("Unauthorized - Please log in")
    throw new Error("An error occurred while fetching data")
  }

  return res.json()
}

export default function SmarcPage() {
  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:8000/api/products/smarc", 
    fetcher
  )

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">SMARC Product Rules</h2>
          <p className="text-muted-foreground">
            Manage VPE, MOQ, and technical specifications for SMARC modules.
          </p>
        </div>
      </div>

      <div className="hidden h-full flex-1 flex-col space-y-8 md:flex">
        {error ? (
          <div className="rounded-md bg-destructive/15 p-4 text-destructive">
            {error.message}
            console.log(error.message)
          </div>
        ) : isLoading ? (
          <div className="flex items-center justify-center h-24">
            <span className="italic animate-pulse">Connecting to Neon database...</span>
          </div>
        ) : (
          <DataTable columns={columns} data={data || []} />
        )}
      </div>
    </div>
  )
}