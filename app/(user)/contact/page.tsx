'use client'
import classNames from 'classnames'
import {useRef} from 'react'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { bold, medium } from '../../../fonts'
import { EnvelopeIcon, UserIcon } from '@heroicons/react/24/solid'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast'; 

function Contact() {
  const form = useRef<any>(null);

  const onClear = () => {
    form.current.from_email.value = "";
    form.current.from_name.value = "";
    form.current.message.value = "";
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs.sendForm('service_mdd7csk', 'template_uxtpe3d', form.current, '860nC4uHZpvao9YSU')
      .then((result: {text: string}) => {
        console.log(result);
        console.log('message sent')
      }, (error: {text: string}) => {
        console.log(error.text);
      });

      toast.success('Your message has been sent! Thank you for contacting us.')
      onClear()
  };
  
  return (
    <div>
      <Header/>
      <Toaster position="bottom-center" reverseOrder={false}/>

      <div className='max-w-3xl mx-auto my-20 px-5 min-w-50'>
        <h1 className={classNames(bold.className, 'tracking-tighter text-2xl w-full text-center py-10 xs:text-3xl xs:py-14')}>დაგვიკავშირდით</h1>

        <form ref={form} onSubmit={sendEmail} className={classNames(medium.className, 'max-w-lg mx-auto')}>
          <div className="mb-6">
            
            <label htmlFor="email" className={classNames(medium.className, "block mb-2 text-sm font-medium text-gray-900")}>Email</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <EnvelopeIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                {/* <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg> */}
              </div>
              <input required type="email" name="from_email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="example@example.com"/>
            </div>
          </div>

          <div className="mb-6">
            <label className={classNames(medium.className, "block mb-2 text-sm font-medium text-gray-900")}>სახელი და გვარი</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <UserIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input required type="text" name="from_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 focus:ring-blue-500 focus:border-blue-500" placeholder="ლავრენტი"/>
            </div>
          </div>

          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">წერილი</label>
          <textarea required name="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="დატოვეთ კომენტარი..."></textarea>

          <div className='mt-4 w-full text-center'>
            <button type="submit" className="text-white bg-main hover:bg-main/80 focus:ring-4 focus:outline-none focus:ring-bg rounded-lg text-sm sm:w-auto px-14 py-2.5 text-center transition-all duration-300 ease-in-out">გაგზავნა</button>
          </div>
        </form>
      </div>

      <Footer/>
    </div>
  )
}

export default Contact