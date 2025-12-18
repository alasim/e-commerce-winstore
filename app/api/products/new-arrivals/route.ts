
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    const products = await prisma.product.findMany({
        take: 10,
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            category: true,
        },
    });

    const formattedProducts = products.map((product) => ({
        ...product,
        category: product.category.name,
    }));

    return NextResponse.json(formattedProducts);
}
