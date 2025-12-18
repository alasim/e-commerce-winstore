import { BestDeals } from "@/components/best-deals"
import { CategoryCarousel } from "@/components/category-carousel"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroCarousel } from "@/components/hero-carousel"
import { NewArrivals } from "@/components/new-arrivals"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroCarousel />
        <CategoryCarousel />
        <Separator className="container max-w-7xl mx-auto my-4" />
        <NewArrivals />
        <BestDeals />
      </main>
      <Footer />
    </div>
  )
}
