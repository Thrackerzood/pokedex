import { NextPage } from "next";
import { useEffect, useState, useReducer, useRef, Dispatch, SetStateAction, MutableRefObject, MouseEvent, DOMAttributes, BaseSyntheticEvent } from "react";
import { ajax, allGetPokemon } from "../middleware/ajax";
import { LegendariesS } from "../styles/legendariesS";
import {reduser} from "../middleware/useReduser";

const Legendaries:NextPage = () => {
    const [stateHp, setStateHp]:[number,Dispatch<SetStateAction<number>>] = useState(0)
    const [offsetAttack, setOffsetAttack]:[number,Dispatch<SetStateAction<number>>] = useState(0)
    const [offsetDefence, setOffsetDefence]:[number,Dispatch<SetStateAction<number>>] = useState(0)
    const [offsetSA, setOffsetSA]:[number,Dispatch<SetStateAction<number>>] = useState(0)
    const [offsetSD, setOffsetSD]:[number,Dispatch<SetStateAction<number>>] = useState(0)
    const [offsetS, setOffsetS]:[number,Dispatch<SetStateAction<number>>] = useState(0)
    const [data, setData]:any = useState([])
    const [stateReduser, dispatch]:any = useReducer(reduser, [])
    const [dataPosibleValue, setDataPosibleValue]:any = useState([])
    const [description, setDescription]: any = useState([])
    const [load, setLoad]
    :[boolean | any,Dispatch<SetStateAction<boolean | any>>] 
    = useState(false)
    const refSliderHp:MutableRefObject<HTMLDivElement | null> = useRef(null)
    const refSliderAttack:MutableRefObject<HTMLDivElement | null> = useRef(null)
    const refSliderDefense:MutableRefObject<HTMLDivElement | null> = useRef(null)
    const refSliderSpecialAttack:MutableRefObject<HTMLDivElement | null> = useRef(null)
    const refSliderSpecialDefense:MutableRefObject<HTMLDivElement | null>= useRef(null)
    const refSliderSpeed:MutableRefObject<HTMLDivElement | null> = useRef(null)

    let storage:any
    if(typeof window !== 'undefined'){
        storage = window.localStorage
    }


    const loadData:any = async() => {
        const result:any = await ajax('https://pokeapi.co/api/v2/characteristic?offset=0&limit=30', 'GET')
/*1 характеристики*/const allStat:any = await Promise.all( result.results.map(
                        async(stat:any)=> {
                            return await allGetPokemon(stat.url)
                    }))
/*2 сам покемон*/   const resultAllPokemon:any = await ajax('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50', 'GET')
                        const allPokemonPromise:any = await Promise.all(
                            await resultAllPokemon.results.map(
                                async (pokemon:any) => {
                                    return await allGetPokemon(pokemon?.url)
                    }))
/*3 описание*/      const allPokemonDescription:any = await Promise.all(
                        await resultAllPokemon.results.map(
                            async (pokemon:any) => {
                                return await ajax(`https://pokeapi.co/api/v2/pokemon-species/${pokemon?.name}`, 'GET')
                    }))
                setDescription(allPokemonDescription)
                setData(allPokemonPromise)
                setDataPosibleValue(allStat)
                setLoad(true)
    }

    const [statePokemon, setStatePokemon]:any = useState ('');

    // localStorage set
    const setPokemon:any = (key:any) =>  {   
        let old_data:any
        let old_dataParse:any
        setStatePokemon(localStorage.getItem('pokemon'))
        if (typeof window !== 'undefined') {
            old_data = statePokemon
            old_dataParse = JSON.parse(old_data)
            old_dataParse?.push(key)
            old_dataParse = [...new Set(old_dataParse)]
            if(old_dataParse.length < 5){
                window.localStorage.setItem('pokemon', 
                JSON.stringify(
                    old_dataParse.filter(
                        (data:string) => data !== '')))
            }
        }
        setStatePokemon('')
    }
    // localStorage delete
    const deletePokemon:any = (key:any) =>  {
        let old_data:any
        let old_dataParse:any
        setStatePokemon(localStorage.getItem('pokemon'))
        if (typeof window !== 'undefined') {
            old_data = statePokemon
            old_dataParse = JSON.parse(old_data)
            let pokemonFilter = old_dataParse.filter((str:string) =>  str !== key)
            window.localStorage.setItem('pokemon', JSON.stringify(pokemonFilter))
        }
        setStatePokemon('')
    }





    useEffect(() => {
        loadData()
        setStatePokemon(localStorage.getItem('pokemon'))
        if(!window.localStorage.getItem('pokemon')){
            window.localStorage.setItem('pokemon', '[]')
        }
    }, [statePokemon])

        const filterPokemon:any = (str:any) => {
            return data.map((value:any) => {
                return value.stats.map((stats:any) => {
                    if(stats.effort > 0 && stats.stat.name === str){
                        return dataPosibleValue.map((dataState:any) => {
                            if(dataState.highest_stat.name === str){
                                if(dataState.possible_values.find((number:number) => {return number === stats.base_stat % 5} )){//если статы при делении на 5 дают 0, то покемона следует делить на 6
                                    value['description'] = dataState.descriptions[2].description                                //https://bulbapedia.bulbagarden.net/wiki/Characteristic
                                    return value
                                }
                                if(dataState.possible_values.find((number:number) => {return number === stats.base_stat % 6} )){
                                    value['description'] = dataState.descriptions[2].description
                                    return value
                                }
                            }
                        }).filter((arr:any) => {
                            return arr != undefined
                        })
                    }
                }).filter((arr:any) => {
                    return arr != undefined
                })
            }).filter((arr:any) => arr != [].length < 0).flat(3)
        }
        const pokemonOpen:any = (str:string) =>  {
            return [...new Set(filterPokemon(str))].map((value:any, i:number) => {
            return <>
            {stateReduser[0]?.id.type == str && stateReduser[0]?.id.payload == value.id - 1
            ? 
            <div className="open-section-pokemon" key={value.id-1}>
            <section>
            <article className="openPokemonArticle"> 
            <div className="img-open-section-pokemon">
            <img src={data[stateReduser[1]?.id].sprites.other.dream_world.front_default} alt={data[stateReduser[1]?.id].name} className="sub-img-open-section-pokemon"/>
            </div>
            <div className="allPokemonDescription">
            <p className="openNamePokemon">{value.name}</p>
                <p className="description">{description[stateReduser[1]?.id].flavor_text_entries[0].flavor_text}</p>
                <p>{value.description}</p>
            <div className="description-stat-all">
                {value.stats.map((value:any)=> {
                    return <div key={value.id} className="description-stat">
                        <p>{value?.stat?.name + ' : '}</p>
                        <p>{value?.base_stat}</p>
                        <div className="width-stat">
                        <div
                            style={{width: value?.base_stat / 2}}
                        ></div>
                        </div>
                </div>})}
                </div>


                {storage.getItem('pokemon').includes(value.name)  ?
                <p
                className="compareTrue"
                data-name={value.name}

                onClick={(e:{ target: HTMLInputElement } | any) => deletePokemon(e.target.dataset.name)}

                >{value.name} added to comparison! 
                </p>
                :
                <p
                className="compareFalse"
                data-name={value.name}

                onClick={(e:{ target: HTMLInputElement } | any) => setPokemon(e.target.dataset.name)}
                
                >
                 Compare {value.name} from another! 
                 {JSON.parse(storage.getItem('pokemon'))?.length < 4 ? '' : '(max: 4)'}
                 {JSON.parse(storage.getItem('pokemon'))?.length <= 1 ? '(min: 2)' : ''}
                </p>
                }
                {
                    typeof window !== 'undefined' ?
                    <div className="pokemonStorage">{JSON.parse(storage.getItem('pokemon')).map((pokemon:string)=>{
                        return <p>{pokemon}</p>
                })}</div>
                : 
                ''
                }
 


                
                </div>
            </article>
            </section>
            </div>
            :
            null}
            </>})
            }
            const filter = (str:string) => {
                return [...new Set(filterPokemon(str))].map((value:any, i:number) => {
                return <section 
                className={stateReduser[1]?.id === value.id - 1 ?  'section-close-pokemon active' : 'section-close-pokemon'}
                key={i}
                onClick={() =>{ 
                    dispatch({
                        type: str,
                        payload: stateReduser[1]?.id === value.id - 1 ? value.id -1 : value.id - 1
                        })
                    }}
                    >
                {stateReduser[1]?.id === value.id - 1 ? null : <div className="background-section-close"></div>}
                <img src={value?.sprites?.front_default} alt={value.name} />
                <div className="name-description">
                    <p>{value.name}</p>
                    <div><img src="img/goldenPokeball.png" alt="goldenPokeball" /></div>
                </div>
                </section>})}

    const left = (refSlider:any, offset:any , state:any) => {
        offset((state:number) => state - 180)
        refSlider.current.style.left = state - 180 + 'px'
        if(Math.abs(refSlider.current.offsetLeft - 180) > refSlider.current.children.length * 180 - 1080 ){
        refSlider.current.style.left = 0
        offset((state:number) => state = 0)
        }
    }
    const right = (refSlider:any, offset:any , state:any) => {
        offset((state:number) => state + 180)
        refSlider.current.style.left = (state + 180 + 'px')
        console.log(state)
        if(refSlider.current.offsetLeft + 360 > 180){
        refSlider.current.style.left = 0
        offset((state:number) => state = 0)
        }
    }
            
    return(
    <LegendariesS>
        <p className="characteristicPokemon">Hit Points</p>
        {pokemonOpen('hp')}
        
        
        <div className="section-pokemon">
        <div className="left-button" 
        onClick={() => 
        right(refSliderHp, setStateHp, stateHp)
        
        }>
            <div className="left-button1"></div>
            <div className="left-button2"></div>
        </div>
        {<div className="sub-section-slider">
            {load ? <div className="section-slider" ref={refSliderHp} >{filter('hp')}</div> : <p className="load">Load...</p>}
        </div>}
        <div className="right-button" 
        onClick={() => 
        left(refSliderHp, setStateHp , stateHp)
        }>
            <div className="right-button1"></div>
            <div className="right-button2"></div>
        </div>
        </div>
        

        
        <p className="characteristicPokemon">Attack</p>
        {pokemonOpen('attack')}
        <div className="section-pokemon">
        <div className="left-button" 
        onClick={() =>
            right(refSliderAttack, setOffsetAttack ,offsetAttack)
        }>
            <div className="left-button1"></div>
            <div className="left-button2"></div>
        </div>
        {<div className="sub-section-slider">
            {load ? <div className="section-slider" ref={refSliderAttack} >{filter('attack')}</div> : <p className="load">Load...</p>}
        </div>}
        <div className="right-button" 
        onClick={() => 
        left(refSliderAttack,setOffsetAttack ,offsetAttack)
        }>
            <div className="right-button1"></div>
            <div className="right-button2"></div>
        </div>
        </div>


        <p className="characteristicPokemon">Defense</p>
        {pokemonOpen('defense')}
        <div className="section-pokemon">
        <div className="left-button" 
        onClick={() => 
            right(refSliderDefense, setOffsetDefence , offsetDefence)
        }>
            <div className="left-button1"></div>
            <div className="left-button2"></div>
        </div>
        {<div className="sub-section-slider">
            {load ? <div className="section-slider" ref={refSliderDefense} >{filter('defense')}</div> : <p className="load">Load...</p>}
        </div>}
        <div className="right-button" 
        onClick={() => 
            left(refSliderDefense, setOffsetDefence , offsetDefence)
        }>
            <div className="right-button1"></div>
            <div className="right-button2"></div>
        </div>
        </div>


        <p className="characteristicPokemon">Sp.Attack</p>
        {pokemonOpen('special-attack')}
        <div className="section-pokemon">
        <div className="left-button" 
        onClick={() => 
        right(refSliderSpecialAttack, setOffsetSA , offsetSA)
        }>
            <div className="left-button1"></div>
            <div className="left-button2"></div>
        </div>
        {<div className="sub-section-slider">
            {load ? <div className="section-slider" ref={refSliderSpecialAttack} >{filter('special-attack')}</div> : <p className="load">Load...</p>}
        </div>}
        <div className="right-button" 
        onClick={() => 
        left(refSliderSpecialAttack, setOffsetSA, offsetSA)
        }>
            <div className="right-button1"></div>
            <div className="right-button2"></div>
        </div>
        </div>


        <p className="characteristicPokemon">Sp.Defense</p>
        {pokemonOpen('special-defense')}
        <div className="section-pokemon">
        <div className="left-button" 
        onClick={() => 
            right(refSliderSpecialDefense, setOffsetSD, offsetSD)
        }>
            <div className="left-button1"></div>
            <div className="left-button2"></div>
        </div>
        {<div className="sub-section-slider">
            {load ? <div className="section-slider" ref={refSliderSpecialDefense} >{filter('special-defense')}</div> : <p className="load">Load...</p>}
        </div>}
        <div className="right-button" 
        onClick={() => 
            left(refSliderSpecialDefense, setOffsetSD, offsetSD)
            }>
            <div className="right-button1"></div>
            <div className="right-button2"></div>
        </div>
        </div>


        <p className="characteristicPokemon">Speed</p>
        {pokemonOpen('speed')}
        <div className="section-pokemon">
        <div className="left-button" 
        onClick={() => 
        right(refSliderSpeed, setOffsetS, offsetS)
        }>
            <div className="left-button1"></div>
            <div className="left-button2"></div>
        </div>
        {<div className="sub-section-slider">
            {load ? <div className="section-slider" ref={refSliderSpeed} >{filter('speed')}</div> : <p className="load">Load...</p>}
        </div>}
        <div className="right-button" 
        onClick={() => 
            left(refSliderSpeed, setOffsetS, offsetS)
        }>
            <div className="right-button1"></div>
            <div className="right-button2"></div>
        </div>
        </div>


    </LegendariesS>)
}

export default Legendaries



// const filterPokemon:any = (str:any) => {
//     return data.map((value:any) => {
//         return value.stats.map((stats:any) => {
//             if(stats.effort >= 1 && stats.stat.name === str){
//                 return value
//             }
//         }).filter((arr:any) => {
//             return arr != undefined
//         })
//     }).filter((arr:any) => arr != [].length < 0)
// }