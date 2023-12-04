import {Inter} from '@next/font/google'
import localFont from '@next/font/local';

export const inter = Inter({
  weight: ['400', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export const firaGo = localFont({
  src: [
    {
      path: '../fonts/FiraGORegular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/FiraGo.otf',
      weight: '700',
      style: 'normal',
    },
  ]
})

export const bold = localFont({
  src: [
    {
      path: '../fonts/Bold.ttf',
      weight: '800',
      style: 'normal',
    },
  ]
})
export const regular = localFont({
  src: [
    {
      path: '../fonts/Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ]
})

export const medium = localFont({
  src: [
    {
      path: '../fonts/Medium.woff2',
      weight: '600',
      style: 'normal',
    },
  ]
})