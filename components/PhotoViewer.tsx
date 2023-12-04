'use client'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import urlFor from '../lib/urlFor';
import { Image as IImage } from '../typings';
import Image from 'next/image'
import 'react-photo-view/dist/react-photo-view.css';

type Props = {
    images: IImage[],
}
function PhotoViewer({images}: Props) {
    return (
        <PhotoProvider>
           {images.map((item, index) => (
                <PhotoView key={index} src={urlFor(item).url()}>
                    <Image className='max-w-xs md:max-w-md lg:max-w-lg' src={urlFor(item).url()} alt="" width={1280} height={720} />
                </PhotoView>
            ))}
        </PhotoProvider>
    )
}

export default PhotoViewer