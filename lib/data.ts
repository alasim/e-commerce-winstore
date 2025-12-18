
export interface Product {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    discount?: number;
    description?: string;
    category: string;
    image: string;
    rating?: {
        rate: number;
        count: number;
    };
    brand?: string;
    sold?: number;
    available?: number;
    badgeColor?: string;
    featured?: boolean;
}

export const products: Product[] = [
    // Kitchen Appliances
    {
        id: 1,
        name: "Nintendo Switch Console",
        category: "kitchen appliances",
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
        category: "kitchen appliances",
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
        category: "kitchen appliances",
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
        category: "kitchen appliances",
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
        category: "kitchen appliances",
        image: "/images/products/product-5.jpg",
        price: 65208,
        originalPrice: 66000,
        discount: 10,
        sold: 6,
        available: 30,
        badgeColor: "bg-linear-to-r from-[#F09819] to-[#EDDE5D]",
    },

    // Consoles
    {
        id: 6,
        name: "Nintendo Switch Console",
        category: "consoles",
        image: "/images/products/product-4.jpg",
        price: 65208,
        originalPrice: 66000,
        discount: 10,
        sold: 6,
        available: 30,
        badgeColor: "bg-cyan-400",
    },
    {
        id: 7,
        name: "Nintendo Switch Console",
        category: "consoles",
        image: "/images/products/product-10.jpg",
        price: 65208,
        originalPrice: 66000,
        discount: 10,
        sold: 6,
        available: 30,
        badgeColor: "bg-[#ef5350]",
        featured: true,
    },

    // TV & Videos
    {
        id: 11,
        name: "Samsung 40N5300 Smart TV",
        category: "tv & videos",
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
        category: "home appliances",
        brand: "Bin Bakar Electronics",
        image: "/images/products/product-3.png",
        price: 101000,
        originalPrice: 110000,
    },
    {
        id: 13,
        name: "Haier HSU-12HFM AC",
        category: "home appliances",
        brand: "Bin Bakar Electronics",
        image: "/images/products/product-11.png",
        price: 70000,
        originalPrice: 56000,
    },
    {
        id: 14,
        name: "Anex Roti Maker",
        category: "kitchen appliances",
        brand: "Bin Bakar Electronics",
        image: "/images/products/product-7.png",
        price: 70000,
        originalPrice: 56000,
    },
    {
        id: 15,
        name: "Gree GS-12FITH Air Conditioner",
        category: "home appliances",
        brand: "Bin Bakar Electronics",
        image: "/images/products/product-2.png",
        price: 86000,
        originalPrice: 56000,
    },
    {
        id: 16,
        name: "Gree Air Conditioner",
        category: "home appliances",
        brand: "Bin Bakar Electronics",
        image: "/images/products/product-6.png",
        price: 171000,
        originalPrice: 56000,
    },

    // Cell Phones
    {
        id: 20,
        name: "Smartphone Model X",
        category: "cell phones",
        image: "/images/products/product-1.jpg",
        price: 45000,
        originalPrice: 50000,
        discount: 10,
        sold: 5,
        available: 15,
        badgeColor: "bg-cyan-400",
    },

    // Grocery
    {
        id: 25,
        name: "Organic Rice",
        category: "grocery",
        image: "/images/products/product-5.jpg",
        price: 2000,
        originalPrice: 2200,
        discount: 9,
        sold: 100,
        available: 500,
        badgeColor: "bg-[#ffd54f]",
    }
];
