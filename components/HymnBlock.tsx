import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'
import { medium } from '../fonts'
import {PlayCircleIcon} from '@heroicons/react/24/solid'
import { Image as ImageType, Slug } from '../typings'
import urlFor from '../lib/urlFor'

type Props = {
  number: number,
  title: string,
  img: any,
  notes: [ImageType],
  link: string,
  slug: Slug
}

function HymnBlock({number, title, img, notes, link, slug}: Props) {
  return (
    <Link href={`/hymn/${slug.current}`} className="group">
        <div className='flex flex-col w-[220px] xs:w-[250px]'>
          <div className=''>
            <Image className='w-[220px] xs:w-[250px] h-[250px] object-cover rounded-xl group-hover:opacity-70 transition duration-300' src={urlFor(img).url()} width={500} height={500} alt="" />
            {/* <div className='px-5 w-full flex opacity-0 group-hover:opacity-100 absolute bottom-4 transition duration-300 ease-in'>
              <PlayCircleIcon color='#fff' width={30} height={30} />
            </div> */}
          </div>

          <div>
            <p className={classNames(medium.className, 'mt-2')}>{title}</p>
            <span className='text-gray-600'>#{number}</span>
          </div>

        </div>
    </Link>
  )
}

export default HymnBlock