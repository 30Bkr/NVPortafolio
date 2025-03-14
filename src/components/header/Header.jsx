import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'
import Perfil from '../perfil/Perfil'

const Header = () => {
  return (
    <div className={`grid grid-flow-col grid-rows-3 h-44 text-slate-800` }>
      <div className={`row-span-2 flex justify-between items-center ${styles.this} ${styles.header2}`}>
        <div className='flex items-center w-68'>
          <Image 
            src={'/logo.png'}
            height={58}
            width={58}
            alt='Logo de la Universidad Politecnica Territorial de Caracas "Mariscal Sucre"'
          />
          <p className='text-center ml-4'>Universidad Politecnica Territorial de Caracas "Mariscal Sucre"</p>
        </div>
        <div className='flex'>
          {/* <div className='w-auto rounded-full flex items-center font-bold text-[20px] text-slate-600 hover:text-rose-500'>
            <div className='w-16 h-16 relative border-3 border-gray-500 rounded-full'>
              <Image 
                src={'/lys.jpeg'}
                fill
                alt='Neudelys'
                className='rounded-full'
              />
            </div>
            <h2 className='mx-4 '>Neudelys Solano</h2>
          </div> */}
          <Perfil name={'Briant Carrillo'} image={'/lys.jpeg'}/>
          <Perfil name={'Neudelys Solano'} image={'/lys.jpeg'}/>
          <Perfil name={'Yusmely Araque'} image={'/lys.jpeg'}/>
        </div>
      </div>
      <div className={`flex items-center ${styles.header} `}>
        <ul className='flex'>
          <li className='mx-5'>
            <button className='cursor-pointer  hover:text-rose-500  font-semibold text-[24px]'>Inicio</button>
          </li>
          <li className='mx-5 cursor-pointer'>
            <button className='cursor-pointer  hover:text-rose-500  font-semibold text-[24px]'>Redes</button>
          </li>
          <li className='mx-5 cursor-pointer'>
            <button className='cursor-pointer  hover:text-rose-500  font-semibold text-[24px]'>Comunicaciones</button>
          </li>
          <li className='mx-5 cursor-pointer'>
            <button className='cursor-pointer  hover:text-rose-500  font-semibold text-[24px]'>Infraestructura</button>   
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header