import '../../styles/globals.css'
import {regular} from '../../fonts/index'
import { DataContextProvider } from '../../context/store'

export const revalidate = 60
export default async function Layout({
  children,
} : {
  children: React.ReactNode,
}) {
  return (
    <html lang='en'>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/icon.svg" sizes="64x53" />
        <title>ალესე შენი ხმალი &mdash; Teologia.ge</title>
      </head>
      <body className={regular.className}>
        <DataContextProvider>
          {children}
        </DataContextProvider>
      </body>
    </html>
  )
}