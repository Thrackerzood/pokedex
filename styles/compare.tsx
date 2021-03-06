import styled from "styled-components";

export const CompareStyle = styled.main
`
margin: 0 auto;
max-width: 1440px;
min-height: calc(100vh - 87px - 93px);
>section{
   display: flex;
   margin: 0 auto;
   flex-wrap: wrap;
   max-width: 800px;
   align-items: flex-start;
   justify-content: space-around;
}
.pokemon-stat{
   text-align: start;
   text-transform: capitalize;
}
.section-stat{
   margin: 10px;
   display: flex;
   flex-direction: column;
}
p{
   font-family: 'Karla', sans-serif , -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
.comparePokemon{
   margin: 20px;
   width: 350px;
}
.loadData{
   width: 100%;
   font-size: 36px;
   margin-top: 45vh;
   text-align: center;
}
.imgCompare{
   width: 200px;
   height: 200px;
   display: flex;
   margin: 10px auto;
   align-items: center;
   justify-content: center;
   >img{
      max-width: 200px;
      max-height: 200px;
   }
}
.max-stat-pokemon{
   width: 100%;
   color: green;
   text-align: center;
   position: absolute;
   border-radius: 5px;
}
.max-stat-pokemonAll{
   color: red;
   width: 100%;
   text-align: center;
   position: absolute;
   border-radius: 5px;
}
.style-width-stat{
   width: 100%;
   position: relative;
   border-radius: 5px;
   background: #F6F7F9;
   >div{
      border-radius: 5px;
   }
}
.stat-base-stat{
   margin-left: 5px;
}
`


export const PokemonNameCompare = styled.p
`
margin: 5px;
padding: 5px;
font-size: 20px;
text-align: center;
border-radius: 20px;
text-transform: capitalize;
background: ${(props: {styleParagraph: {background: string}}) => props.styleParagraph.background}
`
export const PokemonStyleBaseStatCompare = styled.div
`
width: ${(props:{stylePokemonBaseStat: {width: number , background: string}}) => props.stylePokemonBaseStat.width}px;
background: ${(props:{stylePokemonBaseStat: {width: number , background: string}}) => props.stylePokemonBaseStat.background};
`