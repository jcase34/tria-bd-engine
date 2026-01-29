import * as React from "react"
import { GalleryVerticalEnd } from "lucide-react"
import { SearchForm } from "@/components/search-form"
import { VersionSwitcher } from "@/components/version-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { LogoutButton } from "./logout-button"
import { NavUser } from "./nav-user"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Home",
      url: "#",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
        },
      ]
    },
    {
      title: "Product PriceBook & Modules",
      url: "#",
      items: [
        {
          title: "All Products",
          url: "/dashboard/products",
        },
        {
          title: "SMARC",
          url: "/dashboard/products/smarc",
        },
        {
          title: "QSeven",
          url: "/dashboard/products/qseven",
        },
        {
          title: "OSM",
          url: "/dashboard/products/osm",
        },
        {
          title: "COM-Express",
          url: "/dashboard/products/com-express",
        },
        {
          title: "COM-HPC",
          url: "/dashboard/products/com-hpc",
        },
      ],
    },
     {
      title: "Opportunities",
      url: "#",
      items: [
        {
          title: "Current Opportunities",
          url: "#",
        },
        {
          title: "Leads",
          url: "#",
        },
        
      ],
    },
    {
      title: "Product Management",
      url: "#",
      items: [
        {
          title: "Create New Product",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "Feedback",
          url: "#",
        },
        {
          title: "FAQ",
          url: "#",
        },
        {
          title: "Account",
          url: "#",
        },
        {
          title: "Help",
          url: "#",
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        {/* <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        /> */}
        {/* <SearchForm /> */}
        <div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Tria Business Development</span>
                </div>
                </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
