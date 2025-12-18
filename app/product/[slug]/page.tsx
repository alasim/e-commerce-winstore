"use client"

import { ChevronRight, Heart, Minus, Plus, Share2, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { use, useEffect, useState } from "react"

import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { NewArrivals } from "@/components/new-arrivals"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"

interface Product {
    id: number
    name: string
    price: number
    originalPrice: number | null
    rating: number | null
    ratingCount: number | null
    brand: string | null
    category: string
    description: string | null
    image: string
    sold: number | null
    available: number | null
    sku?: string
    images?: string[]
    features?: string[]
}

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const [product, setProduct] = useState<Product | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [quantity, setQuantity] = useState(1)
    const [selectedImage, setSelectedImage] = useState(0)

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await fetch(`/api/products/${slug}`)
                if (!response.ok) {
                    throw new Error('Product not found')
                }
                const data = await response.json()
                // Ensure images array exists, fallback to single image if not
                if (!data.images) {
                    data.images = [data.image]
                }
                // Ensure features array exists
                if (!data.features) {
                    data.features = [
                        "High quality product",
                        "Durable and long-lasting",
                        "Best value for money"
                    ]
                }
                setProduct(data)
            } catch (error) {
                console.error('Failed to fetch product:', error)
                setProduct(null)
            } finally {
                setIsLoading(false)
            }
        }
        fetchProduct()
    }, [slug])

    const incrementQuantity = () => setQuantity((prev) => prev + 1)
    const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

    if (isLoading) {
        return (
            <div className="min-h-screen bg-white">
                <Header />
                <main className="container max-w-7xl mx-auto px-4 py-8">
                    <div className="flex gap-2 mb-8">
                        <Skeleton className="h-4 w-12" />
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-4 w-4" />
                        <Skeleton className="h-4 w-32" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                        <div className="space-y-4">
                            <Skeleton className="aspect-square w-full rounded-lg" />
                            <div className="grid grid-cols-4 gap-4">
                                {Array.from({ length: 4 }).map((_, i) => (
                                    <Skeleton key={i} className="aspect-square w-full rounded-lg" />
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <Skeleton className="h-10 w-3/4" />
                            <Skeleton className="h-6 w-1/2" />
                            <Skeleton className="h-8 w-1/3" />
                            <Separator />
                            <Skeleton className="h-32 w-full" />
                            <div className="flex gap-4">
                                <Skeleton className="h-12 w-32" />
                                <Skeleton className="h-12 flex-1" />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    if (!product) {
        return (
            <div className="min-h-screen bg-white">
                <main className="container max-w-7xl mx-auto px-4 py-8 flex items-center justify-center min-h-[50vh]">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                        <p className="text-gray-600 mb-8">The product you are looking for does not exist.</p>
                        <Button asChild>
                            <Link href="/">Back to Home</Link>
                        </Button>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-white">

            <main className="container max-w-7xl mx-auto px-4 py-8">
                {/* Breadcrumb */}
                <div className="flex items-center text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-[#00bcd4]">Home</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <Link href={`/category/${product.category}`} className="hover:text-[#00bcd4]">{product.category}</Link>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <span className="text-gray-900 font-medium truncate">{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="aspect-square relative border rounded-lg overflow-hidden bg-white flex items-center justify-center">
                            <Image
                                src={product.images?.[selectedImage] || product.image || "/placeholder.svg"}
                                alt={product.name}
                                fill
                                className="object-contain p-8"
                                priority
                            />
                            {product.originalPrice && product.price < product.originalPrice && (
                                <div className="absolute top-4 left-4">
                                    <Badge className="bg-[#ef5350] hover:bg-[#ef5350]">Sale</Badge>
                                </div>
                            )}
                        </div>
                        {product.images && product.images.length > 1 && (
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
                        )}
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
                                            className={`h-4 w-4 ${i < Math.floor(product.rating || 0) ? "fill-current" : "text-gray-300"}`}
                                        />
                                    ))}
                                    <span className="text-gray-600 text-sm ml-2">({product.ratingCount || 0} reviews)</span>
                                </div>
                                <Separator orientation="vertical" className="h-4" />
                                <span className="text-[#00bcd4] text-sm font-medium">{product.available ? "In Stock" : "Out of Stock"}</span>
                            </div>
                            <div className="flex items-baseline gap-3">
                                <span className="text-3xl font-bold text-[#00bcd4]">Rs.{product.price.toLocaleString()}</span>
                                {product.originalPrice && (
                                    <>
                                        <span className="text-lg text-gray-500 line-through">Rs.{product.originalPrice.toLocaleString()}</span>
                                        <Badge variant="outline" className="text-[#ef5350] border-[#ef5350]">
                                            {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                                        </Badge>
                                    </>
                                )}
                            </div>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                            <p className="text-gray-600 leading-relaxed">{product.description || "No description available."}</p>
                            {product.features && (
                                <ul className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-sm text-gray-600">
                                            <div className="h-1.5 w-1.5 rounded-full bg-[#00bcd4] mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center h-12 border rounded-md">
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
                                    <ShoppingCart className="md:mr-2 h-5 w-5" />
                                    <span className="hidden md:block">Add to Cart</span>
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
                                <span>{product.sku || `PROD-${product.id}`}</span>
                            </div>
                            <div className="flex gap-2">
                                <span className="font-medium text-gray-900">Category:</span>
                                <Link href={`/category/${product.category}`} className="text-[#00bcd4] hover:underline">{product.category}</Link>
                            </div>
                            {product.brand && (
                                <div className="flex gap-2">
                                    <span className="font-medium text-gray-900">Brand:</span>
                                    <Link href="#" className="text-[#00bcd4] hover:underline">{product.brand}</Link>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Product Tabs */}
                {/* <div className="mb-16">
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
                                Reviews ({product.ratingCount || 0})
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
                                    {product.description || "No detailed description available."}
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
                </div> */}
                {/* Related Products */}
                <div className="mb-16">
                    <NewArrivals />
                </div>
            </main>


        </div>
    )
}
