"use client"
import { Book, Hymn, Post } from "../typings"
import Image from 'next/image'
import urlFor from "../lib/urlFor"
import categories from "../schemas/categories"
import classNames from "classnames"
import { bold, medium } from "../fonts"
import { MagnifyingGlassIcon, DocumentTextIcon, BookOpenIcon, MusicalNoteIcon } from '@heroicons/react/24/solid'
import Link from "next/link"
import { useEffect, useMemo, useState } from "react"
import shuffle from "../hooks/useShuffle"
import { usePathname } from 'next/navigation';
import Pagination from '../hooks/Pagination'

type Props = {
    data: any
}
let PageSize = 5;

function SearchResults({data}: Props) {
    const pathname = usePathname()
    const [currentPage, setCurrentPage] = useState(1);
    const [pageData, setPageData] = useState([]);
    
  useEffect(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    setPageData(data.slice(firstPageIndex, lastPageIndex))
  }, [data, pathname, currentPage])

  return (
    <div className="min-w-50">
        {data.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-16">
                <MagnifyingGlassIcon className="w-6 h-6 text-main" />
                <h3>No matching results</h3>
                <p className={classNames(medium.className, 'text-sm text-gray-600')}>თქვენმა საძიებო მოთხოვნამ შედეგი არ (ზმნა აქ)</p>
            </div>  
        ) : (
            <div className="min-w-50">
                {pageData.filter((doc: any) => doc._type === "posts").map((doc: any) => (
                    <Link key={doc._id} href={`/article/${doc.slug.current}`}>
                        <div className="block w-fit bg-white md:flex flex-row-reverse md:h-60 md:mb-7 md:shadow-lg md:rounded-xl">
                            <div className="w-screen h-[calc(56.25vw-22.5px)] bg-center bg-no-repeat bg-cover md:w-60 md:h-60 md:rounded-tr-xl md:rounded-br-xl" style={{backgroundImage: `url(${urlFor(doc.mainImage).url()})`}}/>

                            <div className="px-5 py-5 xs:px-8 md:flex-1 md:w-block md:py-8">
                                <div className="flex items-center mb-2">
                                    <DocumentTextIcon className="text-lg text-main mr-2 w-6 h-6" />
                                    <p className="text-sm text-gray-500">{doc.estimatedReadingTime} წთ</p>
                                </div>
                                <div className="mb-3">
                                    <h2 className="py-3">{doc.title}</h2>
                                    <p className={classNames(medium.className, "text-sm line-clamp-2")}>{doc.body[0].children[0].text}</p>
                                </div>

                                <hr className="py-2"/>

                                <Link href={`/author/${doc.author._id}`}>
                                    <div className="flex items-center mt-2">
                                        <Image className="rounded-full w-7 h-7" src={urlFor(doc.author.image).url()} width={500} height={500} alt="" />
                                        <div>
                                            <p className="ml-3 text-gray-500">{doc.author.title}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Link>
                ))} 
                
                {pageData.filter((doc: any) => doc._type === "books").map((doc: Book) => (
                    <Link key={doc._id} href={`/book/${doc._id}`}>
                        <div className="bg-white block w-fi md:flex flex-row-reverse md:h-60 md:mb-7 md:shadow-lg md:rounded-xl">
                            <div className="bg-gray-100 flex justify-center py-6 md:w-60 md:h-60 md:rounded-tr-xl md:rounded-br-xl">
                                <Image className="w-1/3 drop-shadow-3xl md:w-[55%]" src={urlFor(doc.mainImage[0]).url()} width={500} height={500} alt="" />
                            </div>
        
                            <div className="px-5 py-5 xs:px-8 md:flex-1 md:w-block md:py-8">
                                <div className="flex items-center mb-2">
                                    <BookOpenIcon className="text-lg text-main mr-2 w-6 h-6" />
                                    <p className="text-xs xs:text-sm text-gray-500">წიგნი</p>
                                </div>
                                <div className="mb-5">
                                    <h2 className="py-3">{doc.title}</h2>
                                    <p className={classNames(medium.className, 'line-clamp-2 text-sm')}>{doc.description}</p>
                                </div>
        
                                <hr className="py-2"/>
        
                                <div className="flex justify-between items-center">
                                    <Link href={`/author/${doc.author._id}`}>
                                        <div className="flex items-center">
                                            <Image className="rounded-full w-7 h-7" src={urlFor(doc.author.image).url()} width={500} height={500} alt="" />
                                            <div>
                                                <p className="text-sm ml-2 text-gray-500 xs:text-base xs:ml-3">{doc.author.title}</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div>
                                        <p>{doc.price}&#8382;</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
        
                {pageData.filter((doc: any) => doc._type === "hymns").map((doc: Hymn) => (
                    <Link key={doc._id} href={`/hymn/${doc.slug.current}`}>
                        <div className="bg-white w-fit md:flex flex-row-reverse md:h-60 md:mb-7 md:shadow-lg md:rounded-xl">
                            <div className="w-screen h-[calc(56.25vw-22.5px)] bg-center bg-no-repeat bg-cover md:w-60 md:h-60 md:rounded-tr-xl md:rounded-br-xl" style={{backgroundImage: `url(${urlFor(doc.mainImage).url()})`}}/>
                            
                            <div className="px-5 py-5 xs:px-8 md:flex-1 md:w-block md:py-8">
                                <div className="flex items-center mb-2">
                                    <MusicalNoteIcon className="text-lg text-main mr-2 w-6 h-6" />
                                    <p className="text-xs xs:text-sm text-gray-500">საგალობელი</p>
                                </div>
                                <div className="md:mt-5">
                                    <h2 className="text-lg md:text-xl md:mb-2">{doc.title}</h2>
                                    <p className="text-gray-600">#{doc.number}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        )}

        <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page: number) => setCurrentPage(page)}
        />
    </div>
  )
}

export default SearchResults