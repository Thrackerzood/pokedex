import Document, {Html , Head, Main , NextScript, DocumentContext, DocumentInitialProps} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class CustomDocument extends Document{
   static async getInitialProps(ctx: DocumentContext):Promise<DocumentInitialProps>{
      const sheet = new ServerStyleSheet()
      const originalRenderPage = ctx.renderPage
      try {
         ctx.renderPage = () =>
           originalRenderPage({
             enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
           })
   
         const initialProps = await Document.getInitialProps(ctx)
         return {
           ...initialProps,
           styles: (
             <>
               {initialProps.styles}
               {sheet.getStyleElement()}
             </>
           ),
         }
      } finally {
         sheet.seal()
      }
   }  
   render(): JSX.Element{
      return(
         <Html lang="ru">
            <Head>
              <title>Pokemon</title>
              <link rel="icon" href="/img/Favicon.png" type="image/png"></link>
            </Head>
            <body>
               <Main></Main>
            </body>
            <NextScript></NextScript>
         </Html>
      )
   }
}