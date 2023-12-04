import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import Header from '../../../../components/Header'
import { bold } from '../../../../fonts'
import { client } from '../../../../lib/sanity.client'
import urlFor from '../../../../lib/urlFor'
import { Hymn } from '../../../../typings'
import {MusicalNoteIcon} from '@heroicons/react/24/solid'
import PhotoViewer from '../../../../components/PhotoViewer'
import Footer from '../../../../components/Footer'
const { groq } = require('next-sanity')

export const revalidate = 3600
export async function generateMetadata({params: {slug}}: Props) {
    const data: Hymn = await client.fetch(query, {slug})
      
    return {
      title: `#${data.number} - ${data.title}`,
    }
}

type Props = {
  params: {
    slug: string
  }
}
const query = groq`*[_type == "hymns" && slug.current == $slug][0]`
async function HymnPage({params: {slug}}: Props) {
  const hymn: Hymn = await client.fetch(query, {slug})

  return (
    <div className='min-w-50'>
      <Header/>
      
      <div className='max-w-7xl mx-auto mt-24'>
        <div className='flex flex-col items-center justify-centers'>
          <div className='text-center'>
            <h1 className={classNames(bold.className, 'text-2xl mt-2 sm:text-2xl lg:text-3xl')}>
              {hymn.title}
            </h1>
            <p className={'text-xl text-gray-500 flex items-center justify-center'}>
              <MusicalNoteIcon className='mr-3 text-black' width={24} height={24}/>
              #{hymn.number}
            </p>
          </div>

          <Image className='mt-10 lg:rounded-lg' src={urlFor(hymn.mainImage).url()} alt="" width={900} height={800} />
        </div>

        <div className='px-5 mt-24 lg:px-24'>
          <h3 className='text-lg mt-10 tracking-tighter'>დამატებითი რესურსი:</h3>

          <div className='flex items-start overflow-x-scroll scrollbar-hide'>
            <PhotoViewer images={hymn.notes}/>
          </div>
        </div>

      </div>
      
      <Footer/>
    </div>
  )
}

export default HymnPage