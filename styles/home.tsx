import styled from 'styled-components'




export const HomeStyle = styled.main
`
display: flex;
margin: 0 auto;
max-width: 1440px;
overflow: hidden;
min-height: calc(100vh - 180px);
position: relative;
justify-content: space-between;
background: linear-gradient(180deg, #F5DB13 0%, #F2B807 100%);
font-family: 'Karla', sans-serif , -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
@media screen and (max-width: 1200px){
  flex-direction: column;
}
.clouds{
    z-index: 0;
    top: 130px;
    right: 70px;
    position: absolute;
}
.pokeball{
    z-index: 2;
    top: 150px;
    left: 70px;
    position: absolute;
    animation: animationPokeballLux 6s both ease-in-out infinite;
    @keyframes animationPokeballLux {
        0%,
        100% {
          transform: translateY(0);
        }
        10% {
          transform: translateY(-2px);
        }
        60% {
          transform: translateY(2px);
        }
        80% {
          transform: translateY(4px);
        }
        90% {
          transform: translateY(-4px);
        }
    }  
}
.pokeball2{
    right: 0;
    top: 95px;
    z-index: 4;
    position: absolute;
    animation: animationPokeballRed 9s both ease-in-out infinite;
    @keyframes animationPokeballRed {
        0%,
        100% {
          transform: translateX(2px);
          transform: translateY(2px);
        }
        20% {
          transform: translateY(-2px);
        }
        60% {
          transform: translateX(4px);
          transform: translateY(4px);
        }
        80% {
          transform: translateY(2px);
        }
        90% {
          transform: translateY(3px);
        }
    }
}
.pikachu{
    top: 140px;
    z-index: 5;
    margin: 0 auto;
    position: absolute;
    @media screen and (max-width: 1200px){
      top: 100px;
    }
}
.container-img{
    right: 0;
    width 793px;
    height 727px;
    position: inherit;
    @media screen and (max-width: 1200px){
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
    }
}
article{
    width 480px;
    height: 500px;
    margin-top: 130px;
    margin-left: 160px;
    @media screen and (max-width: 1200px){
      margin: 50px auto;
    }
    
}
.article-p{
    height: 252px;
    font-size: 72px;
    letter-spacing: 4.1px;
}
.article-sub-p{
    width: 550px;
    font-size: 32px;
    margin-top: 60px;
    letter-spacing: .3px;
}
.article-sub-b{
    display: block;
    font-size: 72px;
    letter-spacing: 2px;
}
.article-b{
    margin-left: 5px;
    margin-right: 20px;
}
button{
    border: none; 
    outline: none;
    font-size: 23px;
    margin-top: 60px;
    padding: 20px 35px;
    border-radius: 11px;
    background: #73D677;
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    :hover{
        background: #51D677;
    }
}
`