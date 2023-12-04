'use client'
import { usePathname } from 'next/navigation'
import classNames from "classnames";
import Link from "next/link";
import { bold } from "../fonts";

type Props = {
    navbarOpen: boolean,
    setNavbarOpen: (value: boolean) => void;
}

function MenuOverlay({navbarOpen, setNavbarOpen}: Props) {
    const pathname = usePathname()
    return (
    <nav className={`fixed flex top-0 left-0 w-full px-10 !m-0 z-10 h-screen pt-24 bg-black transform delay-100 transition-all duration-300 ${navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"}`}>
        <ul className="w-full flex flex-col items-start">
            <li className="nav-li">
                <Link
                    href="/"
                    className={classNames(bold.className, `${pathname === '/' && 'text-bg'}`)}
                    onClick={() => setNavbarOpen(false)}
                >
                    მთავარი
                </Link>
            </li>
            <li className="nav-li">
                <Link
                    href="/search"
                    className={classNames(bold.className, 'nav-li')}
                    onClick={() => setNavbarOpen(false)}
                >
                    სტატიები
                </Link>
            </li>
            <li className="nav-li">
                <Link
                    href="/search"
                    className={classNames(bold.className, 'nav-li')}
                    onClick={() => setNavbarOpen(false)}
                >
                    წიგნები
                </Link>
            </li>
            <li className="nav-li">
                <Link
                    href="/search"
                    className={classNames(bold.className, 'nav-li')}
                    onClick={() => setNavbarOpen(false)}
                >
                    საგალობლები
                </Link>
            </li>
            <li className="nav-li">
                <Link
                    href="/cources"
                    className={classNames(bold.className, `${pathname === '/cources' && 'text-bg'}`)}
                    onClick={() => setNavbarOpen(false)}
                >
                    კურსები
                </Link>
            </li>
            <li className="nav-li">
                <Link
                    href="/about"
                    className={classNames(bold.className, `${pathname === '/about' && 'text-bg'}`)}
                    onClick={() => setNavbarOpen(false)}
                >
                    ჩვენ შესახებ
                </Link>
            </li>
            <li className="nav-li">
                <Link
                    href="/contact"
                    className={classNames(bold.className, `${pathname === '/contact' && 'text-bg'}`)}
                    onClick={() => setNavbarOpen(false)}
                >
                    კონტაქტი
                </Link>
            </li>
        </ul>

    </nav>
  )
}

export default MenuOverlay