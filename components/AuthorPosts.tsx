"use client"

import { PortableText } from "@portabletext/react";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useDataContext } from "../context/store";
import { bold, medium } from "../fonts";
import { Author, Post } from "../typings";
import AnimatedLink from "./AnimatedLink";
import ArticleBlock from "./ArticleBlock";
import { RichTextComponents } from "./RichTextComponents";

type Props = {
  author: Author,
  postId: string
}
function AuthorPosts({author, postId}: Props) {
  const {data} = useDataContext();
  const postIndex = data.posts?.findIndex((post) => post._id === postId)
  const authorPosts = data.posts?.filter((post) => post.author._id === author._id)
  const result = authorPosts?.filter(object => object._id !== postId).slice(0, 2)

  return (
    <>
      {result?.length! > 0 && (
        <div className="bg-bg mt-5">
          <div className="block lg:flex justify-between items-center lg:space-x-6 max-w-7xl mx-auto py-16 px-5 xs:px-10">
            <div style={{flex: 0.5}}>
              <p className='text-gray-700 text-sm'>პოსტები ამ ავტორისგან</p>
              <h3 className={classNames(bold.className, 'mt-2 text-xl xs:text-2xl')}>{author.title}</h3>
              <p className={classNames(medium.className, 'mt-3 mb-5 text-sm line-clamp-4')}>{author.bio}</p>
              <AnimatedLink href={`/author/${author._id}`} text='მეტი'/>
            </div>  

            <div className='mt-12 flex flex-col items-center lg:flex-1 lg:mt-0'>
              <div className='flex items-center px-5 space-x-3 w-screen overflow-x-scroll scrollbar-hide overflow-y-auto sm:justify-center sm:space-x-5 lg:overflow-x-auto lg:w-full lg:space-x-5 lg:px-0'>
                {result?.map((post: Post) => (
                  <ArticleBlock key={post._id} data={post} />
                ))}
              </div>
            </div>

          </div>  
        </div>
      )}
    </>
  )
}

export default AuthorPosts