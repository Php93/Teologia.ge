import Link from 'next/link'
import React from 'react'
import urlFor from '../lib/urlFor'
import { Image, Post } from '../typings'

type Props = {
    data: Post
}

function ArticleBlock({data: {title, author, _createdAt, mainImage, slug, body}}: Props) {
  return (
    <Link href={`/article/${slug.current}`} prefetch={true} className="group shadow-xl">
        <div className='block bg-transparent w-52 sm:w-56 lg:w-60 2xl:w-64'>

            <div className='bg-white px-5 py-5 rounded-tr-lg rounded-tl-lg group-hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
                <h3 className='h-14 flex items-center justify-center text-sm text-center sm:text-base'>
                    {title}
                </h3>
                
                <div className='flex justify-center items-center mt-5 mb-3'>
                    <img className='w-9 h-9 rounded-full' src={urlFor(author.image).url()} />
                    <p className='text-xs text-gray-500 ml-2'>{author.title}</p>
                </div>

                <p className='text-sm text-gray-500 text-center'>{new Date(_createdAt).toLocaleDateString()}</p>
            </div>

            <img className='w-64 rounded-br-lg rounded-bl-lg xl:w-72 2xl:w-64' src={urlFor(mainImage).url()} />
        </div>
    </Link>
  )
}

export default ArticleBlock