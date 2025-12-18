"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const categories = ["KITCHEN APPLIANCES", "CONSOLES", "TV & VIDEOS", "CELL PHONES", "GROCERY"]

const dealProducts = {
  "KITCHEN APPLIANCES": [
    {
      id: 1,
      name: "Nintendo Switch Console",
      image: "/images/products/product-4.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-linear-to-r from-[#00C9FF] to-[#92FE9D]",
    },
    {
      id: 2,
      name: "Nintendo Switch Console",
      image: "/images/products/product-10.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-linear-to-r from-[#FF512F] to-[#DD2476]",
      featured: true,
    },
    {
      id: 3,
      name: "Nintendo Switch Console 3",
      image: "/images/products/product-8.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-linear-to-r from-[#CC95C0] via-[#DBD4B4] to-[#7AA1D2]",
    },
    {
      id: 4,
      name: "Nintendo Switch Console 4",
      image: "/images/products/product-1.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-linear-to-r from-[#EE9CA7] to-[#FFDDE1]",
    },
    {
      id: 5,
      name: "Nintendo Switch Console 5",
      image: "/images/products/product-5.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-linear-to-r from-[#F09819] to-[#EDDE5D]",
    },
  ],
  CONSOLES: [
    {
      id: 1,
      name: "Nintendo Switch Console",
      image: "/images/products/product-4.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#00bcd4]",
    },
    {
      id: 2,
      name: "Nintendo Switch Console",
      image: "/images/products/product-10.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#ef5350]",
      featured: true,
    },
    {
      id: 3,
      name: "Nintendo Switch Console",
      image: "/images/products/product-8.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#e1bee7]",
    },
    {
      id: 4,
      name: "Nintendo Switch Console",
      image: "/images/products/product-1.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#ffcdd2]",
    },
    {
      id: 5,
      name: "Nintendo Switch Console",
      image: "/images/products/product-5.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#ffd54f]",
    },
  ],
  "TV & VIDEOS": [
    {
      id: 1,
      name: "Nintendo Switch Console",
      image: "/images/products/product-4.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#00bcd4]",
    },
    {
      id: 2,
      name: "Nintendo Switch Console",
      image: "/images/products/product-10.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#ef5350]",
      featured: true,
    },
    {
      id: 3,
      name: "Nintendo Switch Console",
      image: "/images/products/product-8.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#e1bee7]",
    },
    {
      id: 4,
      name: "Nintendo Switch Console",
      image: "/images/products/product-1.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#ffcdd2]",
    },
    {
      id: 5,
      name: "Nintendo Switch Console",
      image: "/images/products/product-5.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#ffd54f]",
    },
  ],
  "CELL PHONES": [
    {
      id: 1,
      name: "Nintendo Switch Console",
      image: "/images/products/product-4.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#00bcd4]",
    },
    {
      id: 2,
      name: "Nintendo Switch Console",
      image: "/images/products/product-10.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#ef5350]",
      featured: true,
    },
    {
      id: 3,
      name: "Nintendo Switch Console",
      image: "/images/products/product-8.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#e1bee7]",
    },
    {
      id: 4,
      name: "Nintendo Switch Console",
      image: "/images/products/product-1.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#ffcdd2]",
    },
    {
      id: 5,
      name: "Nintendo Switch Console",
      image: "/images/products/product-5.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#ffd54f]",
    },
  ],
  GROCERY: [
    {
      id: 1,
      name: "Nintendo Switch Console",
      image: "/images/products/product-4.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#00bcd4]",
    },
    {
      id: 2,
      name: "Nintendo Switch Console",
      image: "/images/products/product-10.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#ef5350]",
      featured: true,
    },
    {
      id: 3,
      name: "Nintendo Switch Console",
      image: "/images/products/product-8.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#e1bee7]",
    },
    {
      id: 4,
      name: "Nintendo Switch Console",
      image: "/images/products/product-1.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#ffcdd2]",
    },
    {
      id: 5,
      name: "Nintendo Switch Console",
      image: "/images/products/product-5.jpg",
      price: 65208,
      originalPrice: 66000,
      discount: 10,
      sold: 6,
      available: 30,
      badgeColor: "bg-[#ffd54f]",
    },
  ],
}

