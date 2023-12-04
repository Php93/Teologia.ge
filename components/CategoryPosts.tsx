'use client'
import classNames from "classnames";
import { useDataContext } from "../context/store";
import { bold, medium } from "../fonts";
import { Category, Post } from "../typings";
import ArticleBlock from "./ArticleBlock";

type Props = {
  postId: string
}
function CategoryPosts({postId}: Props) {
    const {data} = useDataContext();
    const postCategories = data.posts?.flatMap(post => post.categories)
    const categories = data.posts?.filter(post => post._id === postId).flatMap(post => post.categories)
    const result = data.posts?.filter(post => post.categories?.some(category => categories?.some(postca => category._id === postca._id && post._id != postId))).slice(0,3)

  return (  
    <>
      {result?.length! > 0 && (
        <div className="bg-bg mb-10">
          <hr className="max-w-6xl mx-auto border border-gray-700/20"/>
          <div className="block lg:flex justify-between items-center lg:space-x-6 max-w-7xl mx-auto py-16 px-5 xs:px-10">
            <div style={{flex: 0.5}}>
              <h3 className={classNames(bold.className, 'mt-2 text-xl xs:text-2xl')}>მეტი ამ თემაზე</h3>
              <p className={classNames(medium.className, 'mt-3 text-sm line-clamp-4')}>გაიგეთ  მეტი ამ თემის შესახებ</p>
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

export default CategoryPosts