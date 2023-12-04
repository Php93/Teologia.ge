"use client"
import React from 'react'
import { EnvelopeOpenIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import { bold, medium } from '../fonts'
import FooterLink from './FooterLink'
import Link from 'next/link'
import { IonIcon } from '@ionic/react'
import { logoFacebook } from 'ionicons/icons'
import { logoInstagram } from 'ionicons/icons'

function Footer() {
  return (
    <footer className='bg-[#FAF7F2] mt-10 min-w-50'>
        <div className='max-w-5xl mx-auto py-20'>
            <div className='grid grid-cols-1 px-5 space-y-8 xs:px-10 sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                <div className='sm:mb-8 lg:mb-0'>
                    <p className='footer_link_header'>ბმულები</p>
                    <div>
                        <FooterLink text='სტატიები' link="/search?type=posts" />
                        <FooterLink text='საგალობლები' link="/search?type=hymns" />
                        <FooterLink text='წიგნები' link="/search?type=books" />
                        <FooterLink text='სასწავლო პროგრამები' link="/cources" />
                        <FooterLink text='ჩვენ შესახებ' link="/about" />
                    </div>
                </div>

                <div>
                    <p className='footer_link_header'>ღონისძიებები</p>
                    <div>
                        <FooterLink text='იუდა მოციქულის წერილი' link="/" date={"ივნისი 2021"} />
                        <FooterLink text='ლევიანების წიგნი' link="/" />
                        <FooterLink text='ლევიანების წიგნი' link="/" />
                        <FooterLink text='ლევიანების წიგნი' link="/" />
                    </div>
                </div>

                <div>
                    <p className='footer_link_header'>დაგვიკავშირდით</p>
                    <div>
                        <FooterLink text='info@theology.ge' link="mailto:info@theology.ge" />
                        <FooterLink text='+995 555 55 55 55' link="callto:+995555555555" />
                        <FooterLink text='Tbilisi Church' link="https://goo.gl/maps/7NL4KfR3WLdtpwnK8" />
                    </div>
                </div>
            </div>

            <hr className='my-5'/>
            
            <div className='flex flex-col px-5 mt-5 xs:flex-row xs:items-center xs:justify-between xs:px-10'>
                <p className='text-xs mb-5 text-[#949494] xs:mb-0 sm:text-sm'>
                    ©{new Date().getFullYear().valueOf()} by Tbilisi Bible Institute
                </p>


                <div className='flex space-x-5'>
                    <Link href={"/"}>
                        <IonIcon className='text-2xl text-[#949494] hover:text-black' icon={logoFacebook} />
                    </Link>

                    <Link href={"/"}>
                        <IonIcon className='text-2xl text-[#949494] hover:text-black' icon={logoInstagram} />
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer