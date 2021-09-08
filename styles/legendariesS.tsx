import styled from "styled-components";

export const LegendariesS = styled.main
`
p{
   cursor: default;
}
.load{
   width: 100%;
   margin-top: 120px;
   text-align: center;
}
.pokemonStorage{
   width: 100%;
   display: flex;
   >p{
      cursor: default;
      font-size: 12px;
      margin-right: 5px;
   }
}
.compareTrue{
   color: green;
   cursor: pointer;
   user-select: none;
   text-transform: capitalize;
}
.compareFalse{
   color: red;
   cursor: pointer;
   user-select: none;
   text-transform: capitalize;
}
margin: 0 auto;
max-width: 1440px;
min-height: calc(100vh - 87px - 93px);
font-family: 'Karla', sans-serif , -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
.left-button{
   width: 30px;
   height: 50px;
   position: relative;
}
.left-button1{
   width: 9px;
   height: 30px;
   top: 15px;
   position: absolute;
   border-radius: 5px;
   background: #F5DB13;
   transform: rotate(130deg);
}
.left-button2{
   width: 9px;
   height: 30px;
   position: absolute;
   border-radius: 5px;
   background: #F5DB13;
   transform: rotate(45deg);
}
.right-button{
   width: 30px;
   height: 50px;
   position: relative;
}
.right-button1{
   width: 9px;
   height: 30px;
   top: 15px;
   position: absolute;
   border-radius: 5px;
   background: #F5DB13;
   transform: rotate(45deg);
}
.right-button2{
   width: 9px;
   height: 30px;
   position: absolute;
   border-radius: 5px;
   background: #F5DB13;
   transform: rotate(130deg);
}
.sub-section-slider{
   display: flex;
   width: 1080px; 
   margin: 0 auto;
   overflow: hidden;
   min-height: 267px;
   position: relative;
   justify-content: flex-start;
}
.section-slider{
   display: flex;
   transition: .3s;
   max-width: 1080px;
   position: absolute;
}
.section-pokemon{
   margin: 20px;
   height: 267px;
   display: flex;
   margin: 0 auto;
   max-width: 1200px;
   position: relative;
   align-items: center;
}
.characteristicPokemon{
   margin: 0 auto;
   font-size: 72px;
   line-height: 130px;
   max-width: 1200px;
   border-bottom: 1px solid;
}

.openNamePokemon{
   margin: 10px 0;
   font-size: 72px;
   text-transform: capitalize;
}
.openPokemonArticle{
   width: 100%;
   height: 579px;
   display: flex;
   justify-content: space-between;
}
.description{
   margin: 5px 0;
}
.section-close-pokemon{
   cursor: pointer;
   img{
      height: 150px;
   }
   margin: 25px;
   height: 180px;
   display: flex;
   min-width: 130px;
   position: relative;
   align-items: center;
   border-radius: 16px;
   flex-direction: column;
   justify-content: flex-end;
   background: radial-gradient(677.11% 487.95% at 102.13% -20%,#ffc44d 0%,#a28447 20.31%,#4a4533 39.58%,#FFF3A6 59.38%,#F9DF7B 78.13%,#ffd98c 100%);
   .name-description{
      width: 130px;
      height: 40px;
      display: flex;
      align-items: center;
      border-radius: 16px;
      filter: drop-shadow(4px 4px 4px rgba(33, 33, 33, 0.1));
      background: linear-gradient(180deg, #FFFFFF 30.32%, #F5F5F5 100%);
      >p{
         width: 100%;
         text-align: center;
         text-transform: capitalize;
      }
      >div{ 
         width: 18px;
         height: 18px;
         margin: 12px 12px 12px 0;
         filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
         >img{
            max-width: 100%; 
            max-height: 100%;
         }
      }
   }
   .background-section-close{
      z-index: 10;
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 16px;
      background: rgba(255,255,255,.3);
   }
}
.allPokemonDescription{
   margin: 20px;
   width: 460px;
   height: 440px;
   display: flex;
   flex-direction: column;
}
.open-section-pokemon{
   top: 0;
   left: 0;
   height: 579px;
   margin: 0 auto;
   max-width: 1100px;
}
.img-open-section-pokemon{
   width: 500px;
   display: flex;
   align-items: center;
   justify-content: center;
}
.sub-img-open-section-pokemon{
   height: 400px;
   max-width: 400px;
}
.sub-open-section-pokemon{
   min-width: 100%;
}
.description-stat{
   width: 150px;
   display: flex;
   margin: 15px 0;
   flex-direction: column;
   text-transform: capitalize;
}
.width-stat{
   height: 7px;
   border-radius: 8px;
   background: #F6F7F9;
   >div{
      height: 7px;
      border-radius: 8px;
      background: #F5DB13;
   }
}
.description-stat-all{
   display: flex;
   flex-wrap: wrap;
   max-width: 425px;
   justify-content: space-between;
}
`