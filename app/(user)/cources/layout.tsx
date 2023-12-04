import {regular} from '../../../fonts/index'

export default async function Layout({
  children,
} : {
  children: React.ReactNode,
}) {
  return (
    <html className={regular.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>სასწავლო კურსები &mdash; ალესე შენი ხმალი</title>
        <meta name="description" content="..."></meta>
      </head>
      <body>{children}</body>
    </html>
  )
}