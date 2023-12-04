'use client'

import config from '../../../../sanity.config'
const NextStudioLoading = require('next-sanity/studio/loading')

export default function Loading() {
  return <NextStudioLoading config={config} />
}