import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'
import ProductCard from './ProductCard'
  
  

const WhatsNew = () => {
  return (
    <div className="flex flex-col gap-10">
       <div>
            <h1 className="text-gray-700 text-2xl font-semibold scroll-m-20 tracking-tight lg:text-5xl">
                What’s New
            </h1>
       </div>

       <div>
       <Carousel className="w-full" orientation="horizontal">
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/4 max-w-fit ">
              <ProductCard/>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
        </Carousel>
       </div>
    </div>
  )
}

export default WhatsNew
