import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'
import { bold, medium } from '../../../fonts'
import Input from '../../../components/Input'
import classNames from 'classnames'
import Link from 'next/link'

function Login() {
  return (
    <div className="grid grid-cols-12 h-screen bg-login bg-cover bg-center">
        <div className="col-span-4 bg-white shadow-2xl p-8">
            <div>
                <Link className='flex' href={"/"}>
                    <ArrowLongLeftIcon className='w-6 h-6' />
                    <p className='pl-2'>უკან</p>
                </Link>
            </div>

            <div className='px-6'>
                <h3 className={classNames("text-center text-3xl mt-10 tracking-tighter", bold.className)}>გავაგრძელოთ</h3>
                <p className={classNames("text-center text-gray-700", medium.className)}>შედით თქვენს აკაუნთში</p>

                <div className='mt-8'>
                    <button className='flex items-center justify-center w-full bg-white border-2 border-gray-300 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300 ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>

                        <span className={classNames('text-sm text-center ml-2', medium.className)}>შესვლა Google-ით</span>
                    </button>


                    <button className='flex items-center justify-center w-full text-white bg-[#1877F2] hover:bg-[#1877F2]/80 border-2 py-2 mt-3 rounded-lg hover:bg-[#1877F2]-100 transition-all duration-300 ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6' viewBox="0,0,256,256" style={{fill: "#000000"}}>
                            <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(10.66667,10.66667)"><path d="M12,2c-5.523,0 -10,4.477 -10,10c0,5.013 3.693,9.153 8.505,9.876v-7.226h-2.474v-2.629h2.474v-1.749c0,-2.896 1.411,-4.167 3.818,-4.167c1.153,0 1.762,0.085 2.051,0.124v2.294h-1.642c-1.022,0 -1.379,0.969 -1.379,2.061v1.437h2.995l-0.406,2.629h-2.588v7.247c4.881,-0.661 8.646,-4.835 8.646,-9.897c0,-5.523 -4.477,-10 -10,-10z"></path></g></g>
                        </svg>

                        <span className={classNames('text-sm text-center ml-2', medium.className)}>შესვლა Facebook-ით</span>
                    </button>
                </div>

                <div className='flex items-center my-4'>
                    <hr className='w-full border border-gray-200' />
                    <span className={classNames('my-5 mx-4', medium.className)}>ან</span>
                    <hr className='w-full border border-gray-200'/>
                </div>

                <div className='flex flex-col gap-4'>
                    {/* <div className='flex justify-items-stretch'>
                        <Input label='სახელი' placeholder='ლავრენტი' />
                        <Input label='გვარი' placeholder='ქართლიშვილი' />
                    </div> */}

                    <Input label='E-mail' placeholder='you@example.com' />
                    <Input label='პაროლი' placeholder='•••••••••' forgot={true} />
                    <div/>
                    <button className='relative cursor-pointer space-x-2 text-center font-regular ease-out duration-200 rounded-lg outline-none transition-all outline-0 focus-visible:outline-4 focus-visible:outline-offset-1 border bg-blue-800 hover:bg-blue-800/80 text-white shadow-sm w-full flex items-center justify-center text-sm px-4 py-3'>შესვლა</button>
                </div>
            </div>

            <div className='w-full flex justify-center mt-8'>
                <span className={classNames("text-center text-gray-600 text-[14px]", medium.className)}>
                    არ ხარ დარეგისტრირებული?  <Link className='text-black underline' href="#">რეგისტრაცია</Link>
                </span>
            </div>

        </div>

        <div className="flex flex-col justify-center px-48 w-full h-screen col-start-5 col-span-8">
                <div className={classNames("text-white text-xl tracking-tight z-50 relative", medium.className)}>
                    მთელი წერილი ღვთივსულიერია და სასარგებლოა სასწავლებლად, სამხილებლად, გამოსასწორებლად, აღსაზრდელად სამართლიანობაში.
                    <p className='absolute -top-1 -left-11 text-[160px] text-white/50 z-10'>"</p>
                </div>
                <span className='text-white mt-8'>2 ტიმოთეს 3:16</span>
        </div>
    </div>
  )
}

export default Login