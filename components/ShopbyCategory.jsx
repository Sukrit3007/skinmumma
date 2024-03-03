import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from './ui/button'
import Image from 'next/image'
import ProductCard from './ProductCard'

const ShopbyCategory = () => {
  const skincareProducts = [
    {
      imgSrc: "/products/1.png",
      title: "Cunha Hyaluronic Acid",
      description:
        "The market is saturated with moisturizers from various brands, but...",
      price: "$10",
    },
    {
      imgSrc: "/products/8.png",
      title: "Cunha Hyaluronic Acid",
      description:
        "The market is saturated with moisturizers from various brands, but...",
      price: "$10",
    },
    {
      imgSrc: "/products/9.png",
      title: "Cunha Hyaluronic Acid",
      description:
        "The market is saturated with moisturizers from various brands, but...",
      price: "$10",
    },
    {
      imgSrc: "/products/4.png",
      title: "Cunha Hyaluronic Acid",
      description:
        "The market is saturated with moisturizers from various brands, but...",
      price: "$10",
    },
];

const haircareProducts = [
  {
    imgSrc: "/products/3.png",
    title: "Cunha Hyaluronic Acid",
    description:
      "The market is saturated with moisturizers from various brands, but...",
    price: "$10",
  },
  {
    imgSrc: "/products/7.png",
    title: "Seyma Hair Serum ",
    description:
      "The market is saturated with moisturizers from various brands, but...",
    price: "$10",
  },
  {
    imgSrc: "/products/6.png",
    title: "Seyma Lite Best Hair Oil",
    description:
      "The market is saturated with moisturizers from various brands, but...",
    price: "$10",
  },
];
  return (
    <div className="flex flex-col gap-10">
            <div>
                <h1 className="text-gray-700 text-2xl font-semibold scroll-m-20 tracking-tight lg:text-5xl">
                    Shop by Category
                </h1>
            </div>

            <Tabs defaultValue="account" className="w-full bg-white">
                <TabsList className="w-full flex justify-end">
                    <TabsTrigger value="account">Skin Care</TabsTrigger>
                    <TabsTrigger value="password">Hair Care</TabsTrigger>
                </TabsList>
                <TabsContent value="account" className='flex flex-col md:flex-row justify-between overflow-hidden md:overflow-x-scroll '>
                            {skincareProducts.map((product, index) => (
                                <div key={index} className="pl-4 md:basis-1/2 lg:basis-1/4 max-w-fit">
                                    <ProductCard
                                        imgSrc={product.imgSrc}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                    />
                                </div>
                            ))}
                </TabsContent>
                <TabsContent value="password" className='flex flex-col md:flex-row justify-start'>

                            {haircareProducts.map((product, index) => (
                                <div key={index} className="pl-4 md:basis-1/2 lg:basis-1/4 max-w-fit ">
                                    <ProductCard
                                        imgSrc={product.imgSrc}
                                        title={product.title}
                                        description={product.description}
                                        price={product.price}
                                    />
                                </div>
                            ))}

                </TabsContent>
            </Tabs>

            <div className='w-full flex justify-center items-center'>
                <Button className="px-20 py-3 bg-background">View All</Button>
            </div>
        </div>
  )
}

export default ShopbyCategory
