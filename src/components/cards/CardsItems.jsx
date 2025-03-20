import React from 'react'
import styles from './cardsItem.module.css'
import Image from 'next/image'

export const CardsItems = ({ title, image }) => {
  return (
    <div className={styles.card}>
      <div className='h-full flex items-center justify-center'>
        <div className='bg-black w-24 h-24 rounded-full relative'>
          <Image
            src={image}
            fill
            alt='title'
            className='rounded-full'
          />
        </div>
      </div>
      <div className='h-full flex flex-col items-center pt-4'>
        <h2 className='font-bold text-xl text-black text-center'>{title}</h2>
      <p className='hover:underline underline-offset-1 font-light text-blue-500'>Conoce más Aquí</p>
      </div>
    </div>
  )
}
