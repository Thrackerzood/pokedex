import { NextPage } from "next";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Footer from "../components/footer";
import { IPokemon, Stat } from "../interface/pokemonInterface";
import { ajax } from "../middleware/ajax";
import colorStat from "../middleware/colorStat";
import colorPokemon from "../middleware/colorTypePokemon";
import { CompareStyle, PokemonNameCompare, PokemonStyleBaseStatCompare } from "../styles/compare";



const Compare:NextPage = () => {
   const [statePokemon, setStatePokemon]:[IPokemon[], Dispatch<SetStateAction<IPokemon[]>>] = useState([
      { "abilities": [ { "ability": { "name": "", "url": "" }, "is_hidden": false, "slot": 1 }, { "ability": { "name": "", "url": "" }, "is_hidden": true, "slot": 3 } ], "description": "", "base_experience": 64, "forms": [ { "name": "bulbasaur", "url": "" } ], "game_indices": [ { "game_index": 153, "version": { "name": "red", "url": "" } }, { "game_index": 153, "version": { "name": "blue", "url": "" } } ], "height": 7, "held_items": [], "id": 1, "is_default": true, "location_area_encounters": "", "moves": [ { "move": { "name": "", "url": "" }, "version_group_details": [ { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } } ] }, { "move": { "name": "", "url": "" }, "version_group_details": [ { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "/" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "machine", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "x-y", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } }, { "level_learned_at": 0, "move_learn_method": { "name": "", "url": "" }, "version_group": { "name": "", "url": "" } } ] } ], "name": "", "order": 1, "past_types": [], "species": { "name": "", "url": "" }, "sprites": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null, "other": { "dream_world": { "front_default": "", "front_female": null }, "official-artwork": { "front_default": "" } }, "versions": { "generation-i": { "red-blue": { "back_default": "", "back_gray": "", "front_default": "", "front_gray": "" }, "yellow": { "back_default": "", "back_gray": "", "front_default": "", "front_gray": "" } }, "generation-ii": { "crystal": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "gold": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "silver": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" } }, "generation-iii": { "emerald": { "front_default": "", "front_shiny": "" }, "firered-leafgreen": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" }, "ruby-sapphire": { "back_default": "", "back_shiny": "", "front_default": "", "front_shiny": "" } }, "generation-iv": { "diamond-pearl": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "heartgold-soulsilver": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "platinum": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-v": { "black-white": { "animated": { "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "back_default": "", "back_female": null, "back_shiny": "", "back_shiny_female": null, "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-vi": { "omegaruby-alphasapphire": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null }, "x-y": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-vii": { "icons": { "front_default": "", "front_female": null }, "ultra-sun-ultra-moon": { "front_default": "", "front_female": null, "front_shiny": "", "front_shiny_female": null } }, "generation-viii": { "icons": { "front_default": "", "front_female": null } } } }, "stats": [ { "base_stat": 45, "effort": 0, "stat": { "name": "", "url": "" } }, { "base_stat": 49, "effort": 0, "stat": { "name": "", "url": "" } } ], "types": [ { "slot": 1, "type": { "name": "", "url": "" } }, { "slot": 2, "type": { "name": "", "url": "" } } ], "weight": 69 
      }
      ])
   const [load, setLoad]:[boolean | undefined,Dispatch<SetStateAction<boolean | undefined>>] = useState()
   let storage: Storage
   let allPokemon:IPokemon[]
   const loadData = async() => {
      storage = await window.localStorage
      let storageData:string | null = storage.getItem('pokemon')
      if(typeof storageData === 'string')
      {
         allPokemon = await Promise.all(
         await JSON.parse(storageData).map(
             async (pokemon:string) => {
                 return await ajax(`https://pokeapi.co/api/v2/pokemon/${pokemon}` , 'GET')
     }
      ))
      }

     await setStatePokemon(allPokemon)
     await setLoad(true)
   }
   let max:number = 0
   statePokemon.map((element:IPokemon) => {
      return element.stats.reduce((prev:Stat,cur:Stat) => {
         if(prev.base_stat > cur.base_stat){
            return prev
         }
         return cur
      })
   }).map((stat:Stat) => {
      stat.max = 'max'
      return stat
   }).map((ele:Stat) => {
      if(ele.base_stat > max){
         max = ele.base_stat
         return ele
      }     
   }).map((element:Stat | undefined) => {
         if(element?.base_stat === max){
            element.maxAll = 'max'
            return element
         }
   })
   
   useEffect(() => { 
      loadData()
   }, [])
   
   return (<>
   <CompareStyle>
      {load &&
      <section>
         {statePokemon.map((data:IPokemon, i:number) => {
            return <article className="comparePokemon" key={i}>
                     <div>
                        <PokemonNameCompare styleParagraph={{background: colorPokemon(data.types[0].type.name)}}>{data.name}</PokemonNameCompare> 
                     </div>
                     <div className="imgCompare">

                        <img src={data.sprites.other.dream_world?.front_default 
                           ? data.sprites.other.dream_world?.front_default 
                           : data.sprites.front_default} alt={data.name} 
                        />

                     </div>
                        <div>
                           {data.stats.map((stat:Stat, i:number)=> {
                              return     <>
                                       <div key={i} className="section-stat">
                                          <p className="pokemon-stat">{stat.stat.name} </p>
                                          <div className="style-width-stat">
                                          {stat?.max 
                                          ? stat?.maxAll 
                                          ? <p className="max-stat-pokemonAll">{stat?.maxAll} from all pokemon</p>
                                          : <p className="max-stat-pokemon">{stat?.max} from this pokemon</p> 
                                          : null}
                                             <PokemonStyleBaseStatCompare stylePokemonBaseStat={{width: stat.base_stat , background: colorStat(stat.stat.name) }}>
                                                <p className="stat-base-stat">{stat.base_stat}</p>
                                             </PokemonStyleBaseStatCompare>
                                          </div>
                                       </div>
                                       </>
                           })}
                        </div>
                  </article>
            
         })}
      </section>}
     {!load&&
      <p className="loadData">Load...</p>}
   </CompareStyle>
   <Footer props={{width: '1440px' , color: 'white'}}/>
   </>
   )
}

export default Compare