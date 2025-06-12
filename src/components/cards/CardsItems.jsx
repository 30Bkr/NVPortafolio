import React from 'react'
import styles from './cardsItem.module.css'
import Image from 'next/image'
import Link from 'next/link'

export const CardsItems = ({ title, image, path }) => {
  return (
    <div className={styles.card}>
      <div className='h-full flex items-center justify-center'>
        <div className='bg-black w-24 h-24 rounded-full relative shadow-2xl'>
          <Image
            src={image}
            fill
            alt='title'
            className='rounded-full bg-white'
          />
        </div>
      </div>
      <div className='h-full flex flex-col items-center pt-4'>
        <h2 className='font-bold text-xl text-black text-center'>{title}</h2>
      <Link href={path}>
        <p className='hover:underline underline-offset-1 font-light text-blue-500'>Conoce más aquí</p>
      </Link>
      </div>
    </div>
  )
}
