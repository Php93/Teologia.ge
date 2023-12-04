import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import { firaGo, medium } from '../fonts'
import featuredEvent from '../public/featured-event.jpg'
import AnimatedLink from './AnimatedLink'
import FillButton from './FillButton'

function FeaturedEvent() {
  return (
    <div className='flex flex-col justify-around items-center mb-14 max-w-4xl mx-auto md:flex-row-reverse lg:justify-between'>
      <div>
        <Image className='w-48 rounded-md lg:w-full' src={featuredEvent} alt="" />
      </div>

      <div className='text-center mt-2 md:text-left'>
        <p className='text-orange-600 text-xs md:mb-1 md:text-sm'>გამორჩეული ღონისძიება</p>
        <h3 className='text-2xl mb-2 sm:text-3xl lg:text-4xl'>იუდა მოციქულის წერილი</h3>
        <div className={classNames(medium.className, 'hidden md:block')}>
          <p className='font-normal text-lg'>სპიკერი: ბრუს თათლი</p>
          <p className='font-normal text-lg'>ივნისი 2021</p>
          <p className='font-normal text-lg mb-7'>თბილისი, საქართველო</p>
        </div>

        <div className='w-fit mx-auto md:ml-0'>
          <AnimatedLink text='მეტი' href="/"/>
        </div>
      </div>
    </div>
  )
}

export default FeaturedEvent