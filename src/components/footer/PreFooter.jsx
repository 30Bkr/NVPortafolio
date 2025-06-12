import React from 'react'
import styles from './Footer.module.css'
import Perfil from '../perfil/Perfil'

const PreFooter = () => {
  return (
    <div className={`${styles.preFooter}`}> 
      <Perfil name={'Neudelys Solano'} image={'/lys.jpeg'}/>
      <Perfil name={'Briant Carrillo'} image={'/briantU.jpeg'}/>
      <Perfil name={'Yusmely Araque'} image={'/yusmelyU.png'}/>
      <Perfil name={'Carlos Peña'} image={'/carlosU.jpg'}/>
    </div>
  )
}

export default PreFooter