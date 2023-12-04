"use client"
import Link from 'next/link'
import {usePathname} from 'next/navigation'

type Props = {
    text: string,
    href: string,
}

function HeaderLink({text, href}: Props) {
  const pathname = usePathname()

  return (
    <Link href={href}>
      <p className={`header_link ${pathname === href ? "font-extrabold" : "text-zinc-600 before:bg-zinc-600"}`}>{text}</p>
    </Link>
  )
}

export default HeaderLink