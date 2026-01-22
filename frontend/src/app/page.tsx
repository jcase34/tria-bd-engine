import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-6">
      <div className="z-10 w-full max-w-3xl items-center justify-between text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Tria Business Development
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          The central hub for managing leads, opportunities, and analytics.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="px-8">
            <Link href="/login">
              Access Dashboard
            </Link>
          </Button>
          
          <Button variant="outline" size="lg" asChild>
            <Link href="mailto:support@tria-bd.com">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>

      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </main>
  )
}