import React from 'react'
import Image from 'next/image'
export const BentoItem = ({ estilo, title, image, content, barra }) => {
  return (
    <div className={`${estilo} relative overflow-hidden`}>
      <div className='absolute z-20 bottom-4 px-4 text-white'>
        <h2 className='font-semibold mb-4'>{title}</h2>
        <p className='font-light'>{content} <a href="/medios/#lineas">Ver más.</a></p>
      </div>
      <div className={`${estilo} relative transition delay-150 duration-1000 ease-in-out hover:scale-110 `}>

      <div className='w-fit h-fit'>
       <div className="absolute z-10 bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent from-10% via-black/60 to-black/80 rounded-2xl"></div>
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
