import React from "react"
import { motion } from "framer-motion";
import Link from "next/link";
import { regular } from "../fonts";
import classNames from 'classnames'

type Props = {
  text: string,
  href: string,
  className?: string,
  iconColor?: string
}

function AnimatedLink({text, href, className, iconColor}: Props) {
  return (
    <Link className={classNames(regular.className, `${className} flex items-center cursor-pointer w-fit group`)} href={href}>
      <p className="text-base lg:text-lg">{text}</p>
      <svg className={`transition-all duration-300 ease-in-out mt-0.5 ml-2 -mr-1 stroke-black`} style={{strokeWidth: 1.5, stroke: iconColor && iconColor}} fill="none" width="25" height="14" viewBox="0 0 10 10" aria-hidden="true">
        <path className="opacity-0 transition duration-150 group-hover:opacity-100" d="M-1 5h12"></path>
        <path className="transition duration-200 group-hover:translate-x-[5px]" d="M3 1l4 4-4 4"></path>
      </svg>
    </Link>
  )
}

export default AnimatedLink