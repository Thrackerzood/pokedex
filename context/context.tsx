import { Context, createContext } from "react";
import { TypePokemonArr } from "../interface/typePokemonInterface";


export const Contexts: Context<string> = createContext('') // имя покемона
export const Language: Context<string> = createContext('')
export const ContextPokemon: Context<TypePokemonArr> = createContext({
    "id": 1, "generation": { "name": "", "url": "" }, "name": "", "names": [ { "language": { "name": "", "url": "" }, "name": "" }, { "language": { "name": "", "url": "" }, "name": "" } ], "damage_relations": { "double_damage_from": [ { "name": "", "url": "" } ], "double_damage_to": [], "half_damage_from": [], "half_damage_to": [ { "name": "", "url": "" }, { "name": "", "url": "" } ], "no_damage_from": [ { "name": "", "url": "" } ], "no_damage_to": [ { "name": "", "url": "" } ] }, "game_indices": [ { "game_index": 0, "generation": { "name": "", "url": "" } }, { "game_index": 0, "generation": { "name": "", "url": "" } } ], "move_damage_class": { "name": "", "url": "" }, "moves": [ { "name": "", "url": "" }, { "name": "", "url": "" }, { "name": "", "url": "" } ], "past_damage_relations": [], "pokemon": [ { "pokemon": { "name": "", "url": "" }, "slot": 1 }, { "pokemon": { "name": "", "url": "" }, "slot": 1 }, { "pokemon": { "name": "", "url": "" }, "slot": 1 } ] 
   })