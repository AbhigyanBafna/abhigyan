import Iframe from 'sanity-plugin-iframe-pane';

// Import this into the deskTool() plugin
export const defaultDocumentNode = function (S, { schemaType }) {

    if( schemaType === 'post' ){
        return S.document().views([
            S.view.form(),

            S.view.component(Iframe)
            .options({

                url: `${
                    process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"
                }/api/preview`,
                //Optional to set default size.
                defaultSize: 'desktop',
                //Adding a reload button.
                reload: {
                    button: true, //default undefined.
                },
                //Optional to pass attributes to iFrame.
                attributes: {},
            })
            .title("Preview")
        ]);
    }
};
