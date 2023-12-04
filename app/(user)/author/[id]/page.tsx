import Header from '../../../../components/Header'
import { client } from '../../../../lib/sanity.client'
import { Author, Post } from '../../../../typings'
import Image from 'next/image'
import urlFor from '../../../../lib/urlFor'
import classNames from 'classnames'
import { bold, medium } from '../../../../fonts'
import Head from 'next/head'
import SearchResults from '../../../../components/SearchResults'
import Footer from '../../../../components/Footer'
const { groq } = require('next-sanity')


export const revalidate = 3600
export async function generateMetadata({params: {id}}: Props) {
    const data: Author = await client.fetch(query, {id})
      
    return {
      title: `${data.title} - ალესე შენი ხმალი`,
      description: data.bio
    }
}

type Props = {
    params: {
        id: string
    }
}

const query = groq`*[_type == "authors" && _id == $id][0]`
const query1 = groq`*[_type in ["posts", 'books'] && author._ref == $id]{
    ...,
    author ->,
    categories[] ->,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
}`

async function Author({params: {id}}: Props) {
    const author: Author = await client.fetch(query, {id})
    const data: [Post] = await client.fetch(query1, {id})

  return (
    <div className=''>
        <Header/>

        <div className='mt-28 max-w-4xl mx-auto md:px-5'>
            <div className='flex flex-col items-start md:flex-row'>
                <div className='flex items-center justify-center w-full md:justify-start md:w-max'>
                    <Image className='w-16 h-16 rounded-full sm:w-20 sm:h-20' src={urlFor(author.image).url()} alt="" width={500} height={500}/>
                    <h1 className={'text-xl ml-6 sm:text-2xl'}>{author.title}</h1>
                </div>

                <div className='flex-1 px-3 mt-8 text-center text-sm sm:px-10 md:px-0 md:mt-0 md:pl-16 md:text-left'>
                    <p className={classNames(medium.className, '')}>{author.bio}</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col items-center mt-20'>
            <SearchResults data={data!} />
        </div>

        <Footer/>
    </div>
  )
}

export default Author