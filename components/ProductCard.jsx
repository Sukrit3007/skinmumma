'use client'
import React, { useState } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import { Button } from './ui/button';

const ProductCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            className="w-[280px] relative "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardHeader>
                <Image
                    src="/hero.png"
                    alt="card-image"
                    width={280}
                    height={280}
                />
            </CardHeader>

            <CardContent className="pb-12">
                <CardTitle>Cunha Hyaluronic Acid</CardTitle>
                <CardTitle>No Reviews</CardTitle>
                <CardDescription>The market is saturated with moisturizers from various brands, but...</CardDescription>
            </CardContent>

            <CardFooter className={`absolute bottom-0 right-0 left-0 ${isHovered ? '' : 'hidden'}`}>
                
                <Button className="w-full bg-white text-sm font-semibold leading-5 text-background border-2 border-background hover:bg-slate-50">View Product</Button>
                
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
