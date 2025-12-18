"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Image from "next/image"
import Link from "next/link"
import React from "react"


import { Skeleton } from "@/components/ui/skeleton"

export function CategoryCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [categories, setCategories] = React.useState<{ id: number; name: string; image: string }[]>([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('/api/products/categories')
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCategories()
  }, [])

  const scrollPrev = React.useCallback(() => {
    if (api) api.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    if (api) api.scrollNext()
  }, [api])

  if (isLoading) {
    return (
      <section className="py-4 bg-linear-to-b from-[#F3EDC9] via-white to-white ">
        <div className="container max-w-7xl mx-auto">
          <div className="flex gap-4 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex-none w-full md:w-1/2 lg:w-1/4 pl-4">
                <div className="relative h-52">
                  <Skeleton className="w-full h-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (categories.length === 0) {
    return null
  }

  return (
    <section className="py-4 bg-linear-to-b from-[#F3EDC9] via-white to-white ">
      <div className="container max-w-7xl mx-auto px-16 xl:px-0">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          setApi={setApi}
        >

          <CarouselContent className="-ml-4">
            {categories.map((category) => (
              <CarouselItem key={category.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                <Card className="p-0 bg-transparent border-none shadow-none rounded-none cursor-pointer">
                  <Link href={`/category/${encodeURIComponent(category.name)}`} className="block">
                    <div className="relative h-52 pl-4">
                      <div className="w-full h-full border-2 border-white">
                        <img
                          src={category.image || "/placeholder.svg?height=256&width=400"}
                          alt={category.name}
                          className="w-full h-full object-cover relative"
                        />

                      </div>
                      <div className="absolute bottom-4 left-0 shadow-[-1px_1px_7px_0px_rgba(0,0,0,0.57)] w-[calc(100%-16px)]">
                        <div className="relative bg-linear-to-r from-white to-white/95 pl-6 py-3 shadow-md">
                          <div className="flex pr-4 items-center gap-3 justify-between">
                            <h3 className="text-xl text-gray-900">{category.name}</h3>
                            <Button
                              size="sm"
                              variant="link"
                              className="text-xl text-[#14B1F0] p-0 h-auto"
                              asChild
                            >
                              <span>Shop</span>
                            </Button>
                          </div>
                          {/* Fold effect triangle at top */}
                          <div
                            className="absolute -top-3 left-0 w-0 h-0 border-l-18 border-l-transparent border-b-12 border-b-[#220F0F]"
                            style={{ filter: "brightness(0.7)" }}
                          />

                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <Button onClick={scrollPrev} variant={'ghost'} className="absolute w-16 h-16 -left-16 top-1/2 -translate-y-1/2 hover:bg-transparent">
            <Image src="/icons/chevron-left.svg" className="size-10" layout="fill" alt="Previous" />
          </Button>
          <Button onClick={scrollNext} variant={'ghost'} className="absolute w-16 h-16 -right-16 top-1/2 -translate-y-1/2 hover:bg-transparent">
            <Image src="/icons/chevron-left.svg" className="size-10 rotate-180" layout="fill" alt="Next" />
          </Button>
        </Carousel>
      </div>
    </section>
  )
}
