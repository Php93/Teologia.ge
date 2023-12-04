import React from 'react'

type Props = {
    text: string
}
function FillButton({text}: Props) {
  return (
    <div className='group hidden md:block'>
      <button className='py-1.5 px-5 rounded-md bg-[#1E466B] group-hover:opacity-80 transition-opacity duration-200 ease-in-out'>
          <p className='font-bold text-white text-sm uppercase'>{text}</p>
      </button>
    </div>
  )
}

export default FillButton