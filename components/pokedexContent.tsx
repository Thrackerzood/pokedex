import type { NextPage } from 'next'
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { SwitchStyle } from '../styles/SwitchStyle';
import { Contexts, ContextPokemon } from '../context/context';
import { ajax, allGetPokemon } from '../middleware/ajax';
import PokedexPage from './pokedexPage';
import { IPokemon } from '../interface/pokemonInterface';
import { IData, IStat } from '../interface/data';
import { Pokemon, TypePokemonArr } from '../interface/typePokemonInterface';


const PokedexContent:NextPage = () => {

    const pokemonUrl:TypePokemonArr = useContext(ContextPokemon)
    const pokemon:string = useContext(Contexts)
    const [data, setData]:[{data: IData},Dispatch<SetStateAction<{data: IData}>>] = useState({
        data:{"count": 0,"next":"","previous":null,"results":[{"name":"","url":""},{"name":"","url":""}]}
        })
    const [allPokemon, setPokemon]:[{data: IPokemon[]},Dispatch<SetStateAction<{data: IPokemon[]}>>] = useState({data:
        [{ "abilities": [ { "ability": { "name": "", "url": "" }, "is_hidden": false, "slot": 1 }, { "ability": { "name": "", "url": "" }, "is_hidden": true, "slot": 3 } ], "description": "", "base_experience": 64, "forms": [ { "name": "bulbasaur", "url": "" } ], "game_indices": [ { "game_index": 153, "version": { "name": "red", "url": "" } }, { "game_index": 153, "version": { "name": "blue", "url": "" } } ], "height": 7, "held_items": [], "id": 1, "is_default": true, "location_area_encounters": "", "moves": [ { "move": { "name": "", "url": "" }, "version_group_details": [ { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } } ] }, { "move": { "name": "", "url": "" }, "version_group_details": [ { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "/" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "machine", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "x-y", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } } ] } ], "name": "", "order": 1, "past_types": [], "species": { "name": "", "url": "" }, "sprites": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null, "other": { "dream_world": { "front_default": "", "front_female": null }, "official-artwork": { "front_default": "" } }, "versions": { "generation-i": { "red-blue": { "back_default": "", "back_gray": "", "front_default": "", "front_gray": "" }, "yellow": { "back_default": "", "back_gray": "", "front_default": "", "front_gray": "" } }, "generation-ii": { "crystal": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "gold": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "silver": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" } }, "generation-iii": { "emerald": { "front_default": "", "front_shiny": "" }, "firered-leafgreen": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "ruby-sapphire": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" } }, "generation-iv": { "diamond-pearl": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "heartgold-soulsilver": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "platinum": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-v": { "black-white": { "animated": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-vi": { "omegaruby-alphasapphire": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "x-y": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-vii": { "icons": { "front_default": "", "front_female": null }, "ultra-sun-ultra-moon": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-viii": { "icons": { "front_default": "", "front_female": null } } } }, "stats": [ { "base_stat": 45, "effort": 0, "stat": { "name": "", "url": "" } }, { "base_stat": 49, "effort": 0, "stat": { "name": "", "url": "" } } ], "types": [ { "slot": 1, "type": { "name": "", "url": "" } }, { "slot": 2, "type": { "name": "", "url": "" } } ], "weight": 69 }]
        })
    const [load, setStateLoad]:[boolean | undefined,Dispatch<SetStateAction<boolean | undefined>>] = useState()
    const [loadDataType, setLoadData]:[boolean | undefined | any,Dispatch<SetStateAction<boolean | undefined  | any>>]= useState(true)

    const loadData = async() =>{
        setStateLoad(false)

        const allPokemonPromise:IPokemon[] = await Promise.all(
            await  pokemonUrl.pokemon.map(
                async (pokemon:Pokemon) => {
                    return await allGetPokemon(pokemon.pokemon.url)
        }))

        setPokemon({data: allPokemonPromise})
        setStateLoad(true)
        if(pokemon){
            await setPokemon({data:[await ajax( `https://pokeapi.co/api/v2/pokemon/${pokemon}` , 'GET')]})
            setStateLoad(true)
        }
        if(loadDataType){
        const result:IData = await ajax('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9', 'GET')
        const allPokemonPromise:IPokemon[] = await Promise.all(
            await result.results.map(
                async (pokemon:IStat) => {
                    return await allGetPokemon(pokemon?.url)
        }))
            setData({data : result})
            setPokemon({data: allPokemonPromise})
            setStateLoad(true)
            setLoadData(false)
        }
    }

    const next = async () => {
        const dataResult:IData = await ajax(data.data.next, 'GET')
        const allPokemonPromise:IPokemon[] = await Promise.all(
            await dataResult.results.map(
                async (pokemon:IStat) => {
                    return await allGetPokemon(pokemon?.url)
        }))
            setData({data : dataResult})
            setPokemon({data: allPokemonPromise})
            setStateLoad(true)
    }
    const prev = async () => {
        if(data.data.previous == null){
            const result:IData = await ajax('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9', 'GET')
            const allPokemonPromise:IPokemon[] = await Promise.all(
                await result.results.map(
                    async (pokemon:IStat) => {
                        return await allGetPokemon(pokemon?.url)
            }))
                setData({data : result})
                setPokemon({data: allPokemonPromise})
                setStateLoad(true)
        }else{
            const dataResult:IData = await ajax(data.data.previous, 'GET')
            const allPokemonPromise:IPokemon[] = await Promise.all(
                await dataResult.results.map(
                    async (pokemon:IStat) => {
                        return await allGetPokemon(pokemon?.url)
            }))
            setData({data : dataResult})
            setPokemon({data: allPokemonPromise})
            setStateLoad(true)
        }
    }

    useEffect(() => {
        loadData()
        setStateLoad(false)
    }, [pokemon , pokemonUrl])

    return(<>
    {load ?
    <> 
        {allPokemon.data[0] !== undefined ? <PokedexPage props={allPokemon}/> : <p className="not-found_p">not found ;(</p> }
        {pokemonUrl?.pokemon?.length === undefined || pokemonUrl?.pokemon?.length < 10 ?
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