import type { NextPage } from 'next'
import { NavS } from '../styles/navS'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'
import { themeToggle } from '../pages/_app'

const Nav: NextPage = () => {
  const router = useRouter()
  return (<>
  <NavS>
    <Link href='/'>
    <div className="logo">
      <Image 
      src='/img/Logo.png' 
      alt="logoPoko" 
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

    <label>
	      <input type="checkbox" onClick={themeToggle}/>
	      <div className="checkbox-switch">
        </div>
    </label>
  </NavS>
  </>)
}

export default Nav
