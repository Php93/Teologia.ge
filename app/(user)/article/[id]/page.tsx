"server-only"
import { PortableText } from '@portabletext/react'
import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import Header from '../../../../components/Header'
import { RichTextComponents } from '../../../../components/RichTextComponents'
import { bold, medium } from '../../../../fonts'
import { client } from '../../../../lib/sanity.client'
import urlFor from '../../../../lib/urlFor'
import { Category, Post } from '../../../../typings'
import Link from 'next/link';
import AuthorPosts from '../../../../components/AuthorPosts'
import Footer from '../../../../components/Footer'
import CategoryPosts from '../../../../components/CategoryPosts'
const { groq } = require('next-sanity')

export const revalidate = 3600
export async function generateMetadata({params: {id}}: Props) {
    const data: Post = await client.fetch(query, {id})
      
    return {
      title: data.title,
      description: data.body[0].children[0].text
    }
}


type Props = {
    params: {
        id: string
    }
}
const query = groq`
    *[_type == "posts" && slug.current == $id][0] {
        ...,
        author ->,
        categories[]->,
        "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
    }
`
async function Article({params: {id}}: Props) {
    const post: Post = await client.fetch(query, {id})

  return (
    <div className='pt-16 min-w-50'>
        <Header/>

        <div className='flex flex-col items-center justify-center max-w-7xl mx-auto mt-10'>
            <div className='text-center px-5'>
                <p className={classNames(medium.className, 'text-gray-500')}>{new Date(post._createdAt).toLocaleDateString()}  &#183; {post.estimatedReadingTime} წთ წასაკითხი</p>
                <h1 className={classNames(bold.className, 'text-xl mt-2 sm:text-2xl lg:text-3xl')}>{post.title}</h1>
            </div>

            <Link href={`/author/${post.author._id}`} className='flex items-center justify-center my-6'>
                <Image className='w-8 h-8 rounded-full' src={urlFor(post.author.image).url()} alt="" width={500} height={500}/>
                <p className='ml-2 text-sm xs:text-base hover:underline hover:decoration-main hover:text-main transition-all duration-200 ease-in-out'>{post.author.title}</p>
            </Link>

            <Image className='lg:rounded-lg' src={urlFor(post.mainImage).url()} alt="" width={900} height={800} />

            <div className={classNames(medium.className, 'my-10 max-w-3xl mx-auto px-4 xs:px-6')}>
                <PortableText components={RichTextComponents} value={post.body}/>
            </div>
        </div>

        <div>
            <AuthorPosts author={post.author} postId={post._id} />
            <CategoryPosts postId={post._id} />
        </div>

        <Footer/>

    </div>
  )
}

export async function generateStaticParams() {
    const query = groq`
        *[_type == 'posts'] {
            slug
        }
    `

    const slugs: [Post] = await client.fetch(query)
    const slugRoutes = slugs.map((slug) => slug.slug.current)

    return slugRoutes.map((slug) => ({id: slug}))
}

export default Article