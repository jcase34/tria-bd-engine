"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Product = {
  id: number
  category: string
  part_name: string
  part_number: string
  description: string
  memory_gb: number
  storage_gb: number
  design_cost: string
  resale_cost: string
  eccn_code: string
  hs_code: string
}

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "part_number",
    header: "Part Number",
  },
  {
    accessorKey: "part_name",
    header: "Name",
  },
  {
    accessorKey: "memory_gb",
    header: "Memory",
    cell: ({ row }) => `${row.getValue("memory_gb")} GB`,
  },
  {
    accessorKey: "storage_gb",
    header: "Storage",
    cell: ({ row }) => `${row.getValue("storage_gb")} GB`,
  },
  {
    accessorKey: "design_cost",
    header: "Design Cost ($)",
    cell: ({ row }) => `$${parseFloat(row.getValue("design_cost")).toFixed(2)}`,
  },
  {
    accessorKey: "resale_cost",
    header: "Resale Price ($)",
    cell: ({ row }) => `$${parseFloat(row.getValue("resale_cost")).toFixed(2)}`,
  },
  {
    accessorKey: "eccn_code",
    header: "ECCN",
  },
  {
    accessorKey: "hs_code",
    header: "HS Code",
  },
]