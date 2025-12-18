
import 'dotenv/config';
import { PrismaClient } from '../lib/generated/prisma/client';

const prisma = new PrismaClient()

const categories = [
    {
        name: "Electronics",
        image: "/electronics-store-display.png",
    },
    {
        name: "Fashion",
        image: "/fashion-clothing-store.png",
    },
    {
        name: "Appliances",
        image: "/modern-kitchen-appliances.png",
    },
    {
        name: "Babies Store",
        image: "/baby-products-store.png",
    },
    {
        name: "Sports",
        image: "/assorted-sports-gear.png",
    },
    {
        name: "Home & Garden",
        image: "/home-garden-furniture.jpg",
    },
]

const products = [
    // Kitchen Appliances -> Appliances
    {
        id: 1,
        name: "Nintendo Switch Console",
        categoryName: "Appliances", // Wait, Nintendo Switch is Electronics. The original data had it as "kitchen appliances" in one list and "consoles" in another?
        // In best-deals.tsx:
        // "KITCHEN APPLIANCES": [ { name: "Nintendo Switch Console" ... } ]
        // "CONSOLES": [ { name: "Nintendo Switch Console" ... } ]
        // It seems the mock data was copy-pasted and reused the same products for different categories.
        // I should fix this categorization.
        // Nintendo Switch -> Electronics
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
        categoryName: "Electronics",
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
        categoryName: "Electronics",
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
        categoryName: "Electronics",
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
        categoryName: "Electronics",
        image: "/images/products/product-5.jpg",
        price: 65208,
        originalPrice: 66000,
        discount: 10,
        sold: 6,
        available: 30,
        badgeColor: "bg-linear-to-r from-[#F09819] to-[#EDDE5D]",
    },

    // Consoles -> Electronics
    {
        id: 6,
        name: "Nintendo Switch Console",
        categoryName: "Electronics",
        image: "/images/products/product-4.jpg",
        price: 65208,
        originalPrice: 66000,
        discount: 10,
        sold: 6,
        available: 30,
        badgeColor: "bg-[#00bcd4]",
    },
    {
        id: 7,
        name: "Nintendo Switch Console",
        categoryName: "Electronics",
        image: "/images/products/product-10.jpg",
        price: 65208,
        originalPrice: 66000,
        discount: 10,
        sold: 6,
        available: 30,
        badgeColor: "bg-[#ef5350]",
        featured: true,
    },

    // TV & Videos -> Electronics
    {
        id: 11,
        name: "Samsung 40N5300 Smart TV",
        categoryName: "Electronics",
        brand: "Bin Bakar Electronics",
        image: "/images/products/product-9.png",
        price: 56000,
        originalPrice: 60000,
        sold: 10,
        available: 20,
    },

    // New Arrivals (Mixed categories)
    {
        id: 12,
        name: "Samsung Automatic Washing Machine",
        categoryName: "Appliances",
        brand: "Bin Bakar Electronics",
        image: "/images/products/product-3.png",
        price: 101000,
        originalPrice: 110000,
    },
    {
        id: 13,
        name: "Haier HSU-12HFM AC",
        categoryName: "Appliances",
        brand: "Bin Bakar Electronics",
        image: "/images/products/product-11.png",
        price: 70000,
        originalPrice: 56000,
    },
    {
        id: 14,
        name: "Anex Roti Maker",
        categoryName: "Appliances",
        brand: "Bin Bakar Electronics",
        image: "/images/products/product-7.png",
        price: 70000,
        originalPrice: 56000,
    },
    {
        id: 15,
        name: "Gree GS-12FITH Air Conditioner",
        categoryName: "Appliances",
        brand: "Bin Bakar Electronics",
        image: "/images/products/product-2.png",
        price: 86000,
        originalPrice: 56000,
    },
    {
        id: 16,
        name: "Gree Air Conditioner",
        categoryName: "Appliances",
        brand: "Bin Bakar Electronics",
        image: "/images/products/product-6.png",
        price: 171000,
        originalPrice: 56000,
    },

    // Cell Phones -> Electronics
    {
        id: 20,
        name: "Smartphone Model X",
        categoryName: "Electronics",
        image: "/images/products/product-1.jpg",
        price: 45000,
        originalPrice: 50000,
        discount: 10,
        sold: 5,
        available: 15,
        badgeColor: "bg-[#00bcd4]",
    },

    // Grocery -> Home & Garden
    {
        id: 25,
        name: "Organic Rice",
        categoryName: "Home & Garden",
        image: "/images/products/product-5.jpg",
        price: 2000,
        originalPrice: 2200,
        discount: 9,
        sold: 100,
        available: 500,
        badgeColor: "bg-[#ffd54f]",
    }
];

async function main() {
    console.log('Start seeding ...')

    // Clear existing data
    await prisma.product.deleteMany()
    await prisma.category.deleteMany()

    // Create Categories
    const categoryMap = new Map();
    for (const c of categories) {
        const category = await prisma.category.create({
            data: c,
        })
        categoryMap.set(c.name, category.id);
        console.log(`Created category: ${category.name}`)
    }

    // Create Products
    for (const p of products) {
        const categoryId = categoryMap.get(p.categoryName);
        if (!categoryId) {
            console.warn(`Category not found for product: ${p.name} (${p.categoryName})`);
            continue;
        }

        const product = await prisma.product.create({
            data: {
                id: p.id,
                name: p.name,
                // category: p.categoryName, // Removed string field
                categoryId: categoryId,
                image: p.image,
                price: p.price,
                originalPrice: p.originalPrice,
                discount: p.discount,
                sold: p.sold,
                available: p.available,
                badgeColor: p.badgeColor,
                featured: p.featured,
                brand: p.brand,
            },
        })
        console.log(`Created product with id: ${product.id}`)
    }
    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