export function BestDeals() {
  const [activeCategory, setActiveCategory] = useState("KITCHEN APPLIANCES")

  const products = dealProducts[activeCategory as keyof typeof dealProducts] || dealProducts["KITCHEN APPLIANCES"]

  return (
    <section className="py-16 bg-white">
      <div className="container max-w-7xl mx-auto">
        <div className="mb-8 flex items-center justify-between gap-8">
          <h2 className="text-3xl whitespace-nowrap">
            <span className="text-[#00bcd4]">Best</span> Deals
          </h2>

          <div className="flex items-center gap-8 justify-between">
            {/* Categories */}
            <div className="flex items-center gap-6 flex-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-sm font-medium pb-2 border-b-2 transition-colors whitespace-nowrap ${activeCategory === category
                    ? "text-[#00bcd4] border-[#00bcd4]"
                    : "text-gray-600 border-transparent hover:text-[#00bcd4]"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 gap-6 h-[590px]">
          {/* Item 1: Column 1, Row 1 */}
          <div
            className="relative grid grid-cols-2 p-4 grid-rows-2 h-full border overflow-hidden hover:shadow-lg transition-shadow bg-white"
            style={{ gridColumn: "1", gridRow: "1" }}
          >
            <div className="flex flex-col">
              <div className="mb-2">
                <h3 className="text-base font-normal ">{products[0].name}</h3>
              </div>

              <div className="mb-4">
                <div className="text-2xl font-normal text-primary">Rs.{products[0].price.toLocaleString()}</div>
                <div className="text-sm line-through">Rs.{products[0].originalPrice.toLocaleString()}</div>
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
                  src={products[0].image || "/placeholder.svg"}
                  alt={products[0].name}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className={`inline-block ${products[0].badgeColor} text-black text-center text-2xl px-6 py-3 mb-4 w-[130px]`}>
                <span className="block">Save</span>
                <span className="block">{products[0].discount}%</span>
              </div>
            </div>


          </div>

          {/* Item 2: Column 2, Row 1-2 (spans both rows) */}
          <div
            className="relative border overflow-hidden flex flex-col hover:shadow-lg transition-shadow bg-white p-4"
            style={{ gridColumn: "2", gridRow: "1 / 3" }}
          >
            <div className="relative flex-1">
              <div className="absolute top-0 -right-4 z-10">
                <div className="flex justify-center">
                  <div className={cn("h-36 w-36 text-4xl text-center text-white rounded-full flex items-center justify-center", products[1].badgeColor)}>
                    <span>Save <br />{products[1].discount}%</span>
                  </div>
                </div>
              </div>
              <div className="mb-4 absolute top-0 left-0 z-10">
                <h3 className="text-4xl font-normal mb-2">
                  <span className="text-destructive">Special</span> <br /> Offer
                </h3>

              </div>

              <div className="relative w-full h-full scale-110">
                <Image
                  src={products[1].image || "/placeholder.svg"}
                  alt={products[1].name}
                  width={190}
                  height={120}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>


            <div className="flex flex-col h-fit">
              <div>
                <h4 className="text-base  mb-2">{products[1].name}</h4>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-normal text-destructive">Rs.{products[1].price.toLocaleString()}</span>
                  <span className="text-sm line-through">
                    Rs.{products[1].originalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-destructive">Already Sold: {products[1].sold}</span>
                  <span className="text-primary">Available: {products[1].available}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Item 3: Column 3, Row 1 */}
          <div
            className="relative grid grid-cols-2 p-4 grid-rows-2 h-full border overflow-hidden hover:shadow-lg transition-shadow bg-white"
            style={{ gridColumn: "3", gridRow: "1" }}
          >
            <div className="flex flex-col">
              <div className="mb-2">
                <h3 className="text-base font-normal ">{products[2].name}</h3>
              </div>

              <div className="mb-4">
                <div className="text-2xl font-normal text-primary">Rs.{products[2].price.toLocaleString()}</div>
                <div className="text-sm line-through">Rs.{products[2].originalPrice.toLocaleString()}</div>
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
                  src={products[2].image || "/placeholder.svg"}
                  alt={products[2].name}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>
            </div>


            <div className="flex items-center">
              <div className={`${products[2].badgeColor} text-black text-center text-4xl flex items-center justify-center h-full w-full`}>
                <span>Save <br />20%</span>
              </div>
            </div>


          </div>

          {/* Item 4: Column 1, Row 2 */}
          <div
            className="relative grid grid-cols-2 grid-rows-2 border overflow-hidden hover:shadow-lg transition-shadow bg-white p-4"
            style={{ gridColumn: "1", gridRow: "2" }}
          >
            <div className="row-span-2">
              <div className="">
                <h3 className="text-4xl font-normal mb-2">
                  <span className="text-destructive">Special</span> <br /> Offer
                </h3>
                <h4 className="text-sm ">{products[3].name}</h4>
              </div>

              <div className="mb-4">
                <div className="text-2xl font-normal text-destructive">Rs.{products[3].price.toLocaleString()}</div>
                <div className="text-sm line-through">Rs.{products[3].originalPrice.toLocaleString()}</div>
              </div>

              <div className="text-sm text-destructive mb-2">Already Sold: {products[3].sold}</div>
              <div className="text-sm text-primary mb-4">Available: {products[3].available}</div>
            </div>

            <div className="flex justify-center">
              <div className={cn("w-[90px] text-center h-[90px] rounded-full text-2xl flex items-center justify-center", products[3].badgeColor)}>
                <span>Save <br />20%</span>
              </div>
            </div>

            <div className="">
              <Image
                src={products[3].image || "/placeholder.svg"}
                alt={products[3].name}
                width={190}
                height={170}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Item 5: Column 3, Row 2 */}
          <div
            className="relative border overflow-hidden flex flex-col hover:shadow-lg transition-shadow bg-white p-4"
            style={{ gridColumn: "3", gridRow: "2" }}
          >
            <div className="relative flex-1">
              <div className="absolute top-0 -right-4 z-10">
                <div className="flex justify-center">
                  <div className={cn("h-36 w-36 text-4xl text-center rounded-full flex items-center justify-center", products[4].badgeColor)}>
                    <span>Save <br />{products[4].discount}%</span>
                  </div>
                </div>
              </div>
              <div className="mb-4 absolute top-0 left-0 z-10">
                <h3 className="text-4xl font-normal mb-2">
                  <span className="text-destructive">Special</span> <br /> Offer
                </h3>

              </div>

              <div className="relative w-full h-[150px]">
                <img
                  src={products[4].image || "/placeholder.svg"}
                  alt={products[4].name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>


            <div className="flex flex-col h-fit">
              <div>
                <h4 className="text-base mb-2">{products[4].name}</h4>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-normal text-[#B8A023]">Rs.{products[1].price.toLocaleString()}</span>
                  <span className="text-sm line-through">
                    Rs.{products[1].originalPrice.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-destructive">Already Sold: {products[1].sold}</span>
                  <span className="text-destructive">Available: {products[1].available}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
