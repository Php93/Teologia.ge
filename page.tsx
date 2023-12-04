import Image from "next/image"
import Link from "next/link"
import Header from "./components/Header"
import { client } from "./lib/sanity.client"
import urlFor from "./lib/urlFor"
import { Book } from "./typings"
import Slider from "./components/Slider"
import classNames from "classnames"
import { bold, medium } from "./fonts"
import Footer from "./components/Footer"
const { groq } = require('next-sanity')

type Props = {
    params: {
        id: string
    }
}
const query = groq`*[_type == "books" && _id == $id][0]{
    ...,
    author ->,
}`
async function Book({params: {id}}: Props) {
    const book: Book = await client.fetch(query, {id})

  return (
    <div className="min-w-50">
        <Header/>

        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto mt-24 gap-5 pb-5 md:grid md:grid-cols-12 md:items-start">
            <div className="col-span-6 px-9">
                <Slider images={book.mainImage} />
            </div>

            <div className="col-span-6 mt-5 px-6 py-2">
                <h1 className={classNames(bold.className, 'text-3xl')}>{book.title}</h1>
                <p className={classNames(medium.className, 'leading-snug mt-3')}>{book.description}</p>

                <Link href={`/author/${book.author._id}`} className="flex items-center mt-9">
                    <Image className="rounded-full w-10 h-10 mr-3" src={urlFor(book.author.image).url()} alt="" width={500} height={500} />
                    
                    <div>
                        <p>{book.author.title}</p>
                    </div>

                </Link>

                <p className="text-xl mt-6">ფასი - {book.price}&#8382;</p>
            </div>
        </div>

        <Footer/>
    </div>
  )
}

export default Book