import type { NextPage } from 'next'
import { ChangeEvent, Dispatch, FormEvent, MouseEvent, MouseEventHandler, MutableRefObject, RefObject, SetStateAction, useCallback, useEffect, useReducer, useRef, useState } from 'react'
import { PokedexS } from '../styles/pokedex'
import PokedexContent from '../components/pokedexContent'
import { Contexts, ContextPokemon } from '../context/context'
import { ajax } from '../middleware/ajax'
import { searchString } from '../middleware/search'
import { IData, IStat } from '../interface/data'
import Footer from '../components/footer'
import { TypePokemonArr } from '../interface/typePokemonInterface'

const Pokedex: NextPage = () => {
  const [state, setState]:[{searchS: string;},Dispatch<SetStateAction<{searchS: string}>>] = useState({searchS: ''})
  const [stateSearch, setSearch]:[string[],Dispatch<SetStateAction<string[]>>] = useState([''])
  const [blur, setBlur]:[boolean | undefined,Dispatch<SetStateAction<boolean | undefined>>] = useState()
  const [mouseEnter, setMouseEnter]:[boolean | undefined,Dispatch<SetStateAction<boolean | undefined>>] = useState()
  const [showing, showMoreInfo]:[number ,Dispatch<SetStateAction<number>>] = useState(-1)
  const [typeGenerator, setGenerator]:[TypePokemonArr ,Dispatch<SetStateAction<TypePokemonArr>>]  = useState({
     "id": 1, "generation": { "name": "", "url": "" }, "name": "normal", "names": [ { "language": { "name": "", "url": "" }, "name": "" }, { "language": { "name": "", "url": "" }, "name": "" } ], "damage_relations": { "double_damage_from": [ { "name": "", "url": "" } ], "double_damage_to": [], "half_damage_from": [], "half_damage_to": [ { "name": "", "url": "" }, { "name": "", "url": "" } ], "no_damage_from": [ { "name": "", "url": "" } ], "no_damage_to": [ { "name": "", "url": "" } ] }, "game_indices": [ { "game_index": 0, "generation": { "name": "", "url": "" } }, { "game_index": 0, "generation": { "name": "", "url": "" } } ], "move_damage_class": { "name": "", "url": "" }, "moves": [ { "name": "", "url": "" }, { "name": "", "url": "" }, { "name": "", "url": "" } ], "past_damage_relations": [], "pokemon": [ { "pokemon": { "name": "", "url": "" }, "slot": 1 }, { "pokemon": { "name": "", "url": "" }, "slot": 1 }, { "pokemon": { "name": "", "url": "" }, "slot": 1 } ] 
    })
  const [pokemon, setDataPokemon]:[string ,Dispatch<SetStateAction<string>>]  = useState('')
  const [statePokemonAttack, setStatePokemonAttack]:[boolean | undefined,Dispatch<SetStateAction<boolean | undefined>>] = useState()
  const [statePokemonExp, setStatePokemonExp]:[boolean | undefined,Dispatch<SetStateAction<boolean | undefined>>] = useState()
  const refPokemonAttackRangeFrom:MutableRefObject<HTMLInputElement|null> = useRef(null)
  const refPokemonAttackRangeTo:MutableRefObject<HTMLInputElement|null> = useRef(null)
  const refPokemonExpRangeFrom:MutableRefObject<HTMLInputElement|null> = useRef(null)
  const refPokemonExpRangeTo:MutableRefObject<HTMLInputElement|null> = useRef(null)
  const [stateType, setType]:[IData,Dispatch<SetStateAction<IData>>] = useState({
    "count": 0,"next":"","previous":null,"results":[{"name":"","url":""},{"name":"","url":""}]
  })
  const [maxStateAttack, setMaxStateAttack]:[{maxAttack: number},Dispatch<SetStateAction<{maxAttack: number}>>]= useState({'maxAttack': 0})
  const [maxStateExp, setMaxStateExp]:[{maxExp: number},Dispatch<SetStateAction<{maxExp: number}>>]= useState({'maxExp': 0})

  const searchAll: (inputValue: {searchS: string}) => Promise<void> = async(inputValue:{searchS: string}) => {
    let filterItem:string & string[] | string | string[] = ''
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
    await showMoreInfo(-1)
    await setDataPokemon(event.target.innerHTML.toLowerCase())
  }
  const searchType = async () => {
      if(stateType.count === 0)
      await setType( await ajax('https://pokeapi.co/api/v2/type', 'GET'))
  }
  const ajaxShow = async (
    event: MouseEvent<HTMLParagraphElement, globalThis.MouseEvent> & {
      target: HTMLInputElement;
  } & MouseEventHandler<HTMLLabelElement>
  & MouseEvent<HTMLLabelElement, globalThis.MouseEvent> ) => {
      await setGenerator(await ajax(`https://pokeapi.co/api/v2/type/${event.target.innerHTML}`, 'GET'))

  }  
  function changeSearch(event: {name : string} & {value: string}){
      setState({...state, [event.name]: event.value})
  } 
  


  const [rangeAttack, setRangeAttack]:
  [{rangeAttackFrom:number , rangeAttackTo: number},
  Dispatch<SetStateAction<{rangeAttackFrom:number , rangeAttackTo: number}>>]
  = useState({rangeAttackFrom: 0 , rangeAttackTo: 400})

  const [rangeExp, setRangeExp]:
  [{rangeExpFrom: number , rangeExpTo: number},
  Dispatch<SetStateAction<{rangeExpFrom: number;rangeExpTo: number}>>]
  = useState({rangeExpFrom: 0 , rangeExpTo: 400})
  
  const [maxLengthDetectedExp, setMaxLengthDetectedExp]:[undefined | boolean,Dispatch<SetStateAction<undefined | boolean>>] = useState()
  const [maxLengthDetectedAttack, setMaxLengthDetectedAttack]:[undefined | boolean,Dispatch<SetStateAction<undefined | boolean>>] = useState()
  // заносит в placeholder максимально аозможное значение в поиск
  const deleteValueFromRefElement: (
    refOne: MutableRefObject<HTMLInputElement | null>, 
    refTwo: MutableRefObject<HTMLInputElement | null>, 
    placeholderValue: string) => void = (
    refOne:MutableRefObject<HTMLInputElement|null>, 
    refTwo:MutableRefObject<HTMLInputElement|null>,
    placeholderValue: string) => {
      if(placeholderValue === 'attack'){
        refOne.current!.placeholder = `${0}`
        refTwo.current!.placeholder = `${maxStateAttack.maxAttack}`
      }else{
        refOne.current!.placeholder = `${0}`
        refTwo.current!.placeholder = `${maxStateExp.maxExp}`
      }
  }
  //

  // ставит масксимальные значения для Exp и заносит в переменную
  const rangeExpSearch = async(event:ChangeEvent<HTMLInputElement> & {name : string} & {value: string}) => {
          if(+event.target.value > 2000){
            setRangeExp({...rangeExp, [event.target.name]: 2000}) 
            setMaxLengthDetectedExp(true)
          }else{
            setMaxLengthDetectedExp(false)
            setRangeExp({...rangeExp, [event.target.name]: +event.target.value.replace(/[^\d]/g, '')})            
          }
  }

    // ставит масксимальные значения для Attack и заносит в переменную
  const rangeAttackSearch = (event:ChangeEvent<HTMLInputElement> & {name : string} & {value: string}) => {
          if(+event.target.value > 400){
            setRangeAttack({...rangeAttack, [event.target.name]: 400})
            setMaxLengthDetectedAttack(true)
          }else{
            setMaxLengthDetectedAttack(false)
            setRangeAttack({...rangeAttack, [event.target.name]: +event.target.value.replace(/[^\d]/g, '')})
          }
  }

  useEffect(()=>{
    setMouseEnter(false)
    setDataPokemon('')
    deleteValueFromRefElement(refPokemonAttackRangeFrom, refPokemonAttackRangeTo , 'attack')
    deleteValueFromRefElement(refPokemonExpRangeFrom, refPokemonExpRangeTo , 'exp')
  },[pokemon, stateSearch, state,
    maxStateAttack , maxStateExp])

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
      
      {stateSearch && blur || mouseEnter ?
      // логика выпадающего списка поиска
      <div className="search-div"
        onMouseEnter={() => {
          setMouseEnter(true)
        }}
        onMouseLeave={()=> {
          setMouseEnter(false)
        }}
      > {
        stateSearch.length > 1
        ? 
        stateSearch.map((str:string, i:number)=>{
          if(i >= 6){
            return
          }
          return <p key={i} 
            onClick={(event:MouseEvent<HTMLParagraphElement, globalThis.MouseEvent> & { target: HTMLInputElement; } & MouseEventHandler<HTMLLabelElement>) => {
              searchPokemon(event)
              showMoreInfo(-1)
          }}>{str}</p>
        })
        : <p>not found ;(</p> 
        }
      </div>
      : 
      ''}

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
                       
                    {stateType !== null &&
                    // логика чекбокса и поиска по типам
                      stateType?.results.map((type:IStat, i:number) => {
                      return <li className="sub-li" key={i} onClick={() => showMoreInfo(i === showing ? -1 : i)}>
                        <label htmlFor={`input${i}`} onClick={(event:MouseEvent<HTMLParagraphElement, 
                        MouseEvent<Element, globalThis.MouseEvent>> & {
                        target: HTMLInputElement} 
                        & MouseEventHandler<HTMLLabelElement> 
                        & MouseEvent<any>) => ajaxShow(event)}>
                          {i === showing ? <input type="checkbox" key={i} checked /> : <input type="checkbox" key={i} />}
                          <p>{ type.name }</p>
                        </label>
                      </li>
                      })}
                    </ul>
                  </div>
              </li>


              <li className="top-li">
                <p>Ataque</p>
                <div className="clip-path"></div>

                <span></span>
                  <div className="select-range">
                    <ul className="sub-ul-range">
                    <form onSubmit={(event: MouseEvent<HTMLFormElement, globalThis.MouseEvent>) => {
                        event?.preventDefault()
                      }}>
                    <div className="range-state-div">
                        <div className="sub-range-state-div">
                            <p className="errorRange">
                              {rangeAttack.rangeAttackFrom > rangeAttack.rangeAttackTo && 'from cannot be less than to'}
                            </p>
                          <p className="text-Pokemon-select">From:
                            {maxLengthDetectedAttack && 'Max: 400'}
                          </p>
                              <input autoComplete="off" type="text" name="rangeAttackFrom" onChange={rangeAttackSearch} maxLength={3} ref={refPokemonAttackRangeFrom}/>
                        </div>
                        <div className="rangeDiv"></div>
                        <div>
                          <p className="text-Pokemon-select">To {maxLengthDetectedAttack && 'Max: 400'}</p>
                              <input autoComplete="off" type="text" name="rangeAttackTo" onChange={rangeAttackSearch} maxLength={3} ref={refPokemonAttackRangeTo}/>
                        </div>
                        <button type="submit" 
                        onClick={() => {
                          setStatePokemonAttack(true)
                          }}>Applay</button>
                      </div>
                      </form>
                    </ul>
                  </div>
              </li>

              <li className="top-li">
                <p>Experiencia</p>
                <div className="clip-path"></div>

                <span></span>
                  <div className="select-range">
                    <ul className="sub-ul-range">
                    <form onSubmit={(event: MouseEvent<HTMLFormElement, globalThis.MouseEvent>) => {
                        event?.preventDefault()
                      }}>
                      <div className="range-state-div">
                        <div className="sub-range-state-div">
                            <p className="errorRange">
                              {rangeExp.rangeExpFrom > rangeExp.rangeExpTo && 'from cannot be less than to'}
                            </p>
                          <p className="text-Pokemon-select">From: 
                            {maxLengthDetectedExp && 'Max: 2000'}
                            </p>
                              <input autoComplete="off" type="text" name="rangeExpFrom" onChange={rangeExpSearch} maxLength={4} ref={refPokemonExpRangeFrom}/>
                        </div>
                        <div className="rangeDiv"></div>
                        <div>
                          <p className="text-Pokemon-select">To: {maxLengthDetectedExp && 'Max: 2000'}</p>
                              <input autoComplete="off" type="text" name="rangeExpTo" onChange={rangeExpSearch} maxLength={4} ref={refPokemonExpRangeTo}/>
                        </div>
                        <button type="submit" 
                        onClick={() => {
                          setStatePokemonExp(true)
                          }}>Applay</button>
                      </div>
                    </form>
                    </ul>
                  </div>
              </li>

          </ul>
        </div>
        </div>
      </div>
      <section className="pokedex-main__content">
      <PokedexContent props={{ showing , rangeAttack , rangeExp , statePokemonAttack , statePokemonExp 
                              , setStatePokemonAttack, setStatePokemonExp , deleteValueFromRefElement,
                              refPokemonAttackRangeFrom , refPokemonAttackRangeTo, refPokemonExpRangeFrom,
                              refPokemonExpRangeTo,
                              setMaxStateAttack,
                              setMaxStateExp
                              }}/>
      </section>
    </PokedexS>
    <Footer props={{width: '1440px' , color: 'white'}}/>
    </ContextPokemon.Provider>
    </Contexts.Provider>)
}

export default Pokedex