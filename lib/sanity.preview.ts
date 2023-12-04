'use client'

import {projectId, dataset} from './sanity.client'
const {definePreview} = require('next-sanity/preview')

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)
}

if(!projectId || !dataset) {
    throw new Error("Missing projectId or dataset. Check your sanity.json or .env")
}
export const usePreview = definePreview({
  projectId, 
  dataset, 
  onPublicAccessOnly
})