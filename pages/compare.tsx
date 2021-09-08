import { NextPage } from "next";
import { useEffect, useState } from "react";
import { ajax } from "../middleware/ajax";
import { CompareS } from "../styles/compare";



const Compare:NextPage = () => {
   const [state, setState] = useState([])
   const [load, setLoad] = useState(false)
   let storage:any
   const loadData = async() => {
      storage = await window.localStorage
      let storageData:any = storage.getItem('pokemon')
      const allPokemon:any = await Promise.all(
         await JSON.parse(storageData).map(
             async (pokemon:any) => {
                 return await ajax(`https://pokeapi.co/api/v2/pokemon/${pokemon}` , 'GET')
     }))

     await setState(allPokemon)
     await setLoad(true)
   }
   let max = 0
   state.map((element:any) => {
      return element.stats.reduce((prev:any,cur:any) => {
         if(prev.base_stat > cur.base_stat){
            return prev
         }
         return cur
      })
   }).map((stat:any) => {
      stat.max = 'max'
      return stat
   }).map((ele:any) => {
      if(ele.base_stat > max){
         max = ele.base_stat
         return ele
      }     
   }).map((element:any) => {
         if(element?.base_stat === max){
            element.maxAll = 'max'
            return element
         }
   })


   useEffect(() => { 
      loadData()
   }, [])
   
   return (
   <CompareS>
      {load ?
      <section>
         {state.map((data:any, i:any) => {


            return <article className="comparePokemon" key={i}>
                     <div>
                        <p className="pokemon-name" >{data.name}</p> 
                     </div>
                     <div className="imgCompare">

                        <img src={data.sprites.other.dream_world?.front_default 
                           ? data.sprites.other.dream_world?.front_default 
                           : data.sprites.front_default} alt={data.name} 
                        />

                     </div>
                        <div>
                           {data.stats.map((stat:any, i:any)=> {
                             return     <>
                                          {stat?.max 
                                          ? stat?.maxAll 
                                          ? <p className="max-stat-pokemonAll">{stat?.maxAll} from all pokemon</p>
                                          : <p className="max-stat-pokemon">{stat?.max} from this pokemon</p> 
                                          : null}
                                       <div key={i} className="section-stat">
                                          <p className="pokemon-stat" >{stat.stat.name} </p>
                                          <p> : {stat.base_stat}</p>
                                       </div>
                                       </>
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