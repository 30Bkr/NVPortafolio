import React from 'react'
import styles from '../page.module.css'
export default function Page() {
  return (
    <div className={`py-18 ${styles.contenedor} w-full grid grid-cols-4`}>
      <div className='col-span-3 bg-red-300' id='contenido'>
        <h1>hola</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, pariatur, minima blanditiis architecto doloribus voluptate eligendi unde perspiciatis, fugit nesciunt inventore quibusdam praesentium dolor voluptatibus atque quidem voluptatem aut cupiditate!</p>
      </div>
      <div id='side-bar' className='col-span-1 bg-blue-300'>
        <ul>
          <li>

          </li>
        </ul>
      </div>
    </div>
  );
}