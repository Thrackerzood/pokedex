import type { AppProps } from 'next/app'
import { Global, Styled } from '../styles/global'
import Footer from '../components/footer'
import Nav from '../components/nav'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
import {ThemeDark, ThemeLight } from '../styles/themes'


  let [theme, setTheme]:any = ''
  export const themeToggle = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

function MyApp({ Component, pageProps }: AppProps | any) {
  [theme, setTheme] = useState('light')


  return (<>
  <ThemeProvider theme={ theme === 'light' ? ThemeDark : ThemeLight}>
    <Styled>
      <Nav/>
      <Global/>
      <Component {...pageProps} />
      <Footer/>
    </Styled>
  </ThemeProvider>
  </>)
}
export default MyApp
