import type { NextPage } from 'next'
import { ChangeEvent, Dispatch, FormEvent, MouseEvent, MouseEventHandler, SetStateAction, useEffect, useState } from 'react'
import { PokedexS } from '../styles/pokedex'
import PokedexContent from '../components/pokedexContent'
import { Contexts, ContextPokemon } from '../context/context'
import { ajax } from '../middleware/ajax'
import { searchString } from '../middleware/search'

const Pokedex: NextPage = () => {
  const [state, setState]
  :[{
    searchS: string;
  },Dispatch<SetStateAction<{
    searchS: string;
  }>>] = useState({searchS: ''})
  const [stateSearch, setSearch]:any = useState([])
  const [blur, setBlur]:[boolean,Dispatch<SetStateAction<any>>] 
  = useState(false)
  const [mouseEnter, setMouseEnter]
  :[boolean | true| false | any,
    Dispatch<SetStateAction<boolean | true| false | any>>] 
    = useState(false)
  const [pokemon, setDataPokemon]:any = useState('')
  const [stateType, setType]:any = useState('')
  const [showing, showMoreInfo]
  :[any ,Dispatch<SetStateAction<any>>] 
  = useState(null)
  const [typeGenerator, setGenerator]:any = useState('')

  function changeSearch(event:any){
      setState({...state, [event.name]: event.value})
  }
  const searchAll:any = async(inputValue:any) => {
    let filterItem:string = ''
    if (inputValue?.searchS.length >= 0) {
      await searchString
      .filter((list:string) => list.toLowerCase().includes(inputValue?.searchS.toLowerCase()))
      .forEach((item:string) => filterItem += `${item},`)
      await setSearch(filterItem.split(','))
    } else {
      await searchString.forEach((item:string) => filterItem += `${item},`)
      setSearch(filterItem.split(','))
    }
  }
  const searchPokemon = async (event: { target: HTMLInputElement }) => {
    await setBlur(false)
    await setMouseEnter(false)
    await setDataPokemon(event.target.innerHTML.toLowerCase())
  }
  const searchType = async () => {
      await setType( await ajax('https://pokeapi.co/api/v2/type', 'GET'))
  }
  const ajaxShow = async (
    event: MouseEvent<HTMLParagraphElement, globalThis.MouseEvent> & {
      target: HTMLInputElement;
  } & MouseEventHandler<HTMLLabelElement>
  & MouseEvent<HTMLLabelElement, globalThis.MouseEvent> ) => {
      setGenerator(await ajax(`https://pokeapi.co/api/v2/type/${event.target.innerHTML}`, 'GET'))

  }
  useEffect(()=>{
    setDataPokemon('')
    showMoreInfo(null)
  }, [pokemon, stateSearch, state])
  return (<Contexts.Provider value={pokemon}>
    <ContextPokemon.Provider value={typeGenerator}>
    <PokedexS>
      <p className="main-pokedex__p"
      >800
      <b className="main-pokedex__b">Pokemons</b>
      for you to choose your favorite
      </p>
      <div className="search-div_container">
        <form onSubmit={
        (event:FormEvent<HTMLFormElement>) => 
        event.preventDefault()
        }>
        <input 
        type="search" 
        autoComplete="off"
        className="main-pokedex__search" 
        name="searchS"
        onFocus={async() => {
        await setBlur(true)
        await searchAll(state)
        }}
        
        onBlur={async() => {
          await setBlur(false)
        }}

        onChange={(event:ChangeEvent<HTMLInputElement>) =>{ 
        changeSearch(event.target)
        searchAll(state)
        }}
        placeholder="Encuentra tu pokémon..."
        />
        </form>
      {
      stateSearch && blur || mouseEnter ? 
      <div className="search-div"
        onMouseEnter={() => {
          setMouseEnter(true)
        }}
        onMouseLeave={()=> {
          setMouseEnter(false)
        }}
      > {
        stateSearch != ''
        ? 
        stateSearch.map((str:string, i:number)=>{
          if(i >= 5){
            return
          }
          return <p key={i} 
            onClick={(event:MouseEvent<HTMLParagraphElement, globalThis.MouseEvent> & { target: HTMLInputElement; } & MouseEventHandler<HTMLLabelElement>) => {
              searchPokemon(event)
          }}>{str}</p>
        })
        : <p>not found ;(</p> 
        }
      </div>
      
      :

      ''

      }
      </div>
      <div className="main-pokedex__select-div">
      <div className="main-pokedex__select-sub-div">
        <div className='select__div'>
          <ul className="top-ul">
              <li className="top-li" 
                onMouseEnter={searchType}
              >
                <p>Tipo</p>
                <div className="clip-path"></div>
                <span></span>
                  <div className="select">
                    <ul className="sub-ul">
                    
                    {stateType !== '' ? 
                    stateType?.results.map((type:any, i:number) => {
                      return <li className="sub-li" key={i} onClick={() => showMoreInfo(i === showing ? i : i)}>
                        <label htmlFor={`input${i}`} onClick={(event:MouseEvent<HTMLParagraphElement, 
                        MouseEvent<Element, globalThis.MouseEvent>> & {
                        target: HTMLInputElement} 
                        & MouseEventHandler<HTMLLabelElement> 
                        & MouseEvent<any>) => ajaxShow(event)}>
                          {i === showing ? <input type="checkbox" key={i} checked /> : <input type="checkbox" key={i} />}

                          <p>{ type.name }</p>
                        </label>
                      </li>
                      })
                    :
                    ''
                    }
                    </ul>
                  </div>
              </li>


              <li className="top-li">
                <p>Ataque</p>
                <div className="clip-path"></div>
              </li>

              <li className="top-li">
                <p>Experiencia</p>
                <div className="clip-path"></div>
              </li>

          </ul>
        </div>
        </div>
      </div>
      <section className="pokedex-main__content">
            <PokedexContent/>
      </section>
    </PokedexS>
    </ContextPokemon.Provider>
    </Contexts.Provider>)
}

export default Pokedex