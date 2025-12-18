
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ category: string }> }
) {
    const { category } = await params;

    // Decode the category from the URL (e.g., "tv%20&%20videos" -> "tv & videos")
    const decodedCategory = decodeURIComponent(category).toLowerCase();

    const filteredProducts = await prisma.product.findMany({
        where: {
            category: {
                name: {
                    equals: decodedCategory,
                    mode: 'insensitive',
                },
            },
        },
        include: {
            category: true,
        },
    });

    const formattedProducts = filteredProducts.map((product) => ({
        ...product,
        category: product.category.name,
    }));

    return NextResponse.json(formattedProducts);
}
