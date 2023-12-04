"use client"
import { groq } from "next-sanity";
import useSWR from "swr";
import { client } from "../lib/sanity.client";

export const getData = () => {
    const query = groq`{
        'authors': *[_type == 'author'],
        'posts': *[_type == 'post']{
            ...,
            author ->,
            categories[] ->,
        },
        'categories': *[_type == 'category']
      }`

    const { data, error} = useSWR(query, async(query) => await client.fetch(query), { refreshInterval: 60000 });
    return {data, error}
}