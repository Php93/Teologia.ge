import {createClient} from "next-sanity";
import imageUrlBuilder from '@sanity/image-url';

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token: process.env.SANITY_API_TOKEN,
    apiVersion: "2022-11-16",
    useCdn: false,
}

export const sanityClient = createClient(config)
export function urlFor(source) {
    const builder = imageUrlBuilder(config)
    return builder.image(source)
}
