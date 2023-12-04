"use client"   

import Image from 'next/image'
import React from 'react'
import Header from '../../components/Header'
import { bold, medium, regular } from '../../fonts'
import image from '../../public/mainImage.png'
import courses from '../../public/courses.jpg'
import ArticleBlock from '../../components/ArticleBlock'
import AnimatedLink from '../../components/AnimatedLink'
import { client } from '../../lib/sanity.client'
import FeaturedEvent from '../../components/FeaturedEvent'
import EventBlock from '../../components/EventBlock'
import classNames from 'classnames'
import HymnBlock from '../../components/HymnBlock'
import hymn1 from '../../public/hymn1.jpg'
import hymn2 from '../../public/hymn2.jpg'
import hymn3 from '../../public/hymn3.jpg'
import BookBlock from '../../components/BookBlock'
import book1 from '../../public/book1.jpg'
import book2 from '../../public/book2.jpg'
import aboutUs from '../../public/aboutUs.jpg'
import Footer from '../../components/Footer'
import useSWR from 'swr'
import { Hymn, IData, Post } from '../../typings'
import { useDataContext } from '../../context/store'

function Page() {
  const {data} = useDataContext()
  
  if(!bold) return <p>Loading...</p>

  return (
      <div className={classNames('min-w-50', regular.className)}>
        <Header />
        
        <div className='bg-bg text-main relative overflow-hidden py-24 sm:py-32'>
          <div className='block justify-between max-w-7xl mx-auto items-center px-10 lg:flex'>
            <div className='font-bold text-center text-sm lg:text-left'>
              <h1 className={classNames(bold.className, 'select-none text-4xl min-[550px]:text-5xl sm:text-6xl lg:text-7xl tracking-tighter max-w-2xl mx-auto font-black pointer-events-none')}>ალესე შენი ხმალი</h1>
              <p className={classNames(medium.className, 'font-normal select-none')}>იმის მეშვეობით, რომ რეგულარულად დაესწრებით ამ საითს.</p>

              <div className='mt-14 w-fit mx-auto lg:mx-0'>
                <AnimatedLink text='კითხვა' iconColor={'#1E5B94'} href="/" />
              </div>
            </div>

            <Image className='select-none hidden w-2/5 pointer-events-none lg:block' src={image} alt=""/>
          </div>
        </div>

        <div className='py-10 flex flex-col'>
          <div className='flex my-16 px-6 space-x-3 overflow-x-scroll overflow-y-auto sm:space-x-5 md:justify-center lg:overflow-x-auto lg:w-full lg:space-x-16'>
            {data.posts?.map((post: Post) => (
              <ArticleBlock key={post._id} data={post} />
            ))}
          </div>
        </div>

        <div className={classNames(medium.className, 'bg-[#FAF7F2]')}>
          <div className='flex flex-col items-center justify-around font-normal md:flex-row md:px-10 md:py-10 lg:max-w-7xl lg:mx-auto xl:space-x-8'>
            <Image className='rounded-md w-screen md:w-1/2' src={courses} alt="" width={1000} height={1000} />
            
            <div className='px-5 py-10 text-center md:text-left md:py-0'>
              <p className='text-base text-orange-600 mb-2 lg:text-lg'>რაღაც ტექსტი რაღაც</p>
              <h3 className={classNames(regular.className, 'font-bold text-3xl tracking-tighter mb-1 sm:text-4xl md:text-3xl lg:text-4xl')}>სასწავლო კურსები</h3>
              <p className='text-gray-600 text-sm mb-12 sm:text-base md:text-sm lg:text-base'>ყოველი კურსი, თბილისის ბიბლიური ინსტიტუტში ჩამოყალიბებულია ისე, რომ დაგეხმაროთ, უფრო ეფექტურად გაიგოთ, ასწავლოთ და გამოიყენოთ სულის მახვილი თქვენს ცხოვრებასა და მსახურებაში.</p>
              
              <div className='w-fit mx-auto md:mx-0'>
                <AnimatedLink text='მეტის ნახვა' href="/cources" />
              </div>
            </div>
          </div>
        </div>

        <div className='py-20'>
          <FeaturedEvent/>
          
          <EventBlock date="თვე რიცხვი - თვე რიცხვი" title="ლევიანების წიგნი" author="ავტორი ავტორი" />
          <EventBlock date="თვე რიცხვი - თვე რიცხვი" title="ლევიანების წიგნი" author="ავტორი ავტორი" />
          <EventBlock date="თვე რიცხვი - თვე რიცხვი" title="ლევიანების წიგნი" author="ავტორი ავტორი" />
        </div>

        <div className='px-5 md:px-16 mb-20 max-w-5xl mx-auto'>
          <div className="before:content-[''] before:block before:w-8 before:h-[3px] before:bg-[#20578B] before:mr-3 text-[#20578B] flex items-center text-base mb-3 sm:text-lg lg:mb-5">საგალობლები</div>
          <div className='flex justify-center'>
            <div className='flex items-start space-x-4 overflow-x-auto scrollbar-hide py-2 sm:space-x-6 lg:space-x-8'>
              {data.hymns?.slice(0, 3).map((hymn: Hymn) => (
                <HymnBlock key={hymn._id} number={hymn.number} title={hymn.title} img={hymn.mainImage} notes={hymn.notes} link={hymn.link} slug={hymn.slug}  />
              ))}
            </div>
          </div>
        </div>
        
        <div className='bg-[#FAF7F2]'>
          <div className='flex flex-col max-w-7xl mx-auto px-4 py-16 xs:px-8 sm:px-10 md:px-20 lg:flex-row lg:items-center'>
            <div className='pr-5 h-full border-b-2 pb-5 lg:border-b-0 lg:pb-0 xl:pr-10'>
              <h2 className='text-xl sm:text-2xl'>წიგნები თქვენთვის</h2>
              <p className={classNames(medium.className, 'font-normal text-sm text-gray-600 mb-3')}>რაღაც ტექსტი რაღაც ტექსტი რაღაც ტექსტი რაღაც ტექსტი</p>
              <AnimatedLink text='მეტი' href="/search?type=books" />
            </div>
            
            <div className='flex justify-center lg:px-10 lg:flex-1 lg:border-l-2'>
              <div className='flex items-center my-16 px-3 space-x-8 overflow-x-auto scrollbar-hide md:space-x-12 lg:my-0'>
                <BookBlock title="უცხო ცეცხლი" price={40} author="ჯონ მაკარტური" img={book1} />
                <BookBlock title="უცხო ცეცხლი" price={40} author="ჯონ მაკარტური" img={book1} />
                <BookBlock title="უცხო ცეცხლი" price={40} author="ჯონ მაკარტური" img={book1} />
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center py-8 mt-10 md:px-36 lg:px-10 lg:flex-row xl:px-20'>
          <Image className='w-screen shadow-[#747474] object-cover md:w-full lg:w-1/2' src={aboutUs} alt="" />

          <div className='px-3 mt-5 xs:px-5 md:px-10'>
            <h3 className={"font-bold text-xl mb-2 xs:text-2xl"}>ჩვენი მისია</h3>
            <p className={classNames(medium.className, 'text-sm xs:text-base')}>
              ეფექტური ქრისტიანული ცხოვრებისა და მსახურებისთვის საჭიროა რომ ზუსტად <span className={'text-[#1E5B94] underline underline-offset-4'}>განმარტოდ</span>, <span className={'text-[#1E5B94] underline underline-offset-4'}>გადასცეთ</span> და <span className={'text-[#1E5B94] underline underline-offset-4'}>ცხოვრებაში განახორციელოდ</span> ღვთის სიტყვის ჭეშმარიტება.
            </p>

            <p className={classNames(medium.className, 'text-xs text-right mt-5 xs:text-sm')}>...აიღეთ სულის მახვილი, რომელიც არის ღმერთის სიტყვა - ეფესელთა 6:17</p>
          </div>
        </div>

        <Footer />
      </div>
  )
}

export default Page