import React from 'react'
import Image from 'next/image'
export const BentoItem = ({ estilo, title, image }) => {
  return (
    <div className={`${estilo} relative overflow-hidden`}>
      <div className='absolute z-20 bottom-2 left-4 text-white'>
        <h2>{title}</h2>
      </div>
      <div className={`${estilo} relative transition delay-150 duration-1000 ease-in-out hover:scale-110 `}>

      <div className='w-fit h-fit'>
       <div className="absolute z-10 bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent from-10% via-black/30 to-black/90 rounded-2xl"></div>
        <Image 
          src={image}
          // width={100}
          // height={100}
          fill
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          alt="Any picture of network"
          className='rounded-2xl transition delay-150 duration-1000 ease-in-out hover:scale-110'
        />
      </div>

    </div>
    </div>

  )
}
