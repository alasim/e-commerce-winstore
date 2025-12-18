"use client"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Product {
  id: number
  name: string
  image: string
  price: number
  originalPrice: number | null
  discount: number | null
  sold: number | null
  available: number | null
  badgeColor: string | null
  featured: boolean | null
  category: string
}

interface Category {
  id: number
  name: string
}

export function BestDeals() {
  const [categories, setCategories] = useState<Category[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [activeCategory, setActiveCategory] = useState<string>("")
  const [categoryStartIndex, setCategoryStartIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(4)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setVisibleCount(3)
      } else {
        setVisibleCount(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    async function fetchData() {
      try {
        const [catRes, prodRes] = await Promise.all([
          fetch('/api/products/categories'),
          fetch('/api/products')
        ])

        const catData = await catRes.json()
        const prodData: Product[] = await prodRes.json()

        // Sort categories by product count (descending)
        const sortedCategories = [...catData].sort((a, b) => {
          const countA = prodData.filter(p => p.category === a.name).length
          const countB = prodData.filter(p => p.category === b.name).length
          return countB - countA
        })

        setCategories(sortedCategories)
        setProducts(prodData)
        if (sortedCategories.length > 0) {
          setActiveCategory(sortedCategories[0].name)
        }
      } catch (error) {
        console.error("Failed to fetch data", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const visibleCategories = categories.slice(categoryStartIndex, categoryStartIndex + visibleCount)

  const handleNextCategories = () => {
    if (categoryStartIndex + visibleCount < categories.length) {
      setCategoryStartIndex(prev => prev + 1)
    }
  }

  const handlePrevCategories = () => {
    if (categoryStartIndex > 0) {
      setCategoryStartIndex(prev => prev - 1)
    }
  }

  const filteredProducts = products.filter(p => p.category === activeCategory).slice(0, 5)

  if (isLoading) {
    return (
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-8 flex items-center justify-between gap-8">
            <Skeleton className="h-10 w-48" />
            <div className="flex items-center gap-8 justify-between flex-1">
              <div className="flex items-center gap-6 flex-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-8 w-24" />
                ))}
              </div>
              <div className="flex gap-2">
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[590px]">
            <Skeleton className="col-span-1 row-span-1" />
            <Skeleton className="col-span-1 row-span-2" />
            <Skeleton className="col-span-1 row-span-1" />
            <Skeleton className="col-span-1 row-span-1" />
            <Skeleton className="col-span-1 row-span-1" />
          </div>
        </div>
      </section>
    )
  }

  if (filteredProducts.length === 0) {
    return (
      <section className="py-16 bg-white">
        <div className="container max-w-7xl mx-auto">
          <div className="mb-8 flex items-center justify-between gap-8">
            <h2 className="text-3xl whitespace-nowrap">
              <span className="text-primary">Best</span> Deals
            </h2>
            <div className="flex items-center gap-8 justify-between">
              <div className="flex items-center gap-6 flex-1">
                {visibleCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.name)}
                    className={`text-sm font-medium pb-2 border-b-2 transition-colors whitespace-nowrap ${activeCategory === category.name
                      ? "text-primary border-primary"
                      : "text-gray-600 border-transparent hover:text-primary"
                      }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handlePrevCategories} disabled={categoryStartIndex === 0}>
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleNextCategories} disabled={categoryStartIndex + 4 >= categories.length}>
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[590px] flex items-center justify-center border">
            <p className="text-gray-500">No products found for this category.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-8 lg:py-16 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 lg:gap-8">
          <h2 className="text-3xl whitespace-nowrap">
            <span className="text-cyan-400">Best</span> Deals
          </h2>

          <div className="flex items-center gap-4 lg:gap-8 justify-between w-full lg:w-auto">
            {/* Categories */}
            <div className="flex items-center gap-6 flex-1 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {visibleCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.name)}
                  className={`text-sm font-medium pb-2 border-b-2 transition-colors whitespace-nowrap ${activeCategory === category.name
                    ? "text-cyan-400 border-cyan-400"
                    : "text-gray-600 border-transparent hover:text-cyan-400"
                    }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-2 shrink-0">
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handlePrevCategories} disabled={categoryStartIndex === 0}>
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleNextCategories} disabled={categoryStartIndex + 4 >= categories.length}>
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 h-auto lg:h-[590px]">
          {/* Item 1: Column 1, Row 1 */}
          {filteredProducts[0] && (
            <Link
              href={`/product/${filteredProducts[0].id}`}
              className="relative grid grid-cols-2 p-4 grid-rows-2 h-[280px] lg:h-full border overflow-hidden hover:shadow-lg transition-shadow bg-white lg:col-start-1 lg:row-start-1"
            >
              <div className="flex flex-col">
                <div className="mb-2">
                  <h3 className="text-base font-normal ">{filteredProducts[0].name}</h3>
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-normal text-primary">Rs.{filteredProducts[0].price.toLocaleString()}</div>
                  {filteredProducts[0].originalPrice && (
                    <div className="text-sm line-through">Rs.{filteredProducts[0].originalPrice.toLocaleString()}</div>
                  )}
                </div>

              </div>
              <div className="row-span-2 flex flex-col">
                <div className="flex justify-center">
                  <div className={`inline-block text-4xl`}>
                    <span className="block text-primary">Special</span>
                    <span className="block">Offer</span>
                  </div>
                </div>
                <div className="flex relative flex-1 justify-center">
                  <Image
                    src={filteredProducts[0].image || "/placeholder.svg"}
                    alt={filteredProducts[0].name}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex items-center">
                {filteredProducts[0].discount && (
                  <div className={`inline-block ${filteredProducts[0].badgeColor || "bg-gray-200"} text-black text-center text-2xl px-6 py-3 mb-4 w-[130px]`}>
                    <span className="block">Save</span>
                    <span className="block">{filteredProducts[0].discount}%</span>
                  </div>
                )}
              </div>
            </Link>
          )}

          {/* Item 2: Column 2, Row 1-2 (spans both rows) */}
          {filteredProducts[1] && (
            <Link
              href={`/product/${filteredProducts[1].id}`}
              className="relative border overflow-hidden flex flex-col hover:shadow-lg transition-shadow bg-white p-4 h-[400px] lg:h-full lg:col-start-2 lg:row-start-1 lg:row-span-2"
            >
              <div className="relative flex-1">
                <div className="absolute top-0 -right-4 z-10">
                  <div className="flex justify-center">
                    {filteredProducts[1].discount && (
                      <div className={cn("h-24 w-24 lg:h-36 lg:w-36 text-xl lg:text-4xl text-center text-white rounded-full flex items-center justify-center", filteredProducts[1].badgeColor || "bg-gray-400")}>
                        <span>Save <br />{filteredProducts[1].discount}%</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-4 absolute top-0 left-0 z-10">
                  <h3 className="text-4xl font-normal mb-2">
                    <span className="text-destructive">Special</span> <br /> Offer
                  </h3>

                </div>

                <div className="relative w-full lg:h-full h-[250px] scale-100 lg:scale-110">
                  <Image
                    src={filteredProducts[1].image || "/placeholder.svg"}
                    alt={filteredProducts[1].name}
                    width={190}
                    height={120}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>


              <div className="flex flex-col h-fit">
                <div>
                  <h4 className="text-base  mb-2">{filteredProducts[1].name}</h4>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-normal text-destructive">Rs.{filteredProducts[1].price.toLocaleString()}</span>
                    {filteredProducts[1].originalPrice && (
                      <span className="text-sm line-through">
                        Rs.{filteredProducts[1].originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <span className="text-destructive">Already Sold: {filteredProducts[1].sold || 0}</span>
                    <span className="text-primary">Available: {filteredProducts[1].available || 0}</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Item 3: Column 3, Row 1 */}
          {filteredProducts[2] && (
            <Link
              href={`/product/${filteredProducts[2].id}`}
              className="relative grid grid-cols-2 p-4 grid-rows-2 h-[280px] lg:h-full border overflow-hidden hover:shadow-lg transition-shadow bg-white lg:col-start-3 lg:row-start-1"
            >
              <div className="flex flex-col">
                <div className="mb-2">
                  <h3 className="text-base font-normal ">{filteredProducts[2].name}</h3>
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-normal text-primary">Rs.{filteredProducts[2].price.toLocaleString()}</div>
                  {filteredProducts[2].originalPrice && (
                    <div className="text-sm line-through">Rs.{filteredProducts[2].originalPrice.toLocaleString()}</div>
                  )}
                </div>

              </div>
              <div className="row-span-2 flex flex-col">
                <div className="flex justify-center">
                  <div className={`inline-block text-4xl`}>
                    <span className="block text-[#034E53]">Special</span>
                    <span className="block">Offer</span>
                  </div>
                </div>
                <div className="flex relative flex-1 justify-center">
                  <Image
                    src={filteredProducts[2].image || "/placeholder.svg"}
                    alt={filteredProducts[2].name}
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
              </div>


              <div className="flex items-center">
                {filteredProducts[2].discount && (
                  <div className={`${filteredProducts[2].badgeColor || "bg-gray-200"} text-black text-center text-4xl flex items-center justify-center h-full w-full`}>
                    <span>Save <br />{filteredProducts[2].discount}%</span>
                  </div>
                )}
              </div>
            </Link>
          )}

          {/* Item 4: Column 1, Row 2 */}
          {filteredProducts[3] && (
            <Link
              href={`/product/${filteredProducts[3].id}`}
              className="relative grid grid-cols-2 grid-rows-2 border overflow-hidden hover:shadow-lg transition-shadow bg-white p-4 h-[280px] lg:h-full lg:col-start-1 lg:row-start-2"
            >
              <div className="row-span-2">
                <div className="">
                  <h3 className="text-4xl font-normal mb-2">
                    <span className="text-destructive">Special</span> <br /> Offer
                  </h3>
                  <h4 className="text-sm ">{filteredProducts[3].name}</h4>
                </div>

                <div className="mb-4">
                  <div className="text-2xl font-normal text-destructive">Rs.{filteredProducts[3].price.toLocaleString()}</div>
                  {filteredProducts[3].originalPrice && (
                    <div className="text-sm line-through">Rs.{filteredProducts[3].originalPrice.toLocaleString()}</div>
                  )}
                </div>

                <div className="text-sm text-destructive mb-2">Already Sold: {filteredProducts[3].sold || 0}</div>
                <div className="text-sm text-primary mb-4">Available: {filteredProducts[3].available || 0}</div>
              </div>

              <div className="flex justify-center">
                {filteredProducts[3].discount && (
                  <div className={cn("w-[90px] text-center h-[90px] rounded-full text-2xl flex items-center justify-center", filteredProducts[3].badgeColor || "bg-gray-200")}>
                    <span>Save <br />{filteredProducts[3].discount}%</span>
                  </div>
                )}
              </div>

              <div className="">
                <Image
                  src={filteredProducts[3].image || "/placeholder.svg"}
                  alt={filteredProducts[3].name}
                  width={190}
                  height={170}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          )}

          {/* Item 5: Column 3, Row 2 */}
          {filteredProducts[4] && (
            <Link
              href={`/product/${filteredProducts[4].id}`}
              className="relative border overflow-hidden flex flex-col hover:shadow-lg transition-shadow bg-white p-4 h-[280px] lg:h-full lg:col-start-3 lg:row-start-2"
            >
              <div className="relative flex-1">
                <div className="absolute top-0 -right-4 z-10">
                  <div className="flex justify-center">
                    {filteredProducts[4].discount && (
                      <div className={cn("h-36 w-36 text-4xl text-center rounded-full flex items-center justify-center", filteredProducts[4].badgeColor || "bg-gray-200")}>
                        <span>Save <br />{filteredProducts[4].discount}%</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="mb-4 absolute top-0 left-0 z-10">
                  <h3 className="text-4xl font-normal mb-2">
                    <span className="text-destructive">Special</span> <br /> Offer
                  </h3>

                </div>

                <div className="relative w-full h-[150px]">
                  <img
                    src={filteredProducts[4].image || "/placeholder.svg"}
                    alt={filteredProducts[4].name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>


              <div className="flex flex-col h-fit">
                <div>
                  <h4 className="text-base mb-2">{filteredProducts[4].name}</h4>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-2xl font-normal text-[#B8A023]">Rs.{filteredProducts[4].price.toLocaleString()}</span>
                    {filteredProducts[4].originalPrice && (
                      <span className="text-sm line-through">
                        Rs.{filteredProducts[4].originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-6 text-sm">
                    <span className="text-destructive">Already Sold: {filteredProducts[4].sold || 0}</span>
                    <span className="text-destructive">Available: {filteredProducts[4].available || 0}</span>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
