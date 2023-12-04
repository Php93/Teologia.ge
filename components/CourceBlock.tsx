import classNames from 'classnames'
import React from 'react'
import { medium } from '../fonts'

type Props = {
  img: string,
  title: string,
  lessons: string[]
}
function CourceBlock({img, title, lessons}: Props) {
  return (
    <div className='flex flex-col bg-gray-100 w-[calc(100vw - 25px)] pb-8 rounded-2xl xs:w-auto mb-5'>
      <img className='w-full rounded-tr-2xl rounded-tl-2xl' src={img} />
      <h1 className='mt-5 text-center px-2'>{title}</h1>

      <div className='px-2 mt-5 md:px-5'>
        {lessons.map((lesson, index: number) => (
          <li key={index} className={classNames(medium.className, 'text-sm mt-1')}>{lesson}</li>
        ))}
      </div>
  
    </div>
  )
}

export default CourceBlock