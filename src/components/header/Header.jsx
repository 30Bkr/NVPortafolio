import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Perfil from '../perfil/Perfil'

const Header = () => {
  return (

      <div className={`flex items-center ${styles.header}`}>
        <div className='flex items-center w-68'>
          <Image 
            src={'/logo.png'}
            height={48}
            width={48}
            alt='Logo de la Universidad Politecnica Territorial de Caracas "Mariscal Sucre"'
          />
          <p className='text-center ml-4 font-bold'>UPTECMS</p>
        </div>
        <ul className='flex'>
          <li className='mx-5'>
            <button className={`cursor-pointer  hover:text-rose-500  font-medium text-[18px] ${styles.font}`}>Inicio</button>
          </li>
          <li className='mx-5 cursor-pointer'>
            <button className='cursor-pointer  hover:text-rose-500  font-medium text-[18px]'>Redes</button>
          </li>
          <li className='mx-5 cursor-pointer'>
            <button className='cursor-pointer  hover:text-rose-500  font-medium text-[18px]'>Comunicaciones</button>
          </li>
          <li className='mx-5 cursor-pointer'>
            <button className='cursor-pointer  hover:text-rose-500  font-medium text-[18px]'>Infraestructura</button>   
          </li>
        </ul>
      </div>
    // <div className={`grid grid-flow-col grid-rows-3 h-44 text-slate-800 bg-slate-100 ${styles.font}` }>

    // </div>
  )
}

export default Header