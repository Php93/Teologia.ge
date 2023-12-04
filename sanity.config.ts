import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {visionTool} from '@sanity/vision'
import { myTheme } from './theme';
import { getDefaultDocumentNode } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'Teologia_Sanity',
  title: 'Teologia Sanity',
  projectId,
  dataset,
  plugins: [deskTool({defaultDocumentNode: getDefaultDocumentNode}), visionTool({defaultApiVersion: 'v2021-10-21'})],
  schema: {
    types: schemaTypes,
  },
  theme: myTheme,
})
