import { ProductRuleTable } from "@/components/dashboard/product-rule-table";

// src/app/dashboard/products/page.tsx
export default function ProductsPage() {
  return (
    <div>
      
<div className="mt-4">
      <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder Cards for now */}
        <div className="p-6 border rounded-xl hover:shadow-lg transition-all cursor-pointer">
          <h3 className="font-bold">SMARC</h3>
          <p className="text-sm text-muted-foreground">SMARC (SM2S) Modules</p>
        </div>
        <div className="p-6 border rounded-xl hover:shadow-lg transition-all cursor-pointer">
          <h3 className="font-bold">Qseven</h3>
          <p className="text-sm text-muted-foreground">QSeven Modules</p>
        </div>
                <div className="p-6 border rounded-xl hover:shadow-lg transition-all cursor-pointer">
          <h3 className="font-bold">OSM</h3>
          <p className="text-sm text-muted-foreground">OSM91, OSM93, OSM95</p>
        </div>
                <div className="p-6 border rounded-xl hover:shadow-lg transition-all cursor-pointer">
          <h3 className="font-bold">COM-Expres</h3>
          <p className="text-sm text-muted-foreground">COM-Express - C6, C10</p>
        </div>
                <div className="p-6 border rounded-xl hover:shadow-lg transition-all cursor-pointer">
          <h3 className="font-bold">COM-HPC</h3>
          <p className="text-sm text-muted-foreground">COM-HPC</p>
        </div>
      </div>
      </div>
    </div>
  )
}