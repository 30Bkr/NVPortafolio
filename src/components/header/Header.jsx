import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={`grid grid-flow-col grid-rows-3 h-44` }>
      <div className={`row-span-2 flex justify-between items-center ${styles.this} ${styles.header2}`}>
        <div>
          Imagen 
        </div>
        <div>
          presentaciones de cada uno de nosotros
        </div>
      </div>
      <div className={`flex items-center ${styles.header} `}>
        Navbar
      </div>
    </div>
  )
}

export default Header