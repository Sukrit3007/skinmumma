import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 grid-rows-2 lg:grid-rows-1 p-2 lg:p-24 overflow-visible ">
      <div className="col-span-1 grid-rows-2">
        <div className="flex flex-col w-full h-full justify-center items-start gap-6 ">
          <h1 className="text-white font-hatton text-4xl font-semibold scroll-m-20 tracking-tight lg:text-5xl">
            Unlock the power of Healthy Skin with Our Products
          </h1>
          <p className="text-white text-base font-normal leading-6 [&:not(:first-child)]:mt-6">
            Simplify Beauty with SkinMumma. Discover Your Radiant Self Today.
          </p>
          <div>
            <Button
              variant="outline"
              className="border-3 border-white bg-white text-sm font-semibold leading-5"
              style={{ color: '#B46057' }}
            >
              Shop Now
            </Button>
          </div>
        </div>
      </div>

      <div className="col-span-1 grid-rows-2 relative ">
        <div className="flex flex-col w-full h-full justify-center items-center overflow-visible">
          <Image 
            src="/hero.png" 
            alt="Picture" 
            width={550} 
            height={500}  
            className='z-30 transition-transform transform scale-100 hover:scale-105'
            layout="fixed" // or "responsive" depending on your use case
            style={{ width: 'auto', height: 'auto' }}
            />
          {/* <Image src="/star.svg" alt="Picture" width={100} height={100} 
           className='absolute z-50 top-0 left-0'/>
           <Image src="/star.svg" alt="Picture" width={100} height={100} 
           className='absolute z-50 bottom-0 right-0'/>
          
          <Image 
            src="/vector.svg" 
            alt="Picture" 
            width={1120} 
            height={580} 
            className='absolute z-0'
            /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
