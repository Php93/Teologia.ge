'use client'

const {NextStudio} = require('next-sanity/studio')
import config from '../../../../sanity.config'

export default function StudioPage() {
    return <NextStudio config={config} />
}