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
      <div className="container py-12 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-8 lg:gap-4">
          {/* Logo and Contact */}
          <div className="space-y-6 md:col-span-2 lg:col-span-3">
            <div className="flex items-center justify-start">
              <Image src="/logo.svg" alt="Logo" width={132} height={48} />
            </div>

            <div className="space-y-4 text-sm">
              <div className="space-y-1">
                <p className="text-cyan-400 font-medium">Got questions? Call us 24/7!</p>
                <div className="space-y-1">
                  <p className="text-xl font-semibold text-white">03 111 666 144</p>
                  <p className="text-xl font-semibold text-white">0317 1771015</p>
                </div>
              </div>

              <div className="space-y-1">
                <p className="text-cyan-400 font-medium">Contact Info</p>
                <p className="text-white/80">info@winstore.pk</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link href="https://www.facebook.com/" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/facebook.svg" className="h-5 w-5" alt="Facebook" width={20} height={20} />
              </Link>
              <Link href="https://www.x.com/" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/x.svg" className="h-5 w-5" alt="Twitter" width={20} height={20} />
              </Link>
              <Link href="https://www.linkedin.com/" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/linkedin.svg" className="h-5 w-5" alt="Linkedin" width={20} height={20} />
              </Link>
              <Link href="https://www.instagram.com/" className="hover:opacity-80 transition-opacity">
                <Image src="/icons/instagram.svg" className="h-5 w-5" alt="Instagram" width={20} height={20} />
              </Link>
            </div>
          </div>

          {/* Trending */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-cyan-400 font-semibold border-b border-white/10 pb-2 md:border-0 md:pb-0">Trending</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {categories.slice(0, 6).map((category) => (
                <li key={category.id}>
                  <Button variant="link" className="h-auto p-0 text-white/80 hover:text-cyan-400 text-left" asChild>
                    <Link href={`/category/${encodeURIComponent(category.name)}`}>
                      {category.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-cyan-400 font-semibold border-b border-white/10 pb-2 md:border-0 md:pb-0">Information</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80 hover:text-cyan-400">
                  About Us
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80 hover:text-cyan-400">
                  Contact Us
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80 hover:text-cyan-400">
                  FAQs
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80 hover:text-cyan-400">
                  Shipping & Return
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80 hover:text-cyan-400">
                  Privacy policy
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80 hover:text-cyan-400">
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-cyan-400 font-semibold border-b border-white/10 pb-2 md:border-0 md:pb-0">Customer Care</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80 hover:text-cyan-400">
                  My Account
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80 hover:text-cyan-400">
                  Track Your Order
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80 hover:text-cyan-400">
                  Recently Viewed
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80 hover:text-cyan-400">
                  Wishlist
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80 hover:text-cyan-400">
                  Compare
                </Button>
              </li>
              <li>
                <Button variant="link" className="h-auto p-0 text-white/80 hover:text-cyan-400">
                  Become a Vendor
                </Button>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          {/* Payment Methods */}
          <div className="col-span-full md:col-span-1 lg:col-start-6 lg:col-span-4 mt-4 lg:mt-0">
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { src: "/images/visa.png", alt: "Visa" },
                { src: "/images/master-card.png", alt: "Mastercard" },
                { src: "/images/cash.png", alt: "Cash" },
                { src: "/images/easy-plan.png", alt: "Payment" }
              ].map((payment, idx) => (
                <div key={idx} className="relative aspect-3/2 bg-white rounded-md overflow-hidden p-1 shadow-sm">
                  <Image
                    src={payment.src}
                    fill
                    alt={payment.alt}
                    className="object-contain p-2"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#161616]">
        <div className="container py-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <p>© {new Date().getFullYear()} Winstore. All Rights Reserved.</p>

          </div>
        </div>
      </div>
    </footer>
  )
}
