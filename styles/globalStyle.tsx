import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle
`
*{
   margin: 0;
   padding: 0;
}
.pokemonStorage{
   >p{
      color: ${(props:{theme: {color: string , body: string}}) => props.theme.color};
   }
}
.pokemon-stat{
   color: ${(props:{theme: {color: string , body: string}}) => props.theme.color};
}
body{
   background-color: ${(props:{theme: {body: string}}) => props.theme.body};
}
.main-pokedex__p{
   color: ${(props:{theme: {color: string , body: string}}) => props.theme.color};
}
footer{
   background: ${(props: {theme: {color: string ,backgroundFooter: string , body: string}}) => props.theme.backgroundFooter} !important;
   p{
      color:${(props: {theme: {color: string ,backgroundFooter: string , body: string}}) => props.theme.color} !important; 
   }
}
nav{
   a{
      color: ${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string}}) => props.theme.colorNav} !important;
   }
   background: ${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}}) => props.theme.backgroundColorNav} !important;
}
header{
   background: ${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}}) => props.theme.backgroundColorNav} !important;
}
main{
   background: ${(props: {theme: {color: string ,backgroundFooter: string , body: string}}) => props.theme.backgroundFooter} !important;
}
.open-section-pokemon{
   >p{
      color: ${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}}) => props.theme.color};
   }
}
.top-li{
   color: ${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}}) => props.theme.color}; 
   background: ${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}}) => props.theme.backgroundColorNav} !important;
}
.select{
   background: ${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}}) => props.theme.backgroundColorNav} !important;
}
.allPokemonDescription{
   >p{
      color: ${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}}) => props.theme.color}; 
   }
   
   .description-stat{
      >p{
         color: ${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}}) => props.theme.color}; 
      }
   }
}
.characteristicPokemon{
   color: ${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}}) => props.theme.color}; 
}
.right-button{
   .right-button1{
      background-color:${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}})=> props.theme.color}; 
   }
   .right-button2{
      background-color:${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}}) => props.theme.color}; 
   }
   
}
.left-button{
   .left-button1{
      background-color:${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}})=> props.theme.color}; 
   } 
   .left-button2{
      background-color:${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}}) => props.theme.color}; 
   } 
}
.article-p{
   color: ${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}}) => props.theme.color};
}
.article-sub-p{
   color: ${(props:{theme: {color: string ,backgroundFooter: string , body: string , colorNav: string, backgroundColorNav: string , colorFooter: string}}) => props.theme.color};
}
`


export const Styled = styled.div
`
color: ${(props) => props.theme.fontColor};

`