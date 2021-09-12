import type { NextPage } from 'next'
import { NavStyle } from '../styles/navStyle'
import Link from 'next/link'
import Image from 'next/image'
import { NextRouter, useRouter } from 'next/dist/client/router'
import { themeToggle } from '../pages/_app'
import { Dispatch, SetStateAction, useState } from 'react'

const Nav: NextPage = () => {
  const router: NextRouter = useRouter()
  const [lang, setLang]:[boolean, Dispatch<SetStateAction<boolean | true | any>>] = useState(true)
  return (<>
  <NavStyle>
    <Link href='/'>
    <div className="logo">
      <Image 
      src='/img/Logo.png' 
      alt="logoPokemon" 
      width={159} 
      height={63}
      />
    </div>
    </Link>
    <nav>
      <ul>
        <li><Link href="/">
          <a className={router.pathname == '/' ? 'active' : ''}>
            Home</a></Link></li>

        <li><Link href="/pokedex">
          <a className={router.pathname == '/pokedex' ? 'active' : ''}>
            Pokédex</a></Link></li>

        <li><Link href="/legendaries">
          <a className={router.pathname == '/legendaries' ? 'active' : ''}>
            Legendaries</a></Link></li>

        <li><Link href="/compare">
          <a className={router.pathname == '/compare' ? 'active' : ''}>
            Compare</a></Link></li>
      </ul>
    </nav>
    <div
    className="lang-toggle"
    onClick={() => setLang(!lang)}
    >
    {lang 
    ?
    <p>ENG</p>
    :
    <p>RU</p>
    }  
    </div>
    <label>
	      <input type="checkbox" onClick={themeToggle}/>
	      <div className="checkbox-switch">
        </div>
    </label>
  </NavStyle>
  </>)
}

export default Nav
