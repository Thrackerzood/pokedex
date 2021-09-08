export default function colorStat(type:string){
   const state = 
   'attack' === type
   ? '#FE0000' :
   'defense' === type
   ? '#678FEE' :
   'special-attack' ===  type
   ? '#F7CF2F' :              
   'special-attack' ===  type 
   ? '#678FEE' :
   'speed'=== type
   ? '#77C850' : '#FC5589'
   return state
}