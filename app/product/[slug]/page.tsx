"use client"

import { ChevronRight, Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { NewArrivals } from "@/components/new-arrivals"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock product data
const product = {
    id: 1,
    name: "Samsung 40N5300 Smart TV",
    price: 56000,
    originalPrice: 60000,
    rating: 4.5,
    reviews: 128,
    sku: "SAM-40N5300",
    brand: "Samsung",
    category: "TV & Video",
    availability: "In Stock",
    description: "Experience entertainment like never before with the Samsung 40N5300 Smart TV. Featuring a crisp 40-inch LED display, this TV delivers vibrant colors and sharp details. With built-in Wi-Fi and smart features, you can stream your favorite shows and movies with ease.",
    images: [
        "/images/products/product-9.png",
        "/images/products/product-1.jpg",
        "/images/products/product-2.png",
        "/images/products/product-3.png",
    ],
    features: [
        "Full HD Resolution (1920 x 1080)",
        "Smart TV with Built-in Wi-Fi",
        "2 HDMI Ports, 1 USB Port",
        "Wide Color Enhancer",
        "Dolby Digital Plus Audio",
    ],
}

export default function ProductPage() {
    const [quantity, setQuantity] = useState(1)
    const [selectedImage, setSelectedImage] = useState(0)

    const incrementQuantity = () => setQuantity((prev) => prev + 1)
    const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="container max-w-7xl mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-[#00bcd4]">Home</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <Link href="/category/electronics" className="hover:text-[#00bcd4]">Electronics</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <span className="text-gray-900 font-medium truncate">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="aspect-square relative border rounded-lg overflow-hidden bg-white flex items-center justify-center">
                            <Image
                                src={product.images[selectedImage] || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-contain p-8"
                                priority
                            />
                            <div className="absolute top-4 left-4">
                                <Badge className="bg-[#ef5350] hover:bg-[#ef5350]">Sale</Badge>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {product.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(index)}
                                    className={`aspect-square relative border rounded-lg overflow-hidden bg-white flex items-center justify-center transition-all ${selectedImage === index ? "ring-2 ring-[#00bcd4] border-transparent" : "hover:border-[#00bcd4]"
                                        }`}
                                >
                                    <Image
                                        src={image || "/placeholder.svg"}
                                        alt={`${product.name} thumbnail ${index + 1}`}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-current" : "text-gray-300"}`}
                                        />
                                    ))}
                                    <span className="text-gray-600 text-sm ml-2">({product.reviews} reviews)</span>
                                </div>
                                <Separator orientation="vertical" className="h-4" />
                                <span className="text-[#00bcd4] text-sm font-medium">{product.availability}</span>
                            </div>
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold text-[#00bcd4]">Rs.{product.price.toLocaleString()}</span>
                                <span className="text-lg text-gray-500 line-through">Rs.{product.originalPrice.toLocaleString()}</span>
                                <Badge variant="outline" className="text-[#ef5350] border-[#ef5350]">
                                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                </Badge>
                            </div>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                            <p className="text-gray-600 leading-relaxed">{product.description}</p>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-center text-sm text-gray-600">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#00bcd4] mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center border rounded-md">
                                    <button
                                        onClick={decrementQuantity}
                                        className="p-3 hover:bg-gray-100 transition-colors"
                                        disabled={quantity <= 1}
                                    >
                                        <Minus className="h-4 w-4" />
                                    </button>
                                    <span className="w-12 text-center font-medium">{quantity}</span>
                                    <button
                                        onClick={incrementQuantity}
                                        className="p-3 hover:bg-gray-100 transition-colors"
                                    >
                                        <Plus className="h-4 w-4" />
                                    </button>
                                </div>
                                <Button className="flex-1 h-12 bg-[#00bcd4] hover:bg-[#00acc1] text-lg">
                                    <ShoppingCart className="mr-2 h-5 w-5" />
                                    Add to Cart
                                </Button>
                                <Button variant="outline" size="icon" className="h-12 w-12">
                                    <Heart className="h-5 w-5" />
                                </Button>
                                <Button variant="outline" size="icon" className="h-12 w-12">
                                    <Share2 className="h-5 w-5" />
                                </Button>
                            </div>
                        </div>

                        <div className="pt-6 text-sm text-gray-500 space-y-2">
                            <div className="flex gap-2">
                                <span className="font-medium text-gray-900">SKU:</span>
                                <span>{product.sku}</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="font-medium text-gray-900">Category:</span>
                                <Link href="#" className="text-[#00bcd4] hover:underline">{product.category}</Link>
                            </div>
                            <div className="flex gap-2">
                                <span className="font-medium text-gray-900">Brand:</span>
                                <Link href="#" className="text-[#00bcd4] hover:underline">{product.brand}</Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Tabs */}
                <div className="mb-16">
                    <Tabs defaultValue="description" className="w-full">
                        <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                            <TabsTrigger
                                value="description"
                                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#00bcd4] data-[state=active]:text-[#00bcd4] px-8 py-3 text-base"
                            >
                                Description
                            </TabsTrigger>
                            <TabsTrigger
                                value="reviews"
                                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#00bcd4] data-[state=active]:text-[#00bcd4] px-8 py-3 text-base"
                            >
                                Reviews ({product.reviews})
                            </TabsTrigger>
                            <TabsTrigger
                                value="shipping"
                                className="rounded-none border-b-2 border-transparent data-[state=active]:border-[#00bcd4] data-[state=active]:text-[#00bcd4] px-8 py-3 text-base"
                            >
                                Shipping & Returns
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="description" className="pt-8">
                            <div className="prose max-w-none text-gray-600">
                                <p>
                                    Elevate your home entertainment with the Samsung 40N5300 Smart TV. This 40-inch Full HD LED TV brings your favorite movies, TV shows, and games to life with stunning clarity and vibrant colors. The Wide Color Enhancer technology improves image quality and uncovers hidden details, while the Clean View feature reduces noise and interference for a crystal-clear viewing experience.
                                </p>
                                <p className="mt-4">
                                    With built-in Wi-Fi and Samsung's Smart Hub, you can easily access a world of content, including streaming services like Netflix, YouTube, and Amazon Prime Video. The intuitive interface makes navigation a breeze, and the included remote control puts everything at your fingertips. Connect your external devices via the two HDMI ports and one USB port to enjoy your personal media collection on the big screen.
                                </p>
                            </div>
                        </TabsContent>
                        <TabsContent value="reviews" className="pt-8">
                            <div className="text-gray-600">
                                <p>Customer reviews will be displayed here.</p>
                            </div>
                        </TabsContent>
                        <TabsContent value="shipping" className="pt-8">
                            <div className="text-gray-600">
                                <p>Shipping and return policies will be displayed here.</p>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
                {/* Related Products */}
                <div className="mb-16">
                    <NewArrivals />
                </div>
            </main>

            <Footer />
        </div>
    )
}
