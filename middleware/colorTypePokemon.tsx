export default function colorPokemon(type:string){
   const state = 
   'fire' === type
   ? '#D93E30' :
   'grass' === type
   ? '#7AC74C' :
   'electric' ===  type
   ? '#f2cb07' :              
   'water' ===  type 
   ? '#35BAFF' :
   'ground'=== type
   ?'#E2BF65':
   'rock' ===  type
   ? '#B6A136':
   'fairy' ===  type
   ? '#D685AD':
   'poison' ===  type 
   ? '#64D368':
   'bug' ===  type
   ? '#A6B91A':
   'dragon' ===  type 
   ? '#6F35FC':
   'psychic' === type
   ? '#F95587':
   'flying'===  type 
   ? '#A98FF3' :
   'fighting' ===  type
   ? '#C22E28' :
   'normal' ===  type
   ? '#A8A77A' :
   'ice' ===  type
   ? '#96D9D6' :
   'ghost' ===  type
   ? '#735797' :
   'dark' ===  type
   ? '#705746' : '#B7B7CE'
   return state
}