import React from 'react'
import WhatsNew from './WhatsNew'
import ShopbyCategory from './ShopbyCategory'

const Product = () => {
  return (
    <main className="bg-white flex flex-col gap-y-20 md:gap-y-52 h-auto w-full p-6 lg:p-24 rounded-3xl" >
        <WhatsNew/>
        <ShopbyCategory/>
    </main>
  )
}

export default Product
