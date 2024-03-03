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
        <TabsContent value="account">
            <Carousel className="w-full" orientation="horizontal">
                <CarouselContent className="">
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4 max-w-fit ">
                            <ProductCard/>
                        </CarouselItem>
                        ))}
                </CarouselContent>
            </Carousel>
        </TabsContent>
        <TabsContent value="password">
            <Carousel className="w-full" orientation="horizontal">
                <CarouselContent className="">
                            {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4 max-w-fit ">
                                <ProductCard/>
                            </CarouselItem>
                            ))}
                </CarouselContent>
            </Carousel>
        </TabsContent>
        </Tabs>

        <div className='w-full flex justify-center items-center'>
          <Button className="px-20 py-3 bg-background">View All</Button>
        </div>

    </div>
  )
}

export default ShopbyCategory
