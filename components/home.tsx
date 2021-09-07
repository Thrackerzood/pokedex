import type { NextPage } from 'next'
import { HomeS } from '../styles/home'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
const HomePage: NextPage = () => {

  const [state, setState]:any = useState()

  function mouseEnter(e:any){
    let x = (window.innerWidth / 2 - e.pageX) / 100;
    let y = (window.innerHeight / 2 - e.pageY) / 50;
    setState({x, y})
  }




  return (
  <HomeS onMouseMove={mouseEnter}>
    <article>
      <p className="article-p">
        <b className="article-b"> Find</b>
        all your favorite
        <b className="article-sub-b">Pokemon</b>
      </p>
      <p className="article-sub-p">You can know the type of Pokemon,
        its strengths,
        disadvantages and abilities</p>
        <Link href='pokedex'><button>See pokemons</button></Link>
    </article>
    <div className="container-img">
    <div className="clouds"><Image
      src='/img/Clouds.png' 
      alt="clouds" 
      width={690} 
      height={450}
      quality={100}
    /></div>
    <div className="pokeball"><Image
      src='/img/PokeBall1.png' 
      alt="pokeball" 
      width={180} 
      height={180}
      quality={100}
    /></div>
    <div className="pokeball2"><Image
      src='/img/Pokeball2.png' 
      alt="pokeball2" 
      width={232} 
      height={350}
      quality={100}
    /></div>
    <div className="pikachu"
      style={{transform: `rotateY(${state?.x}deg) rotateX(${state?.y}deg)`,}}
    ><Image
      src='/img/Pikachu.png'
      alt="pikachu" 
      width={650} 
      height={650}
      quality={100}
    /></div>
    </div>
  </HomeS>
  )
}

export default HomePage