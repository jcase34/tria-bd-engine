import { ProductRuleTable } from "@/components/dashboard/product-rule-table";

// src/app/dashboard/products/page.tsx
export default function ProductsPage() {
  return (
    <div>
      <div className="p-6 bg-card rounded-xl border shadow-sm">
  <h2 className="text-3xl font-bold mb-8 border-b pb-4">BDM Guidelines & Product Intel</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
    
    {/* COLUMN 1: PRICING & LOGISTICS */}
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          Currency & Conversion
        </h3>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          All prices are in <span className="font-semibold text-foreground">USD</span> and have been 
          calculated based on an EUR/US$ conversion rate of <span className="font-mono bg-muted px-1 rounded">1.16</span>. 
          Please verify rates weekly before submitting formal quotes.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          Lead Time
        </h3>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Current leadtime with customer forecast is 30weeks. Without customer provided forecast, estimated lead time is minimum 40weeks.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          Quotations
        </h3>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          The following currency clause applies for all quotations: <b>All prices are in USD 
          and are quoted based on a conversion rate of USD 1.16 = 1 EUR. Tria Technologies reserve 
          the right to adjust the prices (provided the goods or services should not be delivered 
          or performed within a period of 4 months after contract closure), if there are cost 
          increases after contract closure, in particular if significant costs increases are caused 
          by exchange rate related material cost OR increases of material cost due to shortages and allocation."</b>
        </p>
      </div>
      <div>
        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
          Warranty
        </h3>
        <p className="mt-2 text-muted-foreground leading-relaxed">
          Tria Technologies warrants that at the time of delivery, products will 
          conform to the specifications stated in its published data sheet for the 
          Products. All warranty claims shall be time-barred twenty-four (24) months 
          from the time of delivery of the non-conforming Products.
        </p>
      </div>

    </div>

    {/* COLUMN 2: BDM RULES & COMPLIANCE */}
    <div className="space-y-6 md:border-l md:pl-12 border-border">
      <div>
        <h3 className="text-xl font-bold text-primary">Minimum Order Quantities & Standard Packaging Units</h3>
        <p className="mt-2 text-muted-foreground leading-relaxed mb-4 ">
          Minimum order quantities (MOQ) and standard packaging units (VPE/PU) are defined for the different COM products
          and apply for any mass production order. <b>Sample orders during project ramp-up phase are excluded.</b>
        </p>
<div className="rounded-xl border border-border overflow-hidden bg-card">
  {/* HEADER: Shaded with Bottom Border */}
  <div className="grid grid-cols-3 gap-4 px-4 py-3 bg-muted/80 border-b border-border shadow-sm">
    <div className="text-xs font-bold uppercase tracking-widest text-foreground">
      Product Name
    </div>
    <div className="text-xs font-bold uppercase tracking-widest text-foreground">
      Packing (VPE/PU)
    </div>
    <div className="text-xs font-bold uppercase tracking-widest text-foreground">
      Min. Order (MOQ)
    </div>
  </div>

  {/* PRODUCT ROWS: Alternating Shades */}
  <div className="divide-y divide-border">
    <ProductRuleTable />
  </div>

  {/* FOOTER: Important Rules */}
  {/* <div className="p-4 bg-muted/10 border-t border-border">
    <div className="flex items-center gap-2 text-xs font-medium text-amber-600">
      <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
      Note: Standard lead time is 8-12 weeks for all above standards.
    </div>
  </div> */}
</div>
      </div>

      <div>
        <h4 className="font-semibold">Preferred Variants and Sampling</h4>
        <p className="mt-2 text-muted-foreground leading-relaxed mb-4 ">
          COM products are divided into two categories <b>PV (Preferred Variant)</b> and <b>OR (On-Request)</b>.
          For the <b>PV</b> products we always try to keep a small amount on stock for sampling. These products should be used
          to provide samples to customers that start new projects. They are not intended to be shipped to small 
          customers. <b>OR</b> Products usually have no stock and orders should not go below the minimum order quantity 
          listed above.
          </p>
      </div>
      <div>
        <h4 className="font-semibold">Custom Variants</h4>
        <p className="mt-2 text-muted-foreground leading-relaxed mb-4 ">
         If a Tria Etechnologies product has to be customized for some reason 
         (e.g. different feature set, custom BIOS preinstallation, assembly with cooling and/or memory, etc.)
         a "Requirements sheet for a customized COM variant" has to be filled out. 
         The responsible product marketing manager has to qualify the new variant and quote the price to sales.
         A customized variant usually requires an initial MOQ of 500 to 1000 units, an expected annual volume in the same range and a price adder for separate handling and administration has to be considered.
          </p>
      </div>
    </div>

  </div>
</div >

    </div>
  )
}