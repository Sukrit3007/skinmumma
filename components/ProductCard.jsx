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

const ProductCard = ({ imgSrc, title, description, price }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            className="w-[280px] relative "
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <CardHeader>
                <Image
                    src={imgSrc}
                    alt="card-image"
                    width={250}
                    height={250}
                    className='rounded-3xl transition-transform transform scale-100 hover:scale-95'
                />
            </CardHeader>

            <CardContent className="pb-12">
                <CardTitle>{title}</CardTitle>
                <CardTitle>No Reviews</CardTitle>
                <CardDescription>{description}</CardDescription>
                <CardDescription>₹ 499.00 <span style={{color: 'red', textDecoration: 'line-through'}}>₹ 595.00</span></CardDescription>
            </CardContent>

            <CardFooter className={`absolute bottom-0 right-0 left-0 ${isHovered ? '' : 'hidden'}`}>
                <Button className="w-full bg-white text-sm font-semibold leading-5 text-background border-2 border-background hover:bg-slate-50">View Product</Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
