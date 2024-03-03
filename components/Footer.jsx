import React from 'react'
import Image from 'next/image'
import { Input } from './ui/input'
import { Button } from './ui/button'

const Footer = () => {
  return (
    <main className="bg-white flex flex-col gap-y-12 h-auto w-full p-6 lg:p-24  rounded-3xl">
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className='col-span-1'>
               <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-3'>
                        <Image
                            src="/logo/footer.svg"
                            alt="Picture of the author"
                            width={182}
                            height={50}
                        />
                        <div className='flex flex-row gap-5'>
                            <Image
                                src="/logo/twitter.svg"
                                alt="Picture of the author"
                                width={20}
                                height={20}
                            />
                            <Image
                            src="/logo/linkedin.svg"
                            alt="Picture of the author"
                            width={20}
                            height={20}
                            />
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-background text-base font-bold leading-4 tracking-wider'>Subscribe</h1>
                        <p className='text-background text-sm font-normal leading-normal tracking-wide'>Get Ahead with Early Access to New Products and Special Deals</p>
                        <div className='flex flex-row gap-2'>
                            <Input className='rounded-3xl' placeholder='work@email.com'  style={{ backgroundColor: 'rgba(124, 111, 109, 0.15)' }} />
                            <Button className='bg-background'>Sign Up</Button>
                        </div>
                    </div>
               </div>
            </div>

            <div className='col-span-1'>
                <div className='w-full h-full flex justify-start md:justify-center mt-6 md:mt-0'>
                    <h1 className='text-background text-2xl font-semibold leading-normal'>
                    Get to Know<br/>
                    Bindal Medicose
                    </h1>
                </div>
            </div>
            
            <div className='col-span-1'>
                <div className='w-full h-full flex flex-col gap-4 item-start md:items-center text-left mt-6 md:mt-0'> 
                    <h1 className='text-background text-base font-medium leading-4 tracking-wider'>Quick Links</h1>
                    <div className='flex flex-col text-background text-base font-normal leading-6'>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Shop</a>
                        <a href="">Blog</a>
                        <a href="">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-t-2 border-background flex flex-col md:flex-row gap-6 justify-between pt-8'>
            <p className='text-left font-inter text-base font-normal leading-5 tracking-wider text-background'>
                © Skin Mumma all Rights Reserved
            </p>

            <div className='flex flex-col md:flex-row gap-6 flex-wrap text-background font-inter text-base font-normal leading-5 tracking-tight' style={{ letterSpacing: '0.1px' }}>
                <p>Terms of Use</p>
                <p>Privacy Policy</p>
                <p>Shipping Policy</p>
                <p>Return and refund policy</p>
            </div>
        </div>
    </main>
  )
}

export default Footer
