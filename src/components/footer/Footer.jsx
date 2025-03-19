import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={`${styles.footer}`}>
      <Image 
        src={'/logo.png'}
        height={48}
        width={48}
        alt='Logo de la Universidad Politecnica Territorial de Caracas "Mariscal Sucre"'
      />
      <h1 className='ml-4'>Universidad Politécnica Territorial de Caracas "Mariscal Sucre"</h1>
    </div>
  )
}

export default Footer