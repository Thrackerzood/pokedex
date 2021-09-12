import { Dispatch, MutableRefObject, SetStateAction } from "react";
export interface IContent{
   props: { showing: number , 
      rangeAttack: {
         rangeAttackFrom: number , 
         rangeAttackTo:number},
      rangeExp: {rangeExpFrom: number ,
         rangeExpTo: number} , 
         statePokemonAttack: boolean | undefined ,
      statePokemonExp: boolean | undefined ,
      setStatePokemonAttack: Dispatch<SetStateAction<boolean | undefined>>,
      setStatePokemonExp: Dispatch<SetStateAction<boolean | undefined>>,
      deleteValueFromRefElement: (refOne: MutableRefObject<HTMLInputElement | null>, refTwo: MutableRefObject<HTMLInputElement | null>, placeholderValue: string) => void,
      refPokemonAttackRangeFrom:MutableRefObject<HTMLInputElement|null> , 
      refPokemonAttackRangeTo:MutableRefObject<HTMLInputElement|null>,
      refPokemonExpRangeFrom:MutableRefObject<HTMLInputElement|null>,
      refPokemonExpRangeTo:MutableRefObject<HTMLInputElement|null>,
      setMaxStateAttack:Dispatch<SetStateAction<{maxAttack: number}>>,
      setMaxStateExp:Dispatch<SetStateAction<{maxExp: number}>>,
   }
}