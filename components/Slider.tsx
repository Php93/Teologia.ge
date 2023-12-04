'use client'
import React, { useState } from 'react'
import { Book, Image as IImage } from '../typings'
import Image from 'next/image'
import urlFor from '../lib/urlFor'
import {ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/solid'

type Props = {
    images: IImage[]
}

function Slider({images}: Props) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }
    const goToSlide = (index: number) => {
        setCurrentIndex(index)
    }

  return (
    <div className='w-full relative group md:max-w-[500px] md:h-[500px]'>
        <Image className="w-full h-full object-contain transition-all duration-500" src={urlFor(images[currentIndex]).url()} alt="" width={500} height={500}/>

        <div className='block min-[768px]:hidden min-[768px]:group-hover:block absolute top-[50%] p-1 -translate-x-0 translate-y-[50%] -left-3 rounded-full bg-black/20 text-white cursor-pointer'>
            <ChevronLeftIcon onClick={prevSlide} width={20} height={20} />
        </div>
        <div className='block min-[768px]:hidden min-[768px]:group-hover:block absolute top-[50%] p-1 -translate-x-0 translate-y-[50%] -right-3 rounded-full bg-black/20 text-white cursor-pointer'>
            <ChevronRightIcon onClick={nextSlide} width={20} height={20} />
        </div>
        
        <div className='top-4 justify-center py-2 hidden'>
            {images.map((image, index) => (
                <div key={index} onClick={() => goToSlide(index)} className=" cursor-pointer">
                    <Image className="w-12 h-16 object-contain rounded-md" src={urlFor(image).url()} alt="" width={500} height={500} />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Slider