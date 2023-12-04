"use client"
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {useScrollPosition} from '../hooks/useScrollPosition'
import DropDownBlock from './DropDownBlock'
import { book, documentText, musicalNotes, albums } from 'ionicons/icons'

type Props = {
    text: string,
    href: string,
}

function HeaderLink({text, href}: Props) {
  const pathname = usePathname()
  const scrollPosition = useScrollPosition()

  return (
    <div className='relative group cursor-pointer'>
        <p className={`dropdown_link ${pathname === href ? "font-extrabold" : "text-zinc-600"}`}>{text}</p>

        <div className={`invisible absolute ${pathname != "/" && '!top-10'} ${scrollPosition > 30 ? 'top-10' : "top-6"} -left-48 translate-y-0 opacity-0 group-hover:visible group-hover:translate-y-5 group-hover:opacity-100 transition-all duration-300 ease-in-out z-50 min-w-[560px]`}>
            <div className="relative p-6 bg-white rounded-xl shadow-xl w-full">
              <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-300 ease-in-out rounded-sm"></div>
                <ul className="grid grid-cols-2 text-[#4f5b76]">
                  <DropDownBlock href='/search?type=posts' text="სტატიები" description='სტატიები სტატიები' Icon={documentText} />
                  <DropDownBlock href='/search?type=hymns' text="საგალობლები" description='სტატიები სტატიები' Icon={musicalNotes} />
                  <DropDownBlock href='/search?type=books' text="წიგნები" description='სტატიები სტატიები' Icon={book} />
                  <DropDownBlock href='/cources' text="კურსები" description='კურსები კურსები' Icon={albums} />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HeaderLink