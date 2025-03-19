import React from 'react'
import styles from './Footer.module.css'
import Perfil from '../perfil/Perfil'

const PreFooter = () => {
  return (
    <div className={`${styles.preFooter}`}> 
      <Perfil name={'Neudelys Solano'} image={'/lys.jpeg'}/>
      <Perfil name={'Briant Carrillo'} image={'/lys.jpeg'}/>
      <Perfil name={'Yusmely Araque'} image={'/lys.jpeg'}/>
    </div>
  )
}

export default PreFooter