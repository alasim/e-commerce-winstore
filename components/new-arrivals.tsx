"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Product {
  id: number
  brand: string
  name: string
  image: string
  originalPrice: number
  price: number
}

import { Skeleton } from "@/components/ui/skeleton"

export function NewArrivals() {
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products/new-arrivals')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Failed to fetch new arrivals:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (isLoading) {
    return (
      <section className="py-12">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl whitespace-nowrap">
              <span className="text-primary">New</span> Arrivals
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="overflow-hidden border">
                <div className="p-6 space-y-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-14 w-full" />
                  <div className="aspect-square bg-white rounded flex items-center justify-center">
                    <Skeleton className="w-full h-full" />
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    <Skeleton className="h-4 w-16" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                  <Skeleton className="w-full h-11" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (products.length === 0) {
    return null
  }

  return (
    <section className="py-12">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl whitespace-nowrap">
            <span className="text-primary">New</span> Arrivals
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow border group">
              <Link href={`/product/${product.id}`} className="block h-full">
                <div className="p-6 space-y-4 h-full flex flex-col">
                  {/* Brand name */}
                  <p className="text-sm text-gray-900">{product.brand || "Brand"}</p>

                  {/* Product name */}
                  <h3 className="text-lg font-normal text-[#034E53] line-clamp-2 min-h-14 group-hover:text-cyan-400 transition-colors">{product.name}</h3>

                  {/* Product image */}
                  <div className="aspect-square rounded flex items-center justify-center">
                    <img
                      src={product.image || "/placeholder.svg?height=200&width=200"}
                      alt={product.name}
                      className="w-full h-full object-contain p-4 transition-transform group-hover:scale-105"
                    />
                  </div>

                  {/* Pricing */}
                  <div className="flex items-center gap-3 pt-2 mt-auto">
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        RS {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-xl font-normal text-primary">RS {product.price.toLocaleString()}</span>
                  </div>

                  {/* Add to cart button */}
                  <Button className="w-full h-11 rounded-none mt-4">
                    Add to cart
                  </Button>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
