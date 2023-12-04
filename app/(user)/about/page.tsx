'use client'
import classNames from 'classnames'
import React from 'react'
import { Parallax, ParallaxProvider, ParallaxBannerLayer } from 'react-scroll-parallax'
import Header from '../../../components/Header'
import { bold, medium } from '../../../fonts'
import image from '../../../public/about.jpg'
import knight from '../../../public/knight.png'

function About() {
  return (
    <ParallaxProvider>
      <div className='min-w-50'>
        <div className=''>
          <div className='h-[30vh] bg-black'>
            <Header/>
          </div>
        
          <div className='h-[200vh] bg-center bg-no-repeat bg-cover relative' style={{backgroundImage: `linear-gradient( rgba(0, 0, 0), rgba(0, 0, 0, 0) ), url(${image.src})`}}>
            <div className={classNames('w-full flex justify-center items-center text-8xl xl:text-9xl text-white absolute bottom-[33rem]', bold.className)}>
              <Parallax>
                <span>ჩ</span>
              </Parallax>
              <Parallax  translateY={[25, -25]}>
                <span>ვ</span>
              </Parallax>
              <Parallax translateY={[50, -50]}>
                <span>ე</span>
              </Parallax>
              <Parallax translateY={[100, -100]}>
                <span>ნ</span>
              </Parallax>
              <Parallax translateY={[125, -125]}>
                <span>ი</span>
              </Parallax>
              <br/>
              <Parallax translateY={[150, -150]}>
                <span className='ml-8'>მ</span>
              </Parallax>
              <Parallax translateY={[175, -175]}>
                <span>ი</span>
              </Parallax>
              <Parallax translateY={[200, -200]}>
                <span>ს</span>
              </Parallax>
              <Parallax translateY={[225, -225]}>
                <span>ი</span>
              </Parallax>
              <Parallax translateY={[250, -250]}>
                <span>ა</span>
              </Parallax>
              <Parallax translateY={[275, -275]}>
                <span>ა</span>
              </Parallax>
            </div>
          </div>
          <div className='min-h-screen bg-black relative pb-20'>
            <div className='w-full absolute top-60 flex justify-center items-center text-white text-8xl xl:text-9xl'>
              <Parallax  translateX={[-30, -5]}>
                <h1 className={bold.className}>და</h1>
              </Parallax>

              <Parallax translateX={[30, 5]}>
                <h1 className='italic'>ხედვა</h1>
              </Parallax>
            </div> 
          </div>

          <div className='min-h-screen bg-main'>
            <div className='flex flex-col justify-center items-center h-screen'>
              <h1 className='text-5xl text-white tracking-tighter'>ეკლესიები</h1>
              <p className={classNames(medium.className, 'max-w-2xl text-lg text-center text-gray-300 leading-7 mt-5')}>ემსახუროს ადგილობრივ ეკლესიებს ქრისტიანი მწყემსების, მასწავლებლებისა და მსახურ-ხელმძღვანელების მოწაფეებითა და აღჭურვით, რომლებიც იმუშავებენ სახარების ზრდისა და წინსვლისთვის საქართველოში და მთელ მსოფლიოში.</p>
            </div>
          </div>
          <div className='min-h-screen bg-[#B32252]'>
            <div className='flex flex-col justify-center items-center h-screen'>
              <h1 className='text-5xl text-white tracking-tighter'>ლიდერები</h1>
              <p className={classNames(medium.className, 'max-w-2xl text-lg text-center text-white leading-7 mt-5')}>„ტიმოთეს“ ლიდერების თაობის განვითარება - ავთენტური, მორჩილი, ერთგული, შრომისმოყვარე, თავგანწირული, თავგანწირული, თავმდაბალი, გამრავლება, მსახური.</p>
            </div>
          </div>
          <div className='min-h-screen bg-[#2784A5]'>
            <div className='flex flex-col justify-center items-center h-screen'>
              <h1 className='text-5xl text-white tracking-tighter'>ქვეყანა</h1>
              <p className={classNames(medium.className, 'max-w-2xl text-lg text-center text-white leading-7 mt-5')}>უზრუნველყოს ქართულ ენაზე სასულიერო და მსახურების ლიტერატურის მზარდი ციფრული და ფიზიკური ბიბლიოთეკა.</p>
            </div>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  )
}

export default About