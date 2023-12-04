import React from 'react'

type Props = {
  text: string
}
function BorderButton({text}: Props) {
  return (
    <div className='group hidden md:block w-fit'>
        <button className='py-1.5 px-5 rounded-md border-2 border-[#1E5B94] group-hover:bg-[#1E5B94] transition-colors duration-200 ease-in-out'>
            <p className='font-bold text-xs uppercase tracking-tight group-hover:text-white transition-colors duration-200 ease-in-out'>{text}</p>
        </button>
    </div>
  )
}

export default BorderButton