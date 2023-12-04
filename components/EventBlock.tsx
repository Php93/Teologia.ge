import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { bold } from '../fonts'

type Props = {
    date: string,
    title: string,
    author: string
}
function EventBlock({author, date, title}: Props) {
  return (
    <div className='flex justify-around items-center py-10 mb-2 border-l-2 border-main max-w-6xl mx-auto'>
        <div className='flex flex-col items-center'>
            <p>SEP</p>
            <p>10</p>
        </div>

        <div className='md:hidden'>
            <div className='flex justify-center'>
                <p className={classNames(bold.className, "text-[#1E466B] mb-1 sm:text-lg")}>{title}</p>
            </div>

            <div className='text-xs text-center mb-2 sm:text-sm'>{author}</div>
            <div className='flex justify-center'>
                <Link className='underline hover:opacity-90 text-sm' href="/">მეტის ნახვა</Link>
            </div>
        </div>

        <div className='hidden justify-center md:flex'>
            <p className={classNames(bold.className, "text-[#1E466B] mb-1 sm:text-lg md:mb-0")}>{title}</p>
        </div>

        <div className='text-xs text-center mb-3 sm:text-sm hidden md:block md:mb-0'>{author}</div>
        <div className='hidden justify-center md:flex'>
            <Link className='underline hover:opacity-90 text-sm' href="/">მეტის ნახვა</Link>
        </div>
    </div>
  )
}

export default EventBlock