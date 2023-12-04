import Image from 'next/image';
import urlFor from '../lib/urlFor';
import Link from 'next/link';
import classNames from 'classnames';
import { bold, regular } from '../fonts';

export const RichTextComponents = {
    types: {
        image: ({value}: any) => {
            return (
                <div className="relative w-full h-96 m-10 mx-auto">
                    <Image
                        className='object-contain'
                        src={urlFor(value).url()}
                        alt="Post Image"
                        fill
                    />
                </div>
            );
        },
    },
    list: {
        bullet: ({children}: any) => (
            <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
        ),
        number: ({children}: any) => (
            <ol className='mt-lg list-decimal'>{children}</ol>
        ),
    },
    block: {
        h1: ({children}: any) => (
            <h1 className={classNames(bold.className, 'text-5xl py-10 font-bold')}>{children}</h1>
        ),
        h2: ({children}: any) => (
            <h2 className={classNames(bold.className, 'text-4xl py-10 font-bold')}>{children}</h2>
        ),
        h3: ({children}: any) => (
            <h3 className={classNames(bold.className, 'text-xl py-7 font-bold sm:text-2xl sm:py-10 lg:text-3xl')}>{children}</h3>
        ),
        h4: ({children}: any) => (
            <h4 className={classNames(regular.className, 'text-5xl py-10 font-bold')}>{children}</h4>
        ),
        blockquote: ({children}: any) => (
            <blockquote className='border-l-main border-l-2 pl-3 my-5 sm:border-l-4 sm:pl-5'>
                {children}
            </blockquote>
        ),
    },
    marks: {
        link: ({children, value}: any) => {
            const rel = !value.href.startsWith('/') ? "noreferrer noopener" : undefined

            return (
                <Link 
                    href={value.href}
                    rel={rel}
                    className="underline decoration-black hover:decoration-main hover:text-main transition-all duration-200 ease-in-out "
                >
                    {children}
                </Link>
            )
        }
    }
}