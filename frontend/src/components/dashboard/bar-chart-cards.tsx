"use client"

import { TrendingUp, Target } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

// Monthly Data for Leads
const monthlyLeads = [
  { month: "January", leads: 12 }, { month: "February", leads: 18 },
  { month: "March", leads: 25 },   { month: "April", leads: 14 },
  { month: "May", leads: 9 },      { month: "June", leads: 22 },
  { month: "July", leads: 15 },    { month: "August", leads: 20 },
  { month: "September", leads: 19 },{ month: "October", leads: 24 },
  { month: "November", leads: 11 }, { month: "December", leads: 21 },
  { month: "January", leads: 16 },
]

// Quarterly Data for Design Wins (Jan 2025 - Dec 2025)
const quarterlyWins = [
  { quarter: "Q1", wins: 4 },
  { quarter: "Q2", wins: 7 },
  { quarter: "Q3", wins: 5 },
  { quarter: "Q4", wins: 11 },
]

const chartConfig = {
  leads: {
    label: "Leads",
    color: "hsl(var(--chart-1))",
  },
  wins: {
    label: "Design Wins",
    color: "hsl(var(--chart-2))", // Success Green
  },
} satisfies ChartConfig

export function BarChartCards() {
  return (
    <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2">
      
      {/* 1. LEADS ENTERED (MONTHLY) */}
      <Card className="bg-gradient-to-t from-primary/5 to-card shadow-sm">
        <CardHeader>
          <CardTitle>Leads Entered</CardTitle>
          <CardDescription>Jan 2025 - Jan 2026</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="max-h-[180px] w-full">
            <BarChart accessibilityLayer data={monthlyLeads} margin={{ top: 20 }}>
              <CartesianGrid vertical={false} strokeOpacity={0.1} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey="leads" fill="var(--color-leads)" radius={6}>
                <LabelList position="top" offset={10} className="fill-foreground" fontSize={10} />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            Volume tracking +12.5% <TrendingUp className="h-4 w-4 text-green-500" />
          </div>
        </CardFooter>
      </Card>

      {/* 2. DESIGN WINS (QUARTERLY) */}
      <Card className="bg-gradient-to-t from-primary/5 to-card shadow-sm">
        <CardHeader>
          <CardTitle>Design Wins</CardTitle>
          <CardDescription>Quarterly Performance 2025</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="max-h-[180px] w-full">
            <BarChart accessibilityLayer data={quarterlyWins} margin={{ top: 25 }}>
              <CartesianGrid vertical={false} strokeOpacity={0.1} />
              <XAxis
                dataKey="quarter"
                tickLine={false}
                axisLine={false}
                fontSize={12}
                className="font-bold"
              />
              <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
              <Bar dataKey="wins" fill="var(--color-wins)" radius={8} barSize={60}>
                <LabelList 
                  position="top" 
                  offset={12} 
                  className="fill-foreground font-bold" 
                  fontSize={14} 
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="flex gap-2 font-medium leading-none text-green-600">
            Strong Q4 Finish <Target className="h-4 w-4" />
          </div>
          <p className="text-muted-foreground">Successfully converted from prototype to production</p>
        </CardFooter>
      </Card>

    </div>
  )
}