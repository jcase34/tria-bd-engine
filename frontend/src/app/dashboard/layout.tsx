// src/app/dashboard/layout.tsx
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h1 className="font-bold text-lg">Tria BD Engine</h1>
        </header>
        {/* 'children' is where the page.tsx content will swap in and out */}
        <main className="p-4">
          {children} 
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}