import type { NextPage } from 'next'
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { SwitchStyle } from '../styles/SwitchStyle';
import { Contexts, ContextPokemon } from '../context/context';
import { ajax, allGetPokemon } from '../middleware/ajax';
import PokedexPage from './pokedexPage';
import { IPokemon, Stat } from '../interface/pokemonInterface';
import { IData, IStat } from '../interface/data';
import { Pokemon, TypePokemonArr } from '../interface/typePokemonInterface';
import { IContent } from '../interface/pokedexContentInterface';


const PokedexContent:NextPage<IContent> = (prop: IContent) => {
    const pokemonUrl:TypePokemonArr = useContext(ContextPokemon)
    const pokemon:string = useContext(Contexts)
    const [data, setData]:[{data: IData},Dispatch<SetStateAction<{data: IData}>>] = useState({
        data:{"count": 0,"next":"","previous":null,"results":[{"name":"","url":""},{"name":"","url":""}]}
        })
    const [allPokemon, setPokemon]:[{data: IPokemon[]},Dispatch<SetStateAction<{data: IPokemon[]}>>] = useState({data:
        [{ "abilities": [ { "ability": { "name": "", "url": "" }, "is_hidden": false, "slot": 1 }, { "ability": { "name": "", "url": "" }, "is_hidden": true, "slot": 3 } ], "description": "", "base_experience": 64, "forms": [ { "name": "bulbasaur", "url": "" } ], "game_indices": [ { "game_index": 153, "version": { "name": "red", "url": "" } }, { "game_index": 153, "version": { "name": "blue", "url": "" } } ], "height": 7, "held_items": [], "id": 1, "is_default": true, "location_area_encounters": "", "moves": [ { "move": { "name": "", "url": "" }, "version_group_details": [ { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } } ] }, { "move": { "name": "", "url": "" }, "version_group_details": [ { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "/" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "machine", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "x-y", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } } ] } ], "name": "", "order": 1, "past_types": [], "species": { "name": "", "url": "" }, "sprites": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null, "other": { "dream_world": { "front_default": "", "front_female": null }, "official-artwork": { "front_default": "" } }, "versions": { "generation-i": { "red-blue": { "back_default": "", "back_gray": "", "front_default": "", "front_gray": "" }, "yellow": { "back_default": "", "back_gray": "", "front_default": "", "front_gray": "" } }, "generation-ii": { "crystal": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "gold": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "silver": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" } }, "generation-iii": { "emerald": { "front_default": "", "front_shiny": "" }, "firered-leafgreen": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "ruby-sapphire": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" } }, "generation-iv": { "diamond-pearl": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "heartgold-soulsilver": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "platinum": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-v": { "black-white": { "animated": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-vi": { "omegaruby-alphasapphire": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "x-y": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-vii": { "icons": { "front_default": "", "front_female": null }, "ultra-sun-ultra-moon": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-viii": { "icons": { "front_default": "", "front_female": null } } } }, "stats": [ { "base_stat": 45, "effort": 0, "stat": { "name": "", "url": "" } }, { "base_stat": 49, "effort": 0, "stat": { "name": "", "url": "" } } ], "types": [ { "slot": 1, "type": { "name": "", "url": "" } }, { "slot": 2, "type": { "name": "", "url": "" } } ], "weight": 69 }]
        })
    const [load, setStateLoad]:[boolean,Dispatch<SetStateAction<boolean | undefined | any>>] = useState(false)
    const [saveDataPokemon, setSaveDataPokemon]:[{data: IPokemon[]},Dispatch<SetStateAction<{data: IPokemon[]}>>] = useState({data:
        [{ "abilities": [ { "ability": { "name": "", "url": "" }, "is_hidden": false, "slot": 1 }, { "ability": { "name": "", "url": "" }, "is_hidden": true, "slot": 3 } ], "description": "", "base_experience": 64, "forms": [ { "name": "bulbasaur", "url": "" } ], "game_indices": [ { "game_index": 153, "version": { "name": "red", "url": "" } }, { "game_index": 153, "version": { "name": "blue", "url": "" } } ], "height": 7, "held_items": [], "id": 1, "is_default": true, "location_area_encounters": "", "moves": [ { "move": { "name": "", "url": "" }, "version_group_details": [ { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } } ] }, { "move": { "name": "", "url": "" }, "version_group_details": [ { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "/" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "machine", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "x-y", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } } ] } ], "name": "", "order": 1, "past_types": [], "species": { "name": "", "url": "" }, "sprites": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null, "other": { "dream_world": { "front_default": "", "front_female": null }, "official-artwork": { "front_default": "" } }, "versions": { "generation-i": { "red-blue": { "back_default": "", "back_gray": "", "front_default": "", "front_gray": "" }, "yellow": { "back_default": "", "back_gray": "", "front_default": "", "front_gray": "" } }, "generation-ii": { "crystal": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "gold": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "silver": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" } }, "generation-iii": { "emerald": { "front_default": "", "front_shiny": "" }, "firered-leafgreen": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "ruby-sapphire": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" } }, "generation-iv": { "diamond-pearl": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "heartgold-soulsilver": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "platinum": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-v": { "black-white": { "animated": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-vi": { "omegaruby-alphasapphire": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "x-y": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-vii": { "icons": { "front_default": "", "front_female": null }, "ultra-sun-ultra-moon": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-viii": { "icons": { "front_default": "", "front_female": null } } } }, "stats": [ { "base_stat": 45, "effort": 0, "stat": { "name": "", "url": "" } }, { "base_stat": 49, "effort": 0, "stat": { "name": "", "url": "" } } ], "types": [ { "slot": 1, "type": { "name": "", "url": "" } }, { "slot": 2, "type": { "name": "", "url": "" } } ], "weight": 69 }]
        })
    const [stateSearchPokemonFromRange , setStateSearchPokemonFromRange]:[undefined | boolean ,Dispatch<SetStateAction<undefined | boolean>>] = useState()
    const [stateSearchPokemonFromRangeTrueAttack , setStateSearchPokemonFromRangeTrueAttack]:[undefined | boolean ,Dispatch<SetStateAction<undefined | boolean>>] = useState()
    const [stateSearchPokemonFromRangeTrueExp , setStateSearchPokemonFromRangeTrueExp]:[undefined | boolean ,Dispatch<SetStateAction<undefined | boolean>>] = useState()
    const [stateAttack, setStateAttack]:[{from: number,to: number},Dispatch<SetStateAction<{from: number,to: number}>>] = useState({from: 0, to: 0})
    const [stateExp, setStateExp]:[{from: number,to: number},Dispatch<SetStateAction<{from: number,to: number}>>] = useState({from: 0, to: 0})
    const loadData = async() =>{
        setStateLoad(false)
        setStateSearchPokemonFromRangeTrueAttack(false)
        setStateSearchPokemonFromRangeTrueExp(false)
        if(prop.props.showing === -1){
            const result:IData = await ajax('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9', 'GET')
            const allPokemonPromise:IPokemon[] = await Promise.all(
                await result.results.map(
                    async (pokemon:IStat) => {
                        return await allGetPokemon(pokemon?.url)
            }))
                setData({data : result})
                setPokemon({data: allPokemonPromise})
                setStateLoad(true)
                setSaveDataPokemon({data: allPokemonPromise})
                setStateSearchPokemonFromRange(false)
                maxPokemonRange(allPokemonPromise)
        }
        if(pokemonUrl && prop.props.showing !== -1){
            const allPokemonPromise:IPokemon[] = await Promise.all(
                await  pokemonUrl.pokemon.map(
                    async (pokemon:Pokemon) => {
                        return await allGetPokemon(pokemon.pokemon.url)
            }))
            setPokemon({data: allPokemonPromise})
            setStateLoad(true)
            setSaveDataPokemon({data: allPokemonPromise})
            setStateSearchPokemonFromRange(false)
            maxPokemonRange(allPokemonPromise)
        }
        if(pokemon.length > 1){
            await setPokemon({data:[await ajax( `https://pokeapi.co/api/v2/pokemon/${pokemon}` , 'GET')]})
            setStateLoad(true)
            setStateSearchPokemonFromRange(false)
        }
    }
    const maxPokemonRange = async(pokemon:IPokemon[]) => {
        let maxAttack:number[] = [0]
        let maxExp:number[] = [0]
        await pokemon.map((element:IPokemon) => {
            return element.stats.filter((stats:Stat)=> {
                if(stats.stat.name === 'attack'){
                    maxAttack.push(stats.base_stat)
                }
            })
        })
        pokemon.map((element:IPokemon) => {
            return maxExp.push(element.base_experience) 
        })
        prop.props.setMaxStateAttack({ maxAttack: Math.max(...maxAttack) })
        prop.props.setMaxStateExp({maxExp : Math.max(...maxExp)})
        prop.props.deleteValueFromRefElement(prop.props.refPokemonAttackRangeFrom, prop.props.refPokemonAttackRangeTo , 'attack')
        prop.props.deleteValueFromRefElement(prop.props.refPokemonExpRangeFrom, prop.props.refPokemonExpRangeTo , 'exp')
    }
    const next = async () => {
        setStateSearchPokemonFromRangeTrueAttack(false)
        setStateSearchPokemonFromRangeTrueExp(false)
        const dataResult:IData = await ajax(data.data.next, 'GET')
        const allPokemonPromise:IPokemon[] = await Promise.all(
            await dataResult.results.map(
                async (pokemon:IStat) => {
                    return await allGetPokemon(pokemon?.url)
        }))
            setSaveDataPokemon({data: allPokemonPromise})
            setPokemon({data: allPokemonPromise})
            setData({data : dataResult})
            setStateLoad(true)
            setStateSearchPokemonFromRange(false)
            maxPokemonRange(allPokemonPromise)
    }
    const prev = async () => {
        setStateSearchPokemonFromRangeTrueAttack(false)
        setStateSearchPokemonFromRangeTrueExp(false)
        if(data.data.previous == null){
            return 
        }else{
            const dataResult:IData = await ajax(data.data.previous, 'GET')
            const allPokemonPromise:IPokemon[] = await Promise.all(
                await dataResult.results.map(
                    async (pokemon:IStat) => {
                        return await allGetPokemon(pokemon?.url)
            }))
            await setSaveDataPokemon({data: allPokemonPromise})
            setPokemon({data: allPokemonPromise})
            setData({data : dataResult})
            setStateLoad(true)
            setStateSearchPokemonFromRange(false)
            maxPokemonRange(allPokemonPromise)
        }
    }

    useEffect(() => {
        loadData()
    }, [pokemonUrl, pokemon])
    
    // если состояние Attack не изменено , то запрет на фильтр
    if(prop.props.rangeAttack.rangeAttackTo === 400 
    && prop.props.rangeAttack.rangeAttackFrom === 0 
    && prop.props.statePokemonAttack){
        prop.props.setStatePokemonAttack(false)
    }
    // если состояние Attack изменено
    if(prop.props.rangeAttack.rangeAttackFrom !== 0  
    && prop.props.statePokemonAttack 
    || prop.props.rangeAttack.rangeAttackTo !== 400
    && prop.props.statePokemonAttack ){
        if(prop.props.statePokemonAttack){
        prop.props.setStatePokemonAttack(false)
        setStateSearchPokemonFromRangeTrueExp(false)
        const rangePokemonFromAttack:IPokemon[] = saveDataPokemon.data.filter((pokemon: IPokemon) => {
                if(prop.props.rangeAttack.rangeAttackFrom 
                    <= pokemon.stats[1].base_stat 
                    && pokemon.stats[1].base_stat 
                    <= prop.props.rangeAttack.rangeAttackTo){
                    return  pokemon
                }  
            })
            setStateAttack({from: prop.props.rangeAttack.rangeAttackFrom, to: prop.props.rangeAttack.rangeAttackTo})
            prop.props.deleteValueFromRefElement(prop.props.refPokemonAttackRangeFrom, prop.props.refPokemonAttackRangeTo , 'attack')
        if(typeof rangePokemonFromAttack[0] !== 'undefined'){
            setStateSearchPokemonFromRangeTrueExp(false)
            setStateSearchPokemonFromRange(false)
            setPokemon({data: rangePokemonFromAttack})
            setStateSearchPokemonFromRangeTrueAttack(true)
        }else{
            setPokemon(saveDataPokemon)
            setStateSearchPokemonFromRange(true)
            setStateSearchPokemonFromRangeTrueAttack(false)
        }
    }
    prop.props.rangeAttack.rangeAttackFrom = 0
    prop.props.rangeAttack.rangeAttackTo = 400
}

    // если состояние Exp не изменено , то запрет на фильтр
    if(prop.props.rangeExp.rangeExpTo === 2000 
    && prop.props.rangeExp.rangeExpFrom === 0
    && prop.props.statePokemonAttack){
        prop.props.setStatePokemonAttack(false)
    }

    // если состояние Exp изменено
    if(prop.props.rangeExp.rangeExpFrom !== 0  
        && prop.props.statePokemonExp 
        || prop.props.rangeExp.rangeExpTo !== 2000
        && prop.props.statePokemonExp){
            if(prop.props.statePokemonExp){
                prop.props.setStatePokemonExp(false)
                setStateSearchPokemonFromRangeTrueAttack(false)
                const rangePokemonFromExp:IPokemon[] = saveDataPokemon.data.filter((pokemon: IPokemon) => {
                        if(prop.props.rangeExp.rangeExpFrom
                            <= pokemon.base_experience
                            && pokemon.base_experience
                            <= prop.props.rangeExp.rangeExpTo){
                            return  pokemon
                        }  
                    })
                    setStateExp({from: prop.props.rangeExp.rangeExpFrom, to: prop.props.rangeExp.rangeExpTo})
                    prop.props.deleteValueFromRefElement(prop.props.refPokemonExpRangeFrom, prop.props.refPokemonExpRangeTo , 'exp')
                if(typeof rangePokemonFromExp[0] !== 'undefined'){
                    setStateSearchPokemonFromRange(false)
                    setPokemon({data: rangePokemonFromExp})
                    setStateSearchPokemonFromRangeTrueExp(true)
                }else{
                    setPokemon(saveDataPokemon)
                    setStateSearchPokemonFromRange(true)
                    setStateSearchPokemonFromRangeTrueExp(false)
                }
            }
            prop.props.rangeExp.rangeExpFrom = 0
            prop.props.rangeExp.rangeExpTo = 2000
    }

    return(<>
    {load ?
    <> 
        {stateSearchPokemonFromRange && <p className="found-range-paragraph-false">nothing found in this range</p>}
        {stateSearchPokemonFromRangeTrueAttack && <p className="found-range-paragraph-true">Attack from:  {stateAttack.from} to: {stateAttack.to}</p>}
        {stateSearchPokemonFromRangeTrueExp && <p className="found-range-paragraph-true">Exp from:  {stateExp.from} to: {stateExp.to}</p>}
        {allPokemon.data[0] !== undefined ? <PokedexPage props={allPokemon}/> : <p className="not-found_p">not found ;(</p> }
        {pokemonUrl?.pokemon?.length === undefined || pokemonUrl?.pokemon?.length < 10 || prop.props.showing === -1 ?
        <SwitchStyle className="switch-section">
            <button onClick={prev} className="switch-section__prev"/>
            <div className="switch-section__this"></div>
            <button onClick={next} className="switch-section__next"/>
        </SwitchStyle>
        :
        null
        }
    </>
    :
    <p className="loading-state">Loading...</p>}
    </>)
    
}
export default PokedexContent