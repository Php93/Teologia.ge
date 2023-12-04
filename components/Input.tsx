import classNames from "classnames"
import Link from "next/link"
import { medium } from "../fonts"

type Props ={
  label: string,
  placeholder: string
  forgot?: boolean
}

function Input({label, placeholder, forgot}: Props) {
  return (
    <div className={classNames("relative", medium.className)}>
      <div className="flex justify-between">
        <label className="text-[14px]">{label}</label>
        {forgot && <Link href={'#'} className="text-gray-600 text-[14px] hover:underline">დაგავიწყდა პაროლი?</Link>}
      </div>
      <input className="border border-solid border-gray-600 shadow-sm rounded-md relative w-full mt-1 px-4 py-2 text-sm" type="text" placeholder={placeholder} />
    </div>
  )
}

export default Input