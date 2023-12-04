import Image from 'next/image'
import React from 'react'
 
type Props = {
    title: string,
    author: string,
    price: number,
    img: any
}

function BookBlock({title, author, price, img}: Props) {
  return (
    <div className='flex flex-col items-center justify-start min-w-32 group cursor-pointer'>
      <Image className='w-max group-hover:opacity-75 transition-opacity duration-200 ease-in-out' src={img} alt="" />
      
      <div className='text-center'>
        <p className='text-xs text-orange-600 mt-2'>{author}</p>
        <h3 className='text-sm text-center line-clamp-1'>{title}</h3>
        <p>{price}GEL</p>
      </div>
    </div>
  )
}

export default BookBlock