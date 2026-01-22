"use client"

import { LogOut } from "lucide-react" // Shadcn uses Lucide icons by default
import { useRouter } from "next/navigation"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const LOGOUT_URL = "/api/auth/logout"

export function LogoutButton() {
  const router = useRouter()
  
      async function handleClick () {
      const requestOptions = {method: "POST"}
  
      const response = await fetch (LOGOUT_URL, requestOptions)
      if(response.ok) {
          console.log("logged out")
          router.replace("/login")
  
      }
    }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton 
          onClick={handleClick}
          className="text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/50"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}