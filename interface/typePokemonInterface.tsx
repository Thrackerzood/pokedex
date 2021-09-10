export interface TypePokemonArr {
   id: number
   generation: Generation
   name: string
   names: Name[]
   damage_relations: DamageRelations
   game_indices: Index[]
   move_damage_class: MoveDamageClass
   moves: Mfe[]
   past_damage_relations: never[]
   pokemon: Pokemon[]
 }
 
 export interface Generation {
   name: string
   url: string
 }
 
 export interface Name {
   language: Language
   name: string
 }
 
 export interface Language {
   name: string
   url: string
 }
 
 export interface DamageRelations {
   double_damage_from: DoubleDamageFrom[]
   double_damage_to: any
   half_damage_from: any
   half_damage_to: HalfDamageTo[]
   no_damage_from: NoDamageFrom[]
   no_damage_to: NoDamageTo[]
 }
 
 export interface DoubleDamageFrom {
   name: string
   url: string
 }
 
 export interface HalfDamageTo {
   name: string
   url: string
 }
 
 export interface NoDamageFrom {
   name: string
   url: string
 }
 
 export interface NoDamageTo {
   name: string
   url: string
 }
 
 export interface Index {
   game_index: number
   generation: Generation2
 }
 
 export interface Generation2 {
   name: string
   url: string
 }
 
 export interface MoveDamageClass {
   name: string
   url: string
 }
 
 export interface Mfe {
   name: string
   url: string
 }
 
 export interface Pokemon {
   pokemon: Pokemon2
   slot: number
 }
 
 export interface Pokemon2 {
   name: string
   url: string
 }
 