"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Pencil, Save, X, Check } from "lucide-react"

interface ProductRule {
  id: string
  name: string
  vpe: string
  moq: number
}

const initialProducts: ProductRule[] = [
  { id: "1", name: "COM-HPC Client/Server", vpe: "40 Units", moq: 80 },
  { id: "2", name: "SMARC 2.1 Module", vpe: "25 Units", moq: 50 },
  { id: "3", name: "Qseven R2.1", vpe: "10 Units", moq: 20 },
]

export function ProductRuleTable() {
  const [products, setProducts] = useState<ProductRule[]>(initialProducts)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editBuffer, setEditBuffer] = useState<ProductRule | null>(null)

  const handleEditClick = (product: ProductRule) => {
    setEditingId(product.id)
    setEditBuffer({ ...product })
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditBuffer(null)
  }

  const handleSave = () => {
    if (editBuffer) {
      setProducts(products.map(p => p.id === editBuffer.id ? editBuffer : p))
      setEditingId(null)
      // Note: This is where you'd call your Django/Spring API to persist the change
    }
  }

  return (
    <div className="rounded-md border bg-card overflow-hidden">
      <Table>
        <TableHeader className="bg-muted/50">
          <TableRow>
            <TableHead className="font-bold py-4">Product Standard</TableHead>
            <TableHead className="font-bold">Packing (VPE/PU)</TableHead>
            <TableHead className="font-bold">Min. Order (MOQ)</TableHead>
            <TableHead className="text-right pr-6">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            const isEditing = editingId === product.id

            return (
              <TableRow key={product.id} className={`transition-colors ${isEditing ? "bg-primary/5" : "hover:bg-muted/30"}`}>
                {/* 1. Name: Always Static */}
                <TableCell className="font-semibold py-4">
                  {product.name}
                </TableCell>

                {/* 2. VPE: Editable */}
                <TableCell>
                  {isEditing ? (
                    <Input 
                      value={editBuffer?.vpe} 
                      className="h-8 w-32"
                      onChange={(e) => setEditBuffer(prev => prev ? {...prev, vpe: e.target.value} : null)}
                    />
                  ) : (
                    <span className="text-muted-foreground italic">{product.vpe}</span>
                  )}
                </TableCell>

                {/* 3. MOQ: Editable */}
                <TableCell>
                  {isEditing ? (
                    <Input 
                      type="number"
                      value={editBuffer?.moq} 
                      className="h-8 w-24 font-mono"
                      onChange={(e) => setEditBuffer(prev => prev ? {...prev, moq: parseInt(e.target.value) || 0} : null)}
                    />
                  ) : (
                    <span className="font-mono font-bold text-primary">{product.moq}</span>
                  )}
                </TableCell>

                {/* 4. Actions: Edit Toggle */}
                <TableCell className="text-right pr-6">
                  {isEditing ? (
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="outline" className="h-8 gap-1 text-green-600 border-green-200 hover:bg-green-50" onClick={handleSave}>
                        <Check className="size-3" /> Save
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 text-muted-foreground" onClick={handleCancel}>
                        <X className="size-3" />
                      </Button>
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" className="h-8 gap-2" onClick={() => handleEditClick(product)}>
                      <Pencil className="size-3" /> Edit
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}