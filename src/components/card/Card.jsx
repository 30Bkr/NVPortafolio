import Image from 'next/image'
import React from 'react'
import styles from '../../app/page.module.css'

export const Card = ( {image, texto, content} ) => {
  return (
    <div className={`w-120 h-96 rounded-md relative`}>
      <div className='text-white absolute z-40 bottom-4 text-justify px-4'>
        <h2 className='text-slate-300'>{texto}</h2>
        <p className='font-extralight'>{content}</p>
      </div>
      <div className={`w-120 h-96 relative `}>
        <div className={`absolute z-10 bottom-0 top-0 w-full h-full bg-gradient-to-b from-transparent from-10% via-black/60 to-black/80 rounded-2xl ${styles.shadow}`}></div>
        <Image 
        src={image}
        // width={'auto'}
        // height={'auto'}
        fill
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt="Any picture of network"
        className='rounded-2xl shadow-md'
        />
      </div>

    </div>
  )
}
