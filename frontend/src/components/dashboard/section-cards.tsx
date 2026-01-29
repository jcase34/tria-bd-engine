"use client"

import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {/* Revenue Card */}
      <Card className="@container/card bg-gradient-to-t from-primary/5 to-card shadow-sm relative">
        <CardHeader>
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            $1,250,000
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="gap-1 bg-background/50">
              <IconTrendingUp className="size-3" /> +12.5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <IconTrendingUp className="size-4 text-green-500" />
          </div>
          <div className="text-muted-foreground">3 New Opportunities Created</div>
        </CardFooter>
      </Card>

      {/* New Leads Card (Using your Jan 26 target) */}
      <Card className="@container/card bg-gradient-to-t from-primary/5 to-card shadow-sm relative">
        <CardHeader>
          <CardDescription>New Leads (Jan '26)</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            16
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="gap-1 bg-background/50">
              <IconTrendingDown className="size-3" /> -20%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down this period <IconTrendingDown className="size-4 text-red-500" />
          </div>
          <div className="text-muted-foreground">Check Tech Doc Access Requests</div>
        </CardFooter>
      </Card>

      {/* Active Accounts */}
      <Card className="@container/card bg-gradient-to-t from-primary/5 to-card shadow-sm relative">
        <CardHeader>
          <CardDescription>LPDDR Cost Increase</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            + $25.4
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="gap-1 bg-background/50">
              <IconTrendingUp className="size-3" /> +12.5%
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium text-green-600">
            Increase from Dec 2025 <IconTrendingUp className="size-4" />
          </div>
        </CardFooter>
      </Card>

      {/* Growth Rate */}
      <Card className="@container/card bg-gradient-to-t from-primary/5 to-card shadow-sm relative">
        <CardHeader>
          <CardDescription>Recent Quote Request</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            IMX-LF-OSM95
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="gap-1 bg-background/50">
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">Johnson Controls</div>
        </CardFooter>
      </Card>
    </div>
  )
}