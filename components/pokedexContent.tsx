import type { NextPage } from 'next'
import { useContext, useEffect, useState } from "react";
import { SwitchS } from '../styles/SwitchS';
import { Context, ContextPokemon } from '../context/context';
import { ajax, allGetPokemon } from '../middleware/ajax';
import PokedexPage from './pokedexPage';


const PokedexContent:NextPage = () => {

    const pokemonUrl:any = useContext(ContextPokemon)
    const pokemon:any = useContext(Context)
    const [data, setData]:any = useState([])
    const [allPokemon, setPokemon]:any = useState([])
    const [load, setStateLoad]:any = useState(false)
    const [loadDataType, setLoadData]:any = useState(true)

    const loadData = async() =>{
        setStateLoad(false)
        if(pokemonUrl !== ''){
            const allPokemonPromise:any = await Promise.all(
                await  pokemonUrl.pokemon.map(
                    async (pokemon:any) => {
                        return await allGetPokemon(pokemon.pokemon.url)
            }))
            setPokemon({data: allPokemonPromise})
            setStateLoad(true)
        }
        if(pokemon){
            await setPokemon({data:[await ajax( `https://pokeapi.co/api/v2/pokemon/${pokemon}` , 'GET')]})
            setStateLoad(true)
        }
        if(loadDataType){
        const result:any = await ajax('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9', 'GET')
        const allPokemonPromise:any = await Promise.all(
            await result.results.map(
                async (pokemon:any) => {
                    return await allGetPokemon(pokemon?.url)
        }))
            setData({data : result})
            setPokemon({data: allPokemonPromise})
            setStateLoad(true)
            setLoadData(false)
        }
    }

    const next = async () => {
        const dataResult = await ajax(data.data.next, 'GET')
        const allPokemonPromise:any = await Promise.all(
            await dataResult.results.map(
                async (pokemon:any) => {
                    return await allGetPokemon(pokemon?.url)
        }))
            setData({data : dataResult})
            setPokemon({data: allPokemonPromise})
            setStateLoad(true)
    }
    const prev = async () => {
        setStateLoad(false)
        if(data.data.previous == null){
            const result:any = await ajax('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9', 'GET')
            const allPokemonPromise:any = await Promise.all(
                await result.results.map(
                    async (pokemon:any) => {
                        return await allGetPokemon(pokemon?.url)
            }))
                setData({data : result})
                setPokemon({data: allPokemonPromise})
                setStateLoad(true)
        }else{
            const dataResult = await ajax(data.data.previous, 'GET')
            const allPokemonPromise:any = await Promise.all(
                await dataResult.results.map(
                    async (pokemon:any) => {
                        return await allGetPokemon(pokemon?.url)
            }))
            setData({data : dataResult})
            setPokemon({data: allPokemonPromise})
            setStateLoad(true)
        }
    }

    useEffect(() => {
        loadData()
    }, [pokemon , pokemonUrl])

    return(<>
    {load ?
    <> 
        {allPokemon.data[0] !== undefined ? <PokedexPage props={allPokemon}/> : <p className="not-found_p">not found ;(</p> }
        {pokemonUrl?.pokemon?.length === undefined || pokemonUrl?.pokemon?.length < 10 ?
        <SwitchS className="switch-section">
            <button onClick={prev} className="switch-section__prev"/>
            <div className="switch-section__this"></div>
            <button onClick={next} className="switch-section__next"/>
        </SwitchS>
        :
        null
        }
    </>
    :
    <p className="loading-state">Loading...</p>}
    </>)
    
}
export default PokedexContent