import styled from "styled-components";

 


export const PokemonButton = styled.div
`
left: 28px;
bottom: 20px;
display: flex;
position: absolute;

.pokemon-type1{
   min-width: 60px;
   min-height: 16px;
   background: ${(prop:{background: {color1: string, color2: string}}) => prop.background.color1}
}
.pokemon-type2{
   min-width: 60px;
   min-height: 16px;
   margin-left: 15px;
   background: ${(prop:{background: {color1: string, color2: string}}) => prop.background.color2}
`
export const StatPokemon = styled.div
`
left: 20px;
width: 350px;
height: 5px;
bottom: 15px;
display: flex;
position: absolute;
@media screen and (max-width: 1200px){
    display: block;
}
.stat-pokemon-health{
   min-width: 170px;
   >div{
       height: 5px;
       max-width: 200px;
       border-radius: 5px;
       width: ${((prop:{widthStat: {widthHealth: number, widthExp: number}}) => prop.widthStat.widthHealth)}px;
       background: linear-gradient(270deg, #64D368 0.15%, #64D368 70.88%); 
   }   
}
.stat-pokemon-exp{
   min-width: 200px;
   >div{
       height: 5px;
       max-width: 200px;
       border-radius: 5px;
       width: ${((prop:{widthStat: {widthHealth: number, widthExp: number}}) => prop.widthStat.widthExp)}px;
       background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
   }
}
`
export const PokemonImgPopup = styled.div
`
   z-index: 10;
   width: 364px;
   height: 100%;
   display: flex;
   position: relative;
   align-items: center;
   justify-content: center;
   border-radius: 15px 0 0 15px;
   box-shadow: 4px 4px 8px rgba(1, 28, 64, 0.2);
   @media screen and (max-width: 1200px){
       top: 0;
       width: 100%; 
       height: 300px;
       flex-direction: column;
       border-radius: 15px 15px 15px 15px;
   }
   background: ${((props:{styleBackground: {background: string;}}) => props.styleBackground?.background)}
`
export const SubPopupPokemonImg = styled.div
` 
   height: 371px;
   z-index: 1000;
   width: 800px;
   position: relative;
   border-radius: 15px;
   @media screen and (max-width: 1200px){
       width: 400px;
       display: flex;
       height: 700px;
       align-items: center;
       flex-direction: column;
       justify-content: flex-start;
   }
   background: ${((props:{styleBackground: {background: string;}}) => props.styleBackground?.background)}
`