import React from 'react'

export const Portal = ( {title, header} ) => {
  return (
    <div className={`flex w-48 h-30 bg-amber-50 `}>  
      <p>{header}</p>
      <h2>{title}</h2>
    </div>
  )
}
