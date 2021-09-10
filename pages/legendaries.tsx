import { NextPage } from "next";
import { useEffect, useState, useRef, Dispatch, SetStateAction, MutableRefObject} from "react";
import { ajax, allGetPokemon } from "../middleware/ajax";
import { LegendariesStyle } from "../styles/legendariesStyle";
import { IData,IStat, IStatPokemon, IPokemonDescription} from "../interface/data";
import Footer from "../components/footer";
import { IPokemon, Stat } from "../interface/pokemonInterface";

const Legendaries:NextPage = () => {
    let storage:  Storage
    if(typeof window !== 'undefined'){
        storage = window.localStorage
    }
    const [stateHp, setStateHp]:[number,Dispatch<SetStateAction<number>>] = useState(0)
    const [offsetAttack, setOffsetAttack]:[number,Dispatch<SetStateAction<number>>] = useState(0)
    const [offsetDefence, setOffsetDefence]:[number,Dispatch<SetStateAction<number>>] = useState(0)
    const [offsetSA, setOffsetSA]:[number,Dispatch<SetStateAction<number>>] = useState(0)
    const [offsetSD, setOffsetSD]:[number,Dispatch<SetStateAction<number>>] = useState(0)
    const [offsetS, setOffsetS]:[number,Dispatch<SetStateAction<number>>] = useState(0)

    const [data, setData]:[IPokemon[], Dispatch<SetStateAction<IPokemon[]>>] = useState([
        { "abilities": [ { "ability": { "name": "", "url": "" }, "is_hidden": false, "slot": 1 }, { "ability": { "name": "", "url": "" }, "is_hidden": true, "slot": 3 } ], "description": "", "base_experience": 64, "forms": [ { "name": "bulbasaur", "url": "" } ], "game_indices": [ { "game_index": 153, "version": { "name": "red", "url": "" } }, { "game_index": 153, "version": { "name": "blue", "url": "" } } ], "height": 7, "held_items": [], "id": 1, "is_default": true, "location_area_encounters": "", "moves": [ { "move": { "name": "", "url": "" }, "version_group_details": [ { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } } ] }, { "move": { "name": "", "url": "" }, "version_group_details": [ { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "/" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "machine", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "x-y", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } } ] } ], "name": "", "order": 1, "past_types": [], "species": { "name": "", "url": "" }, "sprites": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null, "other": { "dream_world": { "front_default": "", "front_female": null }, "official-artwork": { "front_default": "" } }, "versions": { "generation-i": { "red-blue": { "back_default": "", "back_gray": "", "front_default": "", "front_gray": "" }, "yellow": { "back_default": "", "back_gray": "", "front_default": "", "front_gray": "" } }, "generation-ii": { "crystal": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "gold": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "silver": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" } }, "generation-iii": { "emerald": { "front_default": "", "front_shiny": "" }, "firered-leafgreen": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "ruby-sapphire": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" } }, "generation-iv": { "diamond-pearl": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "heartgold-soulsilver": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "platinum": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-v": { "black-white": { "animated": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-vi": { "omegaruby-alphasapphire": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "x-y": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-vii": { "icons": { "front_default": "", "front_female": null }, "ultra-sun-ultra-moon": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-viii": { "icons": { "front_default": "", "front_female": null } } } }, "stats": [ { "base_stat": 45, "effort": 0, "stat": { "name": "", "url": "" } }, { "base_stat": 49, "effort": 0, "stat": { "name": "", "url": "" } } ], "types": [ { "slot": 1, "type": { "name": "", "url": "" } }, { "slot": 2, "type": { "name": "", "url": "" } } ], "weight": 69 
}])
    const [stateIdPokemon,setStateIdPokemon]:[number,Dispatch<SetStateAction<number>>] = useState(-1)
    const [dataPosibleValue, setDataPosibleValue]:[IStatPokemon[],Dispatch<SetStateAction<IStatPokemon[]>>] = useState(
        [{ "descriptions": [ { "description": "", "language": { "name": "", "url": "" } }, { "description": "", "language": { "name": "", "url": "" } }, { "description": "", "language": { "name": "", "url": "" } } ], "gene_modulo": 0, "highest_stat": { "name": "", "url": "" }, "id": 1, "possible_values": [0]}]
        )
    const [description, setDescription]:[IPokemonDescription[],Dispatch<SetStateAction<IPokemonDescription[]>>] = useState([
         { "id": 0, "base_happiness": 0, "capture_rate": 0, "color": { "name": "", "url": "" }, "egg_groups": [ { "name": "", "url": "" }, { "name": "", "url": "" } ], "evolution_chain": { "url": "" }, "evolves_from_species": { "name": '', "url": '' }, "flavor_text_entries": [ { "flavor_text": "", "language": { "name": "", "url": "" }, "version": { "name": "", "url": "" } }, { "flavor_text": "", "language": { "name": "", "url": "" }, "version": { "name": "", "url": "" } }, { "flavor_text": "", "language": { "name": "", "url": "" }, "version": { "name": "", "url": "" } } ], "form_descriptions": [], "forms_switchable": false, "gender_rate": 1, "genera": [ { "genus": "", "language": { "name": "", "url": "" } }, { "genus": "", "language": { "name": "", "url": "" } }, { "genus": "", "language": { "name": "", "url": "" } }, { "genus": "", "language": { "name": "", "url": "" } }, { "genus": "", "language": { "name": "", "url": "" } }, { "genus": "", "language": { "name": "", "url": "" } }, { "genus": "", "language": { "name": "", "url": "" } }, { "genus": "", "language": { "name": "", "url": "" } }, { "genus": "", "language": { "name": "", "url": "" } }, { "genus": "", "language": { "name": "", "url": "" } } ], "generation": { "name": "", "url": "" }, "growth_rate": { "name": "", "url": "" }, "habitat": { "name": "", "url": "" }, "has_gender_differences": false, "hatch_counter": 20, "is_baby": false, "is_legendary": false, "is_mythical": false, "name": "bulbasaur", "names": [ { "language": { "name": "", "url": "" }, "name": "" }, { "language": { "name": "", "url": "" }, "name": "" }, { "language": { "name": "", "url": "" }, "name": "" }, { "language": { "name": "", "url": "" }, "name": "" }, { "language": { "name": "", "url": "" }, "name": "" }, { "language": { "name": "", "url": "" }, "name": "" }, { "language": { "name": "", "url": "" }, "name": "" }, { "language": { "name": "", "url": "" }, "name": "" }, { "language": { "name": "", "url": "" }, "name": "" }, { "language": { "name": "", "url": "" }, "name": "" }, { "language": { "name": "", "url": "" }, "name": "" } ], "order": 1, "pal_park_encounters": [ { "area": { "name": "", "url": "" }, "base_score": 0, "rate": 0 } ], "pokedex_numbers": [ { "entry_number": 0, "pokedex": { "name": "", "url": "" } }, { "entry_number": 1, "pokedex": { "name": "", "url": "" } }, { "entry_number": 226, "pokedex": { "name": "", "url": "" } } ], "shape": { "name": "", "url": "" }, "varieties": [ { "is_default": true, "pokemon": { "name": "", "url": "" } } ] }
        ])
    const [load, setLoad]:[boolean | undefined,Dispatch<SetStateAction<boolean | undefined>>] = useState()
    const refSliderHp:MutableRefObject<HTMLDivElement | null> = useRef(null)
    const refSliderAttack:MutableRefObject<HTMLDivElement | null> = useRef(null)
    const refSliderDefense:MutableRefObject<HTMLDivElement | null> = useRef(null)
    const refSliderSpecialAttack:MutableRefObject<HTMLDivElement | null> = useRef(null)
    const refSliderSpecialDefense:MutableRefObject<HTMLDivElement | null>= useRef(null)
    const refSliderSpeed:MutableRefObject<HTMLDivElement | null> = useRef(null)
    

    const loadData: () => Promise<void> = async() => {
        const result:IData = await ajax('https://pokeapi.co/api/v2/characteristic?offset=0&limit=30', 'GET')
/*1 характеристики*/const allStat:IStatPokemon[] = await Promise.all( result.results.map(
                        async(stat:IStat)=> {
                            return await allGetPokemon(stat.url)
                    }))
/*2 сам покемон*/   const resultAllPokemon:IData = await ajax('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50', 'GET')
                        const allPokemonPromise:IPokemon[] = await Promise.all(
                            await resultAllPokemon.results.map(
                                async (pokemon:IStat) => {
                                    return await allGetPokemon(pokemon?.url)
                    }))
/*3 описание*/      const allPokemonDescription:IPokemonDescription[] = await Promise.all(
                        await resultAllPokemon.results.map(
                            async (pokemon:IStat) => {
                                return await ajax(`https://pokeapi.co/api/v2/pokemon-species/${pokemon?.name}`, 'GET')
                    }))
                setDescription(allPokemonDescription)
                setData(allPokemonPromise)
                setDataPosibleValue(allStat)
                setLoad(true)
    }

    const [statePokemon, setStatePokemon]:[string | string [] | any,Dispatch<SetStateAction<string | string [] | any>>] = useState ('')

    // localStorage set
    const setPokemon: (key: string) => void = (key:string) =>  {   
        let old_data: string | string[] & string
        let old_dataParse:string[]
        
        if (typeof window !== 'undefined') {
            setStatePokemon(window.localStorage.getItem('pokemon'))
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
    const deletePokemon: (key: string) => void = (key:string) =>  {
        let old_data: string | string[] & string
        let old_dataParse:string[]
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

        const filterPokemon = (str:string) => {
            return data.map((value:IPokemon) => {
                return value.stats.map((stats:Stat) => {
                    if(stats.effort > 0 && stats.stat.name === str){
                        return dataPosibleValue.map((dataState:IStatPokemon) => {
                            if(dataState.highest_stat.name === str){
                                if(dataState.possible_values.filter((number:number) => {return number === stats.base_stat % 5} )){//если статы при делении на 5 дают 0, то покемона следует делить на 6
                                    value['description'] = dataState.descriptions[2].description                                //https://bulbapedia.bulbagarden.net/wiki/Characteristic
                                    return value
                                }
                                if(dataState.possible_values.filter((number:number) => {return number === stats.base_stat % 6} )){
                                    value['description'] = dataState.descriptions[2].description
                                    return value
                                }
                            }
                        }).filter((arr: IPokemon | undefined) => arr != undefined)
                    }
                }).filter((arr: (IPokemon | undefined)[] | undefined) => arr != undefined)
            }).flat(3)
        }

        const pokemonOpen = (str:string) =>  {
            return [...new Set(filterPokemon(str))].map((value:IPokemon | undefined) => {
            if(value !== undefined)
            return <>
            {stateIdPokemon === value.id - 1
            ? 
            <div className="open-section-pokemon" key={value.id-1}>
            <section>
            <article className="openPokemonArticle"> 
            <div className="img-open-section-pokemon">
            <img src={data[stateIdPokemon].sprites.other.dream_world.front_default} alt={data[stateIdPokemon].name} className="sub-img-open-section-pokemon"/>
            </div>
            <div className="allPokemonDescription">
            <p className="openNamePokemon">{value.name}</p>
                <p className="description">{description[stateIdPokemon].flavor_text_entries[0].flavor_text}</p>
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
                
                {
                storage.getItem('pokemon')!.includes(value.name)  ?
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
                 {JSON.parse(storage.getItem('pokemon')!)?.length < 4 ? '' : '(max: 4)'}
                 {JSON.parse(storage.getItem('pokemon')!)?.length <= 1 ? '(min: 2)' : ''}
                </p>
                }
                {
                    typeof window !== 'undefined' ?
                    <div className="pokemonStorage">{JSON.parse(storage.getItem('pokemon')!).map((pokemon:string)=>{
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
                return [...new Set(filterPokemon(str))].map((value:IPokemon | undefined, i:number) => {
                if(value !== undefined)
                return <section 
                className={stateIdPokemon === value.id - 1 ?  'section-close-pokemon active' : 'section-close-pokemon'}
                key={i}
                onClick={() =>{ 
                    setStateIdPokemon(stateIdPokemon === value.id - 1 ? value.id -1 : value.id - 1)
                    }}
                    >
                {stateIdPokemon === value.id - 1 ? null : <div className="background-section-close"></div>}
                <img src={value?.sprites?.front_default} alt={value.name} />
                <div className="name-description">
                    <p>{value.name}</p>
                    <div><img src="img/goldenPokeball.png" alt="goldenPokeball" /></div>
                </div>
                </section>})}

    const left = (refSlider: MutableRefObject<HTMLDivElement | null>, offset: Dispatch<SetStateAction<number>> , state:number) => {

        offset((state:number) => state - 180)
        refSlider.current!.style.left = state - 180 + 'px'
        if(Math.abs(refSlider.current!.offsetLeft - 180) > refSlider.current!.children.length * 180 - 1080 ){
        refSlider.current!.style.left = '0'
        offset((state:number) => state = 0)
        
        }
    }
    const right = (refSlider: MutableRefObject<HTMLDivElement | null>, offset: Dispatch<SetStateAction<number>> , state:number) => {
        offset((state:number) => state + 180)
        refSlider.current!.style.left = (state + 180 + 'px')
        if(refSlider.current!.offsetLeft + 360 > 180){
        refSlider.current!.style.left = '0'
        offset((states:number) => states = 0)
        }
    }
            
    return(<>
    <LegendariesStyle>
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


    </LegendariesStyle>
    <Footer props={{width: '1440px' , color: 'white'}}/>
    </>)
}

export default Legendaries