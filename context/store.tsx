'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { client } from '../lib/sanity.client';
import { IData, IDb } from '../typings';
const { groq } = require('next-sanity')

const DataContext = createContext<ContextProps>({
  data: {},
  db: {}
})

type ContextProps = {
  data: IData,
  db: IDb
}
const dataQuery = groq`{
  'posts': *[_type == 'posts'] {
    ...,
    author ->,
    categories[] ->,
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  },
  'books': *[_type == 'books'] {
    ...,
    author ->,
  },
  'hymns': *[_type == 'hymns']
}`
const query = groq`{
  'books': *[_type == 'books'],
  'posts': *[_type == 'post'] {
    ...,
    author ->,
    categories[] ->
  },
  'hymns': *[_type == 'hymns'],
  'categories': *[_type == 'categories'],
  'authors': *[_type == 'authors'],
}`
export function DataContextProvider({children}: any) {
  const [data, setData] = useState({});
  const [db, setDb] = useState({});
  useSWR(dataQuery, async function(dataQuery: any) {await client.fetch(dataQuery).then((data: any) => setData(data)), { refreshInterval: 3600*60 }});
  useSWR(query, async function (query: any) {
    await client.fetch(query).then((data: any) => setDb(data)), { refreshInterval: 3600*60 }
  });

  return (
    <DataContext.Provider value={{ data, db }}>
      {children}
    </DataContext.Provider>
  );
}

export const useDataContext = () => useContext(DataContext)