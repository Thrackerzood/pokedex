import { NextPage } from "next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PokemonSection } from "../styles/pokedexAllContent";
import { SwitchS } from "../styles/SwitchS";
import PokemonPageContent from "./componentPokemonPage";


const PokedexPage:NextPage<any> = (props:any ) => {
    const [currentPage, setCurrentPage]
    :[number,React.Dispatch<React.SetStateAction<number>>] = useState(1)
    const [postsPerPage]
    :[number, Dispatch<SetStateAction<number>>] = useState(9)
    const totalPage:number[] = []
    const indexOfLastPost:number = currentPage * postsPerPage
    const indexOfFirstPost:number = indexOfLastPost - postsPerPage
    const setCurrentPost:any = props.props.data.slice(indexOfFirstPost, indexOfLastPost)
    for(let i = 1; i <= Math.ceil(props.props.data.length / postsPerPage); ++i){
       totalPage.push(i)
    }
    let paginate
    :(numberPage: number) => void 
    = (numberPage:number):void => {
       setCurrentPage(numberPage)
    }
    useEffect(()=>{}, [paginate])
    return (
        <PokemonSection>
            {props.props.data.length < 10 ? 
            <PokemonPageContent props={props.props}/> 
            : 
            <PokemonPageContent props={{data: setCurrentPost}}/>}
        <SwitchS>
            {totalPage.length === 1 ? null : totalPage.map((number:number):JSX.Element => {
            return <button onClick={() => paginate(number)}
            className="switch-section__prev allButton"
            key={number}></button>})}
        </SwitchS>
        </PokemonSection>
        
    )
}


export default PokedexPage