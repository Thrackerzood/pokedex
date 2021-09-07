import { NextPage } from "next";
import { useEffect, useState } from "react";
import { ajax } from "../middleware/ajax";
import { CompareS } from "../styles/compare";



const Compare:NextPage = () => {
   const [state, setState] = useState([])
   const [load, setLoad] = useState(false)
   let storage:any
   if(typeof window !== 'undefined'){
      storage = window.localStorage
   }
   const loadData = async() => {
      if (typeof localStorage === 'string') {
      const allPokemon:any = await Promise.all(
         await JSON.parse(storage.getItem('pokemon')).map(
             async (pokemon:any) => {
                 return await ajax(`https://pokeapi.co/api/v2/pokemon/${pokemon}` , 'GET')
     }))
     await setState(allPokemon)
     await setLoad(true)
   }
   }
   useEffect(() => {
      loadData()
   }, [])
   return (
   <CompareS>
      {load ?
      <section>
         {state.map((data:any) => {


            return <article className="comparePokemon">
                     <div>
                        <p>{data.name}</p> 
                     </div>
                     <div className="imgCompare">

                        <img src={data.sprites.other.dream_world?.front_default 
                           ? data.sprites.other.dream_world?.front_default 
                           : data.sprites.front_default} alt={data.name} 
                        />

                     </div>
                        <div>
                           {data.stats.map((stat:any)=> {
                              return   <div>
                                          <p>{stat.stat.name} : </p>
                                          <p>{stat.base_stat}   </p>
                                       </div>
                           })}
                        </div>
                  </article>
            
         })}
      </section>
      :
      <p className="loadData">Load...</p>
      }
   </CompareS>)
}

export default Compare