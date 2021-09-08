import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle
`
*{
   margin: 0;
   padding: 0;
}

body{
   background-color: ${(props:any) => props.theme.body};
}
.main-pokedex__p{
   color: ${(props:any) => props.theme.color};
}
footer{
   background: ${(props:any) => props.theme.backgroundFooter} !important;
   p{
      color: ${(props:any) => props.theme.colorFooter} !important; 
   }
}
nav{
   a{
      color: ${(props:any) => props.theme.colorNav} !important;
   }
   background: ${(props:any) => props.theme.backgroundColorNav} !important;
}
header{
   background: ${(props:any) => props.theme.backgroundColorNav} !important;
}
main{
   background: ${(props:any) => props.theme.backgroundFooter} !important;
}
.open-section-pokemon{
   >p{
      color: ${(props:any) => props};
   }
}
.top-li{
   color: ${(props:any) => props.theme.color}; 
   background: ${(props:any) => props.theme.backgroundColorNav} !important;
}
.select{
   background: ${(props:any) => props.theme.backgroundColorNav} !important;
}
.allPokemonDescription{
   >p{
      color: ${(props:any) => props.theme.color}; 
   }
   
   .description-stat{
      >p{
         color: ${(props:any) => props.theme.color}; 
      }
   }
}
.characteristicPokemon{
   color: ${(props:any) => props.theme.color}; 
}
.right-button{
   .right-button1{
      background-color:${(props:any) => props.theme.color}; 
   }
   .right-button2{
      background-color:${(props:any) => props.theme.color}; 
   }
   
}
.left-button{
   .left-button1{
      background-color:${(props:any) => props.theme.color}; 
   } 
   .left-button2{
      background-color:${(props:any) => props.theme.color}; 
   } 
}
.article-p{
   color: ${(props:any) => props.theme.color};
}
.article-sub-p{
   color: ${(props:any) => props.theme.color};
}
`


export const Styled = styled.div
`
color: ${(props) => props.theme.fontColor};

`