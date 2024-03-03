'use client'
import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { HeartIcon } from "@radix-ui/react-icons"
import { PersonIcon } from "@radix-ui/react-icons"
import { RowsIcon } from "@radix-ui/react-icons"
import Image from 'next/image'
import { Button } from './ui/button';
import { Input } from './ui/input';


  
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="sticky w-full bg-inherit px-8 lg:px-24 flex items-center justify-between py-10 text-white">
      <div className="hidden md:flex  items-center ">
        <ul className="flex flex-row gap-2 text-white text-sm font-semibold leading-none">
          <li className="flex p-3 items-center justify-center gap-2">About</li>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex p-3 items-center justify-center gap-2">
              Shop <ChevronDownIcon className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Skincare</DropdownMenuItem>
              <DropdownMenuItem>Haircare</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <li className="flex p-3 items-center justify-center gap-2">Blog</li>
          <li className="flex p-3 items-center justify-center gap-2">Contact Us</li>
        </ul>
      </div>
      
      {/* Logo in the center */}
      <div className="flex justify-center">
        <Image
          src="/logo/nav.svg"
          alt="logo"
          width={180}
          height={40}
        />
      </div>
      
      <div className="hidden md:flex items-center gap-2 ">
      <Dialog>
        <DialogTrigger className="rounded-full bg-inherit border border-white hover:bg-opacity-75 p-4">
          <MagnifyingGlassIcon className='h-4 w-4'/>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogDescription>
              <div className='flex flex-row justify-center items-center gap-2 '>
              <MagnifyingGlassIcon className='h-6 w-6'/>
                <Input className='rounded-3xl bg-white' placeholder='search here' />
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

        <div className="rounded-full bg-inherit border border-white hover:bg-opacity-75 p-4">
          <HeartIcon className='h-4 w-4'/>
        </div>
        <div className="rounded-full bg-inherit border border-white hover:bg-opacity-75 p-4">
          <PersonIcon className='h-4 w-4'/>
        </div>
          <div className="rounded-full bg-inherit border border-white hover:bg-opacity-75 p-3 flex flex-row gap-2.5">
            <Image
              src="/logo/cart.svg"
              alt="logo"
              width={15}
              height={15}
            /> 2 items
          </div>
      </div>

      {/* Hamburger menu for smaller screens */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger className="text-white"><RowsIcon className='h-4 w-4'/> </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <div className='flex flex-col gap-4'>
                  <ul className="space-y-4 text-left text-white">
                    <li>About</li>
                    <li>Shop</li>
                    <li>Blog</li>
                    <li>Contact Us</li>
                  </ul>
                  <div className="flex items-center gap-2 ">
                    <Button className="rounded-full bg-inherit border border-white hover:bg-opacity-75 p-3">
                        <MagnifyingGlassIcon className='h-4 w-4'/>
                    </Button>
                    <Button className="rounded-full bg-inherit border border-white hover:bg-opacity-75 p-3">
                      <HeartIcon className='h-4 w-4'/>
                    </Button>
                    <Button className="rounded-full bg-inherit border border-white hover:bg-opacity-75 p-3">
                      <PersonIcon className='h-4 w-4'/>
                    </Button>
                    <Button className="rounded-full bg-inherit border border-white hover:bg-opacity-75 p-3 flex flex-row gap-2.5">
                      <Image
                        src="/logo/cart.svg"
                        alt="logo"
                        width={15}
                        height={15}
                      /> 2 items
                    </Button>
                </div>
                </div>  
              </SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>


    </nav>
  )
}

export default NavBar
