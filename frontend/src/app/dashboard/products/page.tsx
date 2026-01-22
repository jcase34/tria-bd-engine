// src/app/dashboard/products/page.tsx
export default function ProductsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder Cards for now */}
        <div className="p-6 border rounded-xl hover:shadow-lg transition-all cursor-pointer">
          <h3 className="font-bold">SMARC</h3>
          <p className="text-sm text-muted-foreground">Smart Mobility ARChitecture</p>
        </div>
        <div className="p-6 border rounded-xl hover:shadow-lg transition-all cursor-pointer">
          <h3 className="font-bold">Qseven</h3>
          <p className="text-sm text-muted-foreground">Legacy COM Modules</p>
        </div>
      </div>
    </div>
  )
}