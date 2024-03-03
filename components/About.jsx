import React from 'react';
import Image from 'next/image';

const About = () => {
  const style = [
    { bg: 'radial-gradient(circle at center, #B2C3BB 0%, #FFF 100%)', img: '/about/1.svg', text: 'Natural Ingredients' },
    { bg: 'radial-gradient(50% 50% at 50% 50%, #D7B4C0 0%, #FFF 100%)', img: '/about/2.svg', text: 'Handmade With Love' },
    { bg: 'radial-gradient(50% 50% at 50% 50%, #D5CDA3 0%, #FFF 100%)', img: '/about/3.svg', text: 'Moms Expertise' },
  ];

  return (
    <main className='bg-inherit h-auto w-full rounded-3xl'>
      <div className='w-full h-full flex flex-col md:flex-row gap-8 justify-between items-center'>
        {style.map((item, index) => (
          <div key={index} className='flex flex-col gap-6'>
            <div className="w-[300px] h-[180px] md:w-[422px] md:h-[280px] rounded-full relative " style={{ backgroundImage: item.bg }}>
              <div className='absolute w-full h-full inset-0 flex justify-center items-center'>
                <Image
                  src={item.img}
                  alt="Picture"
                  width={150}
                  height={200}
                  className="transition-transform transform scale-100 hover:scale-110"
                />
            </div>

            </div>
            <div className='w-full flex flex-row justify-center items-center'>
              <h1 className="text-white text-xl font-bold ">{item.text}</h1>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default About;
