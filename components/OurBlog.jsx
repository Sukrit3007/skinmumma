import React from 'react'
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from 'next/image';
import { Button } from './ui/button';

const OurBlog = () => {
    const blogs =[
        {title:"The Role of Procapil Hair Serum in Prevent....",img:"/blogs/1.png"},
        {title:"Essential Tips for Building an Effective S....",img:"/blogs/2.png"},
        {title:"How to Tailor Your Skincare Routine for Co....",img:"/blogs/3.png"},
        {title:"Summer Skincare Dos and Don'ts: Dermat....",img:"/blogs/4.png"},
    ]
  return (
    <main className="bg-white flex flex-col gap-y-20 md:gap-y-52 h-auto w-full p-6 lg:p-24 rounded-3xl">
    <div className="flex flex-col gap-10">

        <div>
            <h1 className="text-gray-700 text-2xl font-semibold scroll-m-20 tracking-tight lg:text-5xl">
                Our Blog
            </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 w-full">
            {blogs.map((blog, index) => ( // Use map() to render each blog
                <Card key={index} className='pt-6 md:pt-0 transition-transform transform scale-100 hover:scale-105'>
                    <CardHeader>
                        <div className='flex flex-col justify-between items-center'> 
                            <Image
                                src={blog.img}
                                alt="card-image"
                                width={293}
                                height={197}
                            />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <CardTitle>{blog.title}</CardTitle>          
                    </CardContent>
                </Card>
                ))}
        </div>

        <div className='w-full flex justify-center items-center'>
          <Button className="px-20 py-3 bg-background">View All</Button>
        </div>
        
        </div>
    </main>
    
  )
}

export default OurBlog
