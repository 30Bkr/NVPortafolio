'use client'
import React, { useState } from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Perfil from '../perfil/Perfil'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
    const pathname = usePathname()
    const [clic, setClic] = useState(false)
    const handleClic = () => {
      setClic(!clic)
      console.log(clic)
    }
    const close = () => {
      setClic(false)
      console.log(clic)
    }
  
  return (
      <div className={`flex items-center ${styles.header}`}>
        <div className='absolute lg:hidden flex right-4'>
          <button onClick={() => {handleClic()}}>
            <RiMenuFill  className='w-10 h-10'/>
          </button>
        </div>
        <div className='flex items-center w-68'>
          <Image 
            src={'/logo.png'}
            height={48}
            width={48}
            alt='Logo de la Universidad Politecnica Territorial de Caracas "Mariscal Sucre"'
          />
          <p className='text-center ml-4 font-bold'>UPTECMS</p>
        </div>
        <ul className={`lg:flex lg:items-center ${clic? styles.nav: 'hidden'} `}>
          <Link onClick={()=>{close()}} href={'/'} className={`${pathname  === '/' ? 'text-rose-500' : ''}`}>
            <li className='mx-5'>
              <button  className='cursor-pointer  hover:text-rose-500  font-medium text-[18px]'>Inicio</button>
            </li>  
          </Link>
          <Link onClick={()=>{close()}} href={'/imagenes'} className={`${pathname  === '/imagenes' ? 'text-rose-500' : ''}`}>
            <li className='mx-5 cursor-pointer'>
              <button className='cursor-pointer  hover:text-rose-500  font-medium text-[18px]'>Imagenes</button>
            </li>   
          </Link>
          {/* <Link onClick={()=>{close()}} href={'/comunicaciones'} className={`${pathname  === '/comunicaciones' ? 'text-rose-500' : ''}`}>
            <li className='mx-5 cursor-pointer'>
              <button className='cursor-pointer  hover:text-rose-500  font-medium text-[18px]'>Comunicaciones</button>
            </li>
          </Link>
          <Link onClick={()=>{close()}} href={'/infraestructura'} className={`${pathname  === '/infraestructura' ? 'text-rose-500' : ''}`}>
            <li className='lg:mx-5 mb-4 lg:mb-0 cursor-pointer'>
              <button className='cursor-pointer  hover:text-rose-500  font-medium text-[18px]'>Infraestructura</button>   
            </li>
          </Link> */}
        </ul>
      </div>
    // <div className={`grid grid-flow-col grid-rows-3 h-44 text-slate-800 bg-slate-100 ${styles.font}` }>

    // </div>
  )
}

export default Header