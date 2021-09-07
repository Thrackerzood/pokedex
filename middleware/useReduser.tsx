export const reduser = (state:any,action:any) =>{
   switch(action.type){
      case 'hp': return [{id : action}, {id : action.payload}]
      case 'attack': return [{id : action}, {id : action.payload}]
      case 'defense': return [{id : action}, {id : action.payload}]
      case 'special-attack': return [{id : action}, {id : action.payload}]
      case 'special-defense': return [{id : action}, {id : action.payload}]
      case 'speed': return [{id : action}, {id : action.payload}]
      default: return state
   }
}