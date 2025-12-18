import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Menu, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

export function Header() {
  return (
    <header className="text-white">
      {/* Top Bar */}
      <div className="bg-[#03484D]">
        <div className="container max-w-7xl mx-auto h-[68px] flex items-center justify-between py-2 text-sm">
          <div className="py-4 container max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-10">

                {/* Logo */}
                <div className="flex items-center">
                  <Image src="/logo.svg" alt="Logo" width={132} height={48} />
                </div>

                {/* Search Bar */}
                <div className="flex flex-1 items-center w-[535px] h-10">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px] h-full! bg-white text-[#ABA3A3] rounded-r-none">
                      <SelectValue placeholder="All categories" className="" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All categories</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="fashion">Fashion</SelectItem>
                      <SelectItem value="appliances">Appliances</SelectItem>
                    </SelectContent>
                  </Select>
                  <div className="relative flex-1 h-full bg-white">
                    <Input placeholder="Search for products" className="border-0 placeholder:text-[#ABA3A3] rounded-none text-gray-800 h-full" />
                  </div>
                  <button className="rounded-l-none rounded-r-md bg-[#B6B6B6] hover:bg-[#B6B6B6] flex items-center justify-center h-full w-10 border-0 p-0">
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="flex gap-10">
                {/* Call Us Now */}
                <div className="flex gap-1 flex-col shrink-0">
                  <span className="text-[9px]">Call Us Now</span>
                  <div className="flex items-center gap-2">
                    <Image src="/icons/headphones.svg" alt="Headphones" width={20} height={20} />
                    <span className="text-[12px]">021-3627918</span>
                  </div>
                </div>

                {/* Sign In */}
                <Button variant="ghost" size="sm" className="gap-2 text-white hover:text-cyan-400 hover:bg-transparent">
                  Sign in
                </Button>

                {/* Cart */}
                <div className="flex items-center gap-6">
                  <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400 hover:bg-transparent">
                    <Image src="/icons/user.svg" alt="User" width={20} height={20} />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:text-cyan-400 hover:bg-transparent">
                    <Image src="/icons/heart.svg" alt="Heart" width={20} height={20} />
                  </Button>
                  <Button
                    variant="ghost"
                    className="relative text-white hover:bg-transparent"
                  >
                    <div className="relative">
                      <Image src="/icons/shopping-cart.svg" alt="Cart" width={20} height={20} />
                      <span className="absolute -top-3 left-[10px] text-[#FDDE3B]">
                        3
                      </span>
                    </div>

                    <span className="">Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      {/* <div className="border-b border-white/10">
        
      </div> */}

      {/* Navigation */}
      <div className="bg-[#163e4d]">
        <div className="container max-w-7xl mx-auto">
          <nav className="flex items-center justify-between py-3">
            <div className="flex items-center gap-6 text-sm">
              {/* <Button variant="ghost" size="sm" className="gap-2 text-white hover:text-cyan-400 hover:bg-white/10">
                <Menu className="h-4 w-4" />
                Browse By Category
              </Button> */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-2 text-white hover:text-cyan-400 hover:bg-white/10">
                    <Menu className="h-4 w-4" />
                    Browse By Category
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[180px] h-full! bg-white text-[#ABA3A3]">
                  <DropdownMenuItem>All categories</DropdownMenuItem>
                  <DropdownMenuItem>Electronics</DropdownMenuItem>
                  <DropdownMenuItem>Fashion</DropdownMenuItem>
                  <DropdownMenuItem>Appliances</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" size="sm" className="text-white hover:text-cyan-400 hover:bg-white/10">
                Home
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-cyan-400 hover:bg-white/10">
                Easy Monthly Installments
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-cyan-400 hover:bg-white/10">
                Shop by Brands
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:text-cyan-400 hover:bg-white/10">
                Become a Vendor
              </Button>
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
          </nav>
        </div>
      </div>
    </header>
  )
}
