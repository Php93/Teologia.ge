/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"
import {colors} from './styles/colors'

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('../public/bg.jpg')",
      },
      transitionProperty: {
        width: "width",
      },
      colors: {
        main: colors.main,
        bg: colors.bg,
        light: colors.light
      },
      width: {
        block: '30rem'
      },
    },
    minWidth: {
      '32': '8rem',
      "50": '20rem',
      '60': '26rem',
      "80": '40rem',
      "100": '48rem',
      '120': '60rem',
    },
    screens: {
      xs: "400px",
      ...defaultTheme.screens,
    },
    dropShadow: {
      '3xl': '0 12px 10px rgba(16,11,0,.5)',
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
  },
  plugins: [
    require("tailwindcss-nested-groups"),
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-labeled-groups')(['scoped']),
    require('@tailwindcss/line-clamp'),
    require("@tailwindcss/forms"),
  ]
}
