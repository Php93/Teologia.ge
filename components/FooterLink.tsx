import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { medium, regular } from '../fonts'

type Props = {
    text: string,
    link: string,
    date?: string
}
function FooterLink({text, link, date}: Props) {
  return (
    <Link className='w-fit' href={link}>
      <p className={classNames(regular.className, 'text-gray-400 text-xs tracking-wide')}>{date}</p>
      <p className={classNames(medium.className, 'text-gray-800 text-sm mb-6 w-fit hover:underline hover:text-[#1E5B94] transition-all duration-300 sm:text-base')}>{text}</p>
    </Link>
  )
}

export default FooterLink