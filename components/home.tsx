import type { NextPage } from 'next'
import { HomeStyle } from '../styles/home'
import Image from 'next/image'
import Link from 'next/link'
import { Dispatch, MouseEvent, useState } from 'react'
import Footer from './footer'
const HomePage: NextPage = () => {

  const [statePositionImage, setStateStatePositionImage]:[{ x: number; y: number; },Dispatch<{ x: number; y: number; }>] = useState({x: 0, y: 0})

  function mouseEnter(e:MouseEvent){
    let x:number = (window.innerWidth / 2 - e.pageX) / 100;
    let y:number = (window.innerHeight / 2 - e.pageY) / 50;
    setStateStatePositionImage({x, y})
  }
  
  return (<>
  <HomeStyle onMouseMove={(event: MouseEvent) => mouseEnter(event)}>
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
      style={{transform: `rotateY(${statePositionImage?.x}deg) rotateX(${statePositionImage?.y}deg)`,}}
    ><Image
      src='/img/Pikachu.png'
      alt="pikachu" 
      width={650} 
      height={650}
      quality={100}
    /></div>
    </div>
  </HomeStyle>
  <Footer props={{width: '1440px' , color: '#F2B807'}}/>
  </>)
}

export default HomePage