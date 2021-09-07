import type { AppProps } from 'next/app'
import { Global } from '../styles/global'
import Footer from '../components/footer'
import Nav from '../components/nav'

function MyApp({ Component, pageProps }: AppProps | any) {
  return (<>
  <Nav/>
  <Global/>
  <Component {...pageProps} />
  <Footer/>
  </>)
}
export default MyApp
