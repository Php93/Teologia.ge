import type {DefaultDocumentNodeResolver} from 'sanity/desk'
const Iframe = require('sanity-plugin-iframe-pane')

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
    if(schemaType === "post") {
        return S.document().views([
            S.view.form(),
            S.view.component(Iframe).options({
                url: `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000/"}/api/preview`,
                defaultSize: `desktop`,
                reload: {
                    button: true
                },
                attributes: {}
            })
            .title("Preview")
        ])
    }
}