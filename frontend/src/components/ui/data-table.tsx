"use client"

import * as React from "react"
import { Download } from "lucide-react"
import Papa from "papaparse"
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

 const handleExport = () => {
  const exportData = data.map((item: any) => ({
    // 1. Identification & Context (Leading Columns)
    "Part Name": item.part_name,
    "Part Number": item.part_number,
    "Description": item.description,
    
    // 2. Technical Specs
    "Memory (GB)": item.memory_gb,
    "Storage (GB)": item.storage_gb,
    
    // 3. Commercials & Compliance
    "Resale Price": `$${parseFloat(item.resale_cost).toFixed(2)}`,
    "HS Code": item.hs_code,
    "ECCN": item.eccn_code,
  }))

  const csv = Papa.unparse(exportData)
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  
  const link = document.createElement("a")
  link.setAttribute("href", url)
  link.setAttribute("download", `Tria_Product_List_${new Date().toISOString().split('T')[0]}.csv`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
  return (
    <div className="w-full space-y-4">
      {/* Header Actions */}
      <div className="flex items-center justify-between py-2">
        <h3 className="text-sm font-medium text-muted-foreground">
          {data.length} Products Found
        </h3>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={handleExport}
          className="flex items-center gap-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700"
        >
          <Download className="h-4 w-4" />
          Export CSV
        </Button>
      </div>

      {/* The Table */}
      <div className="rounded-md border bg-white shadow-sm">
        <Table>
          <TableHeader className="bg-slate-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="font-bold text-slate-700">
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-3">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No data available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}