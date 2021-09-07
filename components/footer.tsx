import type { NextPage } from 'next'
import { useRouter } from 'next/dist/client/router'
import { FooterS } from '../styles/footerS'

const Footer: NextPage = () => {
  const router = useRouter()
  return (
  <FooterS 
  color={router.pathname === '/' 
  ? 
  '#F2B807'
  : router.pathname === '/404'
  ? '#D93E30'
  : 'white'
  }
  width={router.pathname === '/404' 
  ? '100%' 
  : '1440'
  }
  >
    <p>Make with❤️</p>
    <a href="https://github.com/Thrackerzood/pokemonApi"><p>github</p></a>
  </FooterS>
  )
}

export default Footer