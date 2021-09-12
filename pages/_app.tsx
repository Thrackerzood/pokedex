import type { AppProps } from 'next/app'
import { Global, Styled } from '../styles/globalStyle'
import Nav from '../components/nav'
import { ThemeProvider } from 'styled-components'
import { Dispatch, SetStateAction, useState } from 'react'
import {ThemeDark, ThemeLight } from '../styles/themes'
import { Language } from '../context/context'



  let [theme, setTheme]:[string,Dispatch<SetStateAction<string>>] = ['', prev => prev]

export const themeToggle = () => theme === 'light' ? setTheme('dark') : setTheme('light')

const MyApp = ({ Component, pageProps }: AppProps) => {
  [theme, setTheme] = useState('light')
  const [language, setLanguage]:[string,Dispatch<SetStateAction<string>>] = useState('eng')
  return (<>
  <Language.Provider value={language}>
  <ThemeProvider theme={ theme === 'light' ? ThemeDark : ThemeLight}>
    <Styled>
      <Nav/>
      <Global/>
      <Component {...pageProps} />
    </Styled>
  </ThemeProvider>
  </Language.Provider>
  </>)
}
export default MyApp
