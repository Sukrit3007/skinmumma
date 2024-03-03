import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import ProductCard from "./ProductCard";

const WhatsNew = () => {
  const products = [
    {
      imgSrc: "/products/1.png",
      title: "Cunha Hyaluronic Acid",
      description:
        "The market is saturated with moisturizers from various brands, but...",
      price: "$10",
    },
    {
      imgSrc: "/products/2.png",
      title: "Cunha Hyaluronic Acid",
      description:
        "The market is saturated with moisturizers from various brands, but...",
      price: "$10",
    },
    {
      imgSrc: "/products/3.png",
      title: "Cunha Hyaluronic Acid",
      description:
        "The market is saturated with moisturizers from various brands, but...",

    },
    {
      imgSrc: "/products/4.png",
      title: "Cunha Hyaluronic Acid",
      description:
        "The market is saturated with moisturizers from various brands, but...",

    },
  
  ];

  const loopProducts = () => {
    const loopedProducts = [...products];
    return loopedProducts.concat(loopedProducts.slice(0, 3));
  };
  return (
    <div className="flex flex-col gap-10">
      <div>
        <h1 className="text-gray-700 text-2xl font-semibold scroll-m-20 tracking-tight lg:text-5xl">
          What’s New
        </h1>
      </div>

      <div className='flex flex-col md:flex-row overflow-x-scroll scrollbar-hide'>      
            {loopProducts().map((product, index) => (
              <div
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/4 max-w-fit "
              >
                <ProductCard
                  imgSrc={product.imgSrc}
                  title={product.title}
                  description={product.description}
                  price={product.price}
                />
              </div>
            ))} 
      </div>
    </div>
  );
};

export default WhatsNew;
