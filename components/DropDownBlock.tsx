import classNames from 'classnames'
import React from 'react'
import { bold, medium } from '../fonts'
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'
import { IonIcon } from '@ionic/react'
import Link from 'next/link'

type Props = {
    text: string,
    description: string,
    Icon: any
    href: string
}
function DropDownBlock({text, description, Icon, href}: Props) {
  return (
    <Link href={href}>
        <li className='flex items-center my-6 group-scoped'>
            <IonIcon icon={Icon} className='text-[#88add2] w-8 h-8 group-scoped-hover:text-main transition-colors duration-300 ease-out'/>
            <div className='flex flex-col items-start ml-2'>
                <span className={classNames(bold.className, 'flex items-center text-base')}>
                    {text}
                    <svg className="invisible group-scoped-hover:visible transition-all duration-300 ease-in-out mt-0.5 ml-2 -mr-1 stroke-main stroke-2" fill="none" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                        <path className="opacity-0 transition delay-75 group-scoped-hover:opacity-100" d="M0 5h7"></path>
                        <path className="opacity-0 transition delay-100 group-scoped-hover:translate-x-[3px] group-scoped-hover:opacity-100" d="M1 1l4 4-4 4"></path>
                    </svg>
                </span> 
                <span className={classNames(medium.className, 'text-gray-400 text-sm -mt-1 group-scoped-hover:text-gray-800 transition-colors duration-300 ease-in-out')}>{description}</span>
            </div>
        </li>
    </Link>
  )
}

export default DropDownBlock