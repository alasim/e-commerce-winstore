"use client"

import { Button } from "@/components/ui/button"
import type { CarouselApi } from "@/components/ui/carousel"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import * as React from "react"
// You cannot inspect quality into the product; it is already there. I am not a product of my circumstances. I am a product of my decisions.
const heroSlides = [
  {
    id: 1,
    title: "Shop Computer",
    subtitle: "& experience",
    description:
      "You cannot inspect quality into the product; it is already there. I am not a product of my circumstances. I am a product of my decisions.",
    discount: "40%",
    image: "/images/banner.png",
  },
  {
    id: 2,
    title: "Latest Electronics",
    subtitle: "& gadgets",
    description: "Discover the newest technology and innovative products that will transform your daily life.",
    discount: "30%",
    image: "/images/banner.png",
  },
  {
    id: 3,
    title: "Premium Audio",
    subtitle: "& accessories",
    description: "Experience crystal clear sound with our premium audio collection.",
    discount: "25%",
    image: "/images/banner.png",
  },
]

export function HeroCarousel() {
  const plugin = React.useRef(Autoplay({ delay: 10000, stopOnInteraction: false }))
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])


  return (
    <section className="relative">
      <div className="">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current as any]}
          className="w-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {heroSlides.map((slide) => (
              <CarouselItem key={slide.id}>
                <div className={cn(`flex items-center h-[320px] relative`)} >
                  {/* Background Image */}
                  <Image src={slide.image} alt={slide.title} fill className="object-cover object-right absolute inset-0" />
                  {/* Content */}
                  <div className="container max-w-7xl mx-auto relative">
                    <div className="">
                      <h1 className="text-6xl text-balance leading-tight">
                        Shop <span className="text-[#00bcd4]">Computer</span>
                      </h1>
                      <h2 className="text-5xl text-[#00bcd4] text-balance">& experience</h2>
                    </div>
                    <p className="text-gray-700 max-w-sm text-sm leading-relaxed pb-4">{slide.description}</p>
                    <Button size="lg" className="bg-[#00bcd4] hover:bg-[#00acc1] text-white font-semibold px-8">
                      View More
                    </Button>

                    {/* Discount */}
                    {slide.discount && <div className="absolute top-4 right-8 flex h-40 w-40 items-center justify-center rounded-full bg-linear-to-r from-[#FDC830] to-[#F37335] text-white">
                      <div className="text-center text-5xl space-y-1">
                        <div className="">{slide.discount}</div>
                        <div className="">Off</div>
                      </div>
                    </div>}
                  </div>

                  {/* Image */}
                  {/* <div className="flex-1 relative">
                    <div className="relative flex items-center justify-center">
                      <img
                        src={slide.image || "/placeholder.svg?height=400&width=600"}
                        alt={slide.title}
                        className="w-full max-w-[600px] h-auto object-contain"
                      />
                      <div className="absolute top-4 right-8 flex h-36 w-36 items-center justify-center rounded-full bg-[#ff9800] text-white shadow-2xl">
                        <div className="text-center">
                          <div className="text-5xl font-bold">{slide.discount}</div>
                          <div className="text-2xl font-semibold">Off</div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="flex justify-center gap-2 mt-6 absolute bottom-4 left-1/2 transform -translate-x-1/2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${index === current ? "w-8 bg-[#034E53]" : "w-8 bg-[#AA9393]"
                }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
