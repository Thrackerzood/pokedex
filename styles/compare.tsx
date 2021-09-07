import styled from "styled-components";

export const CompareS = styled.main
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
   align-items: center;
   justify-content: center;
   >img{
      max-width: 200px;
      max-height: 200px;
   }
}
`