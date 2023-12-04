"use client"
import { useState } from 'react'
import { Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import HeaderLink from './HeaderLink'
import DropDownLink from './DropDownLink'
import {inter, medium, regular} from '../fonts/index'  
import {useScrollPosition} from '../hooks/useScrollPosition'
import { IonIcon } from '@ionic/react'
import { book } from 'ionicons/icons'
import { usePathname, useSearchParams, useRouter, redirect } from 'next/navigation'
import classNames from 'classnames'
import { useDataContext } from '../context/store'
import MenuOverlay from './MenuOverlay'

function Header() {
  const pathname = usePathname()
  const params = useSearchParams()
  const router = useRouter()
  const scrollPosition = useScrollPosition()
  
  const [input, setInput] = useState(params.get('q'))
  const [navbarOpen, setNavbarOpen] = useState(false);
  const query = params.get('q')
  const author = params.get('author')
  const type = params.get('type')

  return (
    <div className={`fixed w-full top-0 z-50 ${pathname === '/about' && '!static'} ${pathname != '/' && '!bg-white !shadow-md'} ${scrollPosition > 30 && pathname === "/" ? 'bg-white shadow-md' : "bg-transparent shadow-none"} transition-colors duration-300 ease-in-out`}>
      <header className={classNames(`text-main max-w-7xl mx-auto relative`, regular.className)}>
        <div className='grid grid-cols-6 items-center px-5 p-4 min-[500px]:px-10'>
          <div className={`col-span-1 flex items-center absolute z-50 transition-all duration-300 ease-in-out ${navbarOpen && 'text-white'}`}>
            <Link className='flex' href={"/"}>
              <IonIcon className={`text-3xl hover:opacity-80 transition-opacity duration-500 ease-in-out`} icon={book} />
            </Link>
          </div>
          
          {pathname === '/search' ? (
            <div className='max-[385px]:hidden col-start-2 col-span-4 flex items-center justify-center flex-1 border rounded-full px-5 py-0.5 bg-gray-100'>
              <input 
                onKeyPress={(e) => {
                  if(!input) return
                  if(query === input) return

                  if (e.key === 'Enter') {
                    router.push(`/search?q=${input}`)
                  }
                }} 
                value={input!} onChange={(e) => setInput(e.target.value)} 
                className={classNames(medium.className, 'flex-1 text-sm border-none focus:outline-none text-black placeholder:text-gray-600 bg-transparent border-transparent focus:border-transparent focus:ring-0')} 
                placeholder='ძებნა'
              />
              
              <a href={input! && `/search?q=${input}`}> 
                <MagnifyingGlassIcon className={`text-gray-600 w-5 h-5 ${!input && 'text-gray-300 cursor-not-allowed'}`}/>
              </a>
            </div>
          ) : (
            <div className='col-start-2 col-span-4 hidden md:flex flex-1 justify-center items-center space-x-5 lg:space-x-10'>
              <HeaderLink text={"მთავარი"} href={"/"} />
              <DropDownLink text={"მატერიალები"} href={"/materials"} />
              <HeaderLink text={"ჩვენ შესახებ"} href={"/about"} />
              <HeaderLink text={"კონტაქტი"} href={"/contact"} />
            </div>
          )}

          <div className='col-start-6 flex justify-end items-center space-x-5 pr-4'>
            <Link href="/search" className={`block ${pathname === '/search' && "min-[385px]:hidden"}`}>
              <MagnifyingGlassIcon className='w-6 h-6'/>
            </Link>

            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={() => setNavbarOpen} />

            <Link href="/login" className="hidden group md:inline-flex items-center justify-center rounded-full bg-main px-4 py-2.5 text-white transition hover:opacity-90">
              <span className='text-xs -mb-0.5'>შესვლა</span>
              <svg className="mt-0.5 ml-2 -mr-1 stroke-white stroke-2" fill="none" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                <path className="opacity-0 transition group-hover:opacity-100" d="M0 5h7"></path>
                <path className="transition group-hover:translate-x-[3px]" d="M1 1l4 4-4 4"></path>
              </svg>
            </Link>

            <button onClick={() => setNavbarOpen(!navbarOpen)} className='md:hidden right-8'>
              <div className={`absolute rig z-50`}>
                <span className={`absolute h-0.5 w-5 bg-main transform transition duration-300 ease-in-out ${navbarOpen ? "rotate-45 delay-200 !bg-white" : "-translate-y-1.5"}`}/>
                <span className={`absolute h-0.5 bg-main transform transition-all duration-200 ease-in-out ${navbarOpen ? "w-0 opacity-50 !bg-white" : "w-5 delay-200 opacity-100"}`}/>
                <span className={`absolute h-0.5 w-5 bg-main transform transition duration-300 ease-in-out ${navbarOpen ? "-rotate-45 delay-200 !bg-white" : "translate-y-1.5"}`}/>
              </div>
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header