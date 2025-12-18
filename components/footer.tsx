"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Category {
  id: number
  name: string
}

export function Footer() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    async function fetchCategories() {
      try {
        const response = await fetch('/api/products/categories')
        const data = await response.json()
        setCategories(data)
      } catch (error) {
        console.error('Failed to fetch categories:', error)
      }
    }
    fetchCategories()
  }, [])

  return (
    <footer className="bg-[#393939] text-white mt-12">
      <div className="container py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-9 gap-4">
          {/* Logo and Contact */}
          <div className="space-y-4 col-span-3">

            <div className="flex items-center">
              <Image src="/logo.svg" alt="Logo" width={132} height={48} />
            </div>

            <div className="space-y-2 text-sm">
              <p className="text-[#00bcd4]">Got questions? Call us 24/7!</p>
              <div>
                <p className="text-lg  text-white">03 111 666 144</p>
                <p className="text-lg  text-white">0317 1771015</p>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-[#00bcd4]">Contact Info</p>
              <p className="text-white/80">info@winstore.pk</p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="https://www.facebook.com/">
                <Image src="/icons/facebook.svg" className="h-4 w-4" alt="Facebook" width={20} height={20} />
              </Link>
              <Link href="https://www.x.com/">
                <Image src="/icons/x.svg" className="h-4 w-4" alt="Twitter" width={20} height={20} />
              </Link>
              <Link href="https://www.linkedin.com/">
                <Image src="/icons/linkedin.svg" className="h-4 w-4" alt="Linkedin" width={20} height={20} />
              </Link>
              <Link href="https://www.instagram.com/">
                <Image src="/icons/instagram.svg" className="h-4 w-4" alt="Instagram" width={20} height={20} />
              </Link>
            </div>
          </div>

          {/* Trending */}
          <div className="space-y-4 col-span-2">
            <h3 className="text-[#00bcd4]">Trending</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Button variant="link" className="h-auto p-0 text-white/80" asChild>
                    <Link href={`/category/${encodeURIComponent(category.name)}`}>
                      {category.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4 col-span-2">
            <h3 className="text-[#00bcd4]">Information</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80">
                  About Us
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80">
                  Contact Us
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80">
                  FAQs
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80">
                  Shipping & Return
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80">
                  Privacy policy
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4 col-span-2">
            <h3 className="text-[#00bcd4]">Customer Care</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80">
                  My Account
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80">
                  Track Your Order
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80">
                  Recently Viewed
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80">
                  Wishlist
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80">
                  Compare
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80">
                  Become a Vendor
                </Button>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="gap-2 grid grid-cols-4 h-[60px] max-h-[60px] col-start-6 col-end-9">
            <div className="relative w-full h-full bg-white rounded">
              <Image src="/images/visa.png" layout="fill" alt="Visa" className="w-full  h-full p-2 object-contain" />
            </div>
            <div className="relative w-full h-full bg-white rounded">
              <Image src="/images/master-card.png" layout="fill" alt="Mastercard" className="w-full h-full p-2 object-contain" />
            </div>
            <div className="relative w-full h-full bg-white rounded">
              <Image src="/images/cash.png" layout="fill" alt="Cash" className="w-full h-full p-2 object-contain" />
            </div>
            <div className="relative bg-white rounded">
              <Image src="/images/easy-plan.png" layout="fill" alt="Payment" className="w-full h-full p-2 object-contain" />
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#263749]">
        <div className="container py-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <p>© {new Date().getFullYear()} Winstore. All Rights Reserved.</p>

          </div>
        </div>
      </div>
    </footer>
  )
}
