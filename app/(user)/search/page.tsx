'use client'
import React, { useEffect, Fragment, useState } from 'react'
import Header from '../../../components/Header'
import { useDataContext } from '../../../context/store';
import { medium } from '../../../fonts';
import { Author, Post, Book, Hymn } from '../../../typings';
import classNames from 'classnames';
import { useSearchParams, useRouter } from 'next/navigation';
import SearchResults from '../../../components/SearchResults';
import { IonIcon } from '@ionic/react'
import { refresh, filter } from 'ionicons/icons'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
const { Dialog, Transition } = require('@headlessui/react')

type Props = {
    searchParams: {
        q?: string,
        type?: string,
        author?: string,
        tag?: string
    }
}

function Search({searchParams}: Props) {
    const {data, db} = useDataContext();
    const params = useSearchParams()
    const router = useRouter()
    const query = params.get('q')
    const author = params.get('author')?.split('|')
    const type = params.get('type')?.split('|')

    const [searchResults, setSearchResults] = useState<Array<Post | Book | Hymn>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [selectedAuthor, setSelectedAuthor] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState(params.get('q'))
    const [checked, setChecked] = useState<string[]>([]);
    const [checkbox, setCheckbox] = useState({
        first: type?.some((typeString: string) => typeString === 'posts' ? true : false),
        second: type?.some((typeString: string) => typeString === 'books' ? true : false),
        third: type?.some((typeString: string) => typeString === 'hymns' ? true : false)
    });

    const filterData = () => {
        // const filtered = data.posts?.filter((post: Post) => post.title.toLowerCase().includes(query!) || post.author._id.toLowerCase() === searchParams.author!)
        // setFilteredData(filtered)
        
        const filtered = Object.values(data).map((docs: [Post, Book, Hymn]) => docs
            .filter((doc: Post | Book | Hymn)  => query ? doc.title.toLowerCase().includes(query!) : doc)
            .filter((doc: Post | Book | Hymn) => author ? author.some(string => string.includes(doc?.author?._id)) : doc)
            .filter((doc: Post | Book | Hymn) => type ? type.some(typeString => typeString.includes(doc?._type)) : doc)
        ).flatMap(data => data)

        setSearchResults(filtered)
    }
    
    useEffect(() => { 
        setLoading(true)
        if(searchParams) {
            filterData()
        } else {
            setSearchResults(Object.values(data).flatMap(data => data))
        }
        setLoading(false)

        if(author) {
            setChecked(author!)
        } else setChecked([])

    }, [data, searchParams, selectedAuthor]);
    
    const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        handleCheckbox(event)
        const value = event.target.value;

        if (type?.some(typeString => typeString.includes(value))) {
            var queries = window.location.search.replace('?','').split('&')
            var allTypes = queries.find(string => string.includes('type='))
            const index = queries?.indexOf(allTypes!)

            if(type?.length === 1) {
                queries.splice(index, 1)
                router.push(`/search?${queries.toString()}`)
            } else if(type.length > 1) {
                var typeList = allTypes?.substring(allTypes.indexOf('=') + 1).split('|')
                typeList?.splice(typeList.indexOf(value), 1)
                const string = allTypes?.replace(allTypes.substring(allTypes.indexOf('=')), `=${typeList!.join('|')}`)
                queries = queries.map(str => str.includes('type=') ? string! : str)
                
                if(typeList?.length === 1) {
                    console.log(string)
                    router.push(`/search?${queries.join('&')}`)
                } else if(typeList?.length! > 1) {
                    router.push(`/search?${queries.join('&')}`)

                }
            }
        } else {
            if(!author && !query && !type) {
                router.push(window.location.href + `?type=${value}`)
            } else {
                if(!type?.map(str => str.includes(value))) {
                    router.push(window.location.href + `&type=${value}`)
                } else {
                    var queries = window.location.search.split('&')
                    const allTypes = window.location.search.split('&').find(string => string.includes('type='))
                    const string = allTypes + `|${value}`
                    queries = queries.map(str => str.includes('type=') ? string : str)
    
                    router.push(`/search${queries.join('&')}`)
                }
            }
        }
    };

    const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const value = event.target.value;

        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
        
        if (author?.some(authorString => authorString.includes(value))) {
            var queries = window.location.search.replace('?','').split('&')
            var allAuthors = queries.find(string => string.includes('author='))
            const index = queries?.indexOf(allAuthors!)

            if(author?.length === 1) {
                queries.splice(index, 1)
                router.push(`/search?${queries.toString()}`)
            } else if(author.length > 1) {
                var authorList = allAuthors?.substring(allAuthors.indexOf('=') + 1).split('|')
                authorList?.splice(authorList.indexOf(value), 1)
                const string = allAuthors?.replace(allAuthors.substring(allAuthors.indexOf('=')), `=${authorList!.join('|')}`)
                queries = queries.map(str => str.includes('author=') ? string! : str)
                
                if(authorList?.length === 1) {
                    router.push(`/search?${queries.join('&')}`)
                } else if(authorList?.length! > 1) {
                    router.push(`/search?${queries.join('&')}`)
                }
            }
        } else {
            if(!author && !query && !type) {
                router.push(window.location.href + `?author=${value}`)
            } else {
                if(!author?.map(str => str.includes(value))) {
                    router.push(window.location.href + `&author=${value}`)
                } else {
                    var queries = window.location.search.split('&')
                    const allTypes = window.location.search.split('&').find(string => string.includes('author='))
                    const string = allTypes + `|${value}`
                    queries = queries.map(str => str.includes('author=') ? string : str)
    
                    router.push(`/search${queries.join('&')}`)
                }
            }
        }
    };

    const handleClick = () => {
        if(params.toString().length != 0) {
            setCheckbox(() => {
            return{
                first: false,
                second: false,
                third: false
            }})
            router.push('/search')
        }
    }

    const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setCheckbox((prev) => {
          return {
            ...prev,
            [name]: checked
          };
        });
    };

    const isChecked = (item: any) => checked?.includes(item) ? true : false;

  return (
    <div className='py-16 min-w-50'>
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={() => setIsOpen(false)}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title className='flex items-center justify-between mb-8'>
                            <span className=''>ფილტრები</span>

                            <button onClick={handleClick} className={`flex items-center ${params.toString().length > 0 ? "text-gray-600 cursor-pointer" : "text-gray-400 cursor-default"}`}>
                                <IonIcon className='text-xl' icon={refresh} />
                                <p className={classNames(medium.className, 'text-sm ml-2')}>თავიდან</p>
                            </button> 
                        </Dialog.Title>

                        <div className='mb-7'>
                            <h3 className='text-sm mb-1'>რესურსების ტიპი</h3>
                            <ul className={classNames(medium.className, 'flex flex-col space-y-3')}>
                                <div className="flex items-center">
                                    <input 
                                        color='#ccc'
                                        id="default-checkbox" 
                                        type="checkbox" 
                                        name="first"
                                        checked={checkbox.first || false}
                                        value={"posts"}
                                        onChange={handleTypeChange}
                                        className="checkbox"
                                    />
                                    <label className="text-sm text-gray-900">სტატია</label>
                                </div>
                                <div className="flex items-center">
                                    <input 
                                        color='#ccc'
                                        id="default-checkbox" 
                                        type="checkbox" 
                                        name="second"
                                        checked={checkbox.second || false}
                                        value={"books"}
                                        onChange={handleTypeChange}
                                        className="checkbox"
                                    />
                                    <label className="text-sm text-gray-900">წიგნი</label>
                                </div>
                                <div className="flex items-center">
                                    <input 
                                        color='#ccc'
                                        id="default-checkbox" 
                                        type="checkbox" 
                                        name="third"
                                        checked={checkbox.third || false}
                                        value={"hymns"}
                                        onChange={handleTypeChange}
                                        className="checkbox"
                                />
                                <label className="text-sm text-gray-900">საგალობელი</label>
                            </div>
                        </ul>
                        </div>

                        <div className='mb-7'>
                            <h3 className='text-sm mb-1'>მასწავლებლები</h3>
                            <ul className={classNames(medium.className, 'flex flex-col space-y-3')}>
                                {db.authors?.map((authorList: Author, index: number) => (
                                    <div key={index} className="flex items-center">
                                        <input 
                                            color='#ccc'
                                            id="default-checkbox"
                                            type="checkbox" 
                                            checked={isChecked(authorList._id)}
                                            value={authorList._id} 
                                            onChange={handleAuthorChange} 
                                            className="mr-3 w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-[#1E5B94] dark:focus:ring-[#1E5B94] dark:ring-offset-gray-800 focus:ring-2"
                                        />
                                        <label key={authorList._id} className="text-sm text-gray-900">
                                            {authorList.title}
                                        </label>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>

        <Header/>

        <div className='hidden lg:grid grid-cols-12 mt-20'>
            <div className='col-start-5 col-span-2'>
                <p className='text-sm'>{query}</p>
            </div>
            
            <div className='col-start-9 col-span-2'>
                <p className='text-sm'>{searchResults.length} შედეგი</p>
            </div>
        </div>

        <div className='relative block lg:grid grid-cols-12 justify-center mt-8 max-w-7xl mx-auto'>
            <div className='block px-5 min-[385px]:hidden'>
                <div className='col-start-2 col-span-4 flex items-center justify-center flex-1 border rounded-full px-5 py-0.5 bg-gray-100'>
                <input 
                    onKeyPress={(e) => {
                    if(!input) return
                    if(query === input) return

                    if (e.key === 'Enter') {
                        router.push(`/search?q=${input}`)
                    }
                    }} 
                    value={input!} onChange={(e) => setInput(e.target.value)} 
                    className={classNames(medium.className, 'flex-1 text-sm border-none focus:outline-none text-black placeholder:text-gray-600 bg-transparent border-transparent focus:border-transparent focus:ring-0')} 
                    placeholder='ძებნა'
                />
                
                <a href={input! && `/search?q=${input}`}> 
                    <MagnifyingGlassIcon className={`text-gray-600 w-5 h-5 ${!input && 'text-gray-300 cursor-not-allowed'}`}/>
                </a>
                </div>
            </div>


            <button onClick={() => setIsOpen(true)} className='lg:hidden w-full flex justify-center items-center'>
                <IonIcon icon={filter} />
                <span className='ml-2 py-7'>ფილტრები</span>
            </button>

            <div className='hidden lg:flex flex-col items-start pl-10 col-span-2 xl:col-start-1'>
                <div className='mb-7'>
                    <h3 className='text-sm mb-1'>რესურსების ტიპი</h3>
                    <ul className={classNames(medium.className, 'flex flex-col space-y-3')}>
                        <div className="flex items-center">
                            <input 
                                color='#ccc'
                                id="default-checkbox" 
                                type="checkbox" 
                                name="first"
                                checked={checkbox.first || false}
                                value={"posts"}
                                onChange={handleTypeChange}
                                className="checkbox"
                            />
                            <label className="text-sm text-gray-900">სტატია</label>
                        </div>
                        <div className="flex items-center">
                            <input 
                                color='#ccc'
                                id="default-checkbox" 
                                type="checkbox" 
                                name="second"
                                checked={checkbox.second || false}
                                value={"books"}
                                onChange={handleTypeChange}
                                className="checkbox"
                            />
                            <label className="text-sm text-gray-900">წიგნი</label>
                        </div>
                        <div className="flex items-center">
                            <input 
                                color='#ccc'
                                id="default-checkbox" 
                                type="checkbox" 
                                name="third"
                                checked={checkbox.third || false}
                                value={"hymns"}
                                onChange={handleTypeChange}
                                className="checkbox"
                            />
                            <label className="text-sm text-gray-900">საგალობელი</label>
                        </div>
                    </ul>
                </div>

                <div className='mb-7'>
                    <h3 className='text-sm mb-1'>მასწავლებლები</h3>
                    <ul className={classNames(medium.className, 'flex flex-col space-y-3')}>
                        {db.authors?.map((authorList: Author, index: number) => (
                            <div key={index} className="flex items-center">
                                <input 
                                    color='#ccc'
                                    id="default-checkbox"
                                    type="checkbox" 
                                    checked={isChecked(authorList._id)}
                                    value={authorList._id} 
                                    onChange={handleAuthorChange} 
                                    className="mr-3 w-4 h-4 bg-gray-100 border-gray-300 rounded focus:ring-[#1E5B94] dark:focus:ring-[#1E5B94] dark:ring-offset-gray-800 focus:ring-2"
                                />
                                <label key={authorList._id} className="text-sm text-gray-900">
                                    {authorList.title}
                                </label>
                            </div>
                        ))}
                    </ul>
                </div>

                <hr className='w-full '/>

                <button onClick={handleClick} className={`mt-5 flex items-center ${params.toString().length > 0 ? "text-gray-600 cursor-pointer" : "text-gray-400 cursor-default"}`}>
                    <IonIcon className='text-xl' icon={refresh} />
                    <p className={classNames(medium.className, 'text-sm ml-2')}>თავიდან</p>
                </button>      
            </div>

            <div className='col-span-10 xl:col-span-8 flex flex-col items-center'>
                {loading && <p>Loading</p>}
                <SearchResults data={searchResults!} />
            </div>

        </div>

        
    </div>
  )
}

export default Search