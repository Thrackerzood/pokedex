import styled from "styled-components";


export const PokemonSection = styled.article
`
width: 100%;
display: flex;
flex-wrap: wrap;
min-height: 510px;
align-items: flex-start;
justify-content: space-between;
@media screen and (max-width: 1200px){
    width: 100%;
    margin: 20px auto;
    justify-content: space-around;
}
.pokemon-section{ 
    width: 352px;
    height: 137px;
    margin: 0 0 40px;
    overflow: hidden;
    position: relative;
    border-radius: 8px;
    background: #F6F7F9;
    text-transform: capitalize;
    text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    font-family: 'Karla',sans-serif ,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
}
.pokemon-name{
    top: 5px;
    left: 20px;
    font-size: 18px;
    font-weight: 900;
    position: absolute;
    text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);   
}
.pokemon-img{
    max-width: 203px;
    max-height: 167px;   
}
button{
    font-size: 12px;
    border: none;
    outline: none;
    border-radius: 11px;
    box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.18);
}

.pokemon-stat{
    left: 28px;
    bottom: 40px;
    display: flex;
    position: absolute;
}

.pokemon-stat-attack{
    display: flex;
    color: #4B4B4B;
    font-size: 15px;
    text-align: center;
    flex-direction: column;
}
.pokemon-stat-attack__sub-p{
    font-size: 15px;
}
.pokemon-stat-attack__sub-sub-p{
    font-size: 12px;
}
.pokemon-stat-defense__sub-p{
    font-size: 15px;
}
.pokemon-stat-defense__sub-sub-p{
    font-size: 12px;
}
.pokemon-stat-defense{
    margin: 0 5px;
    display: flex;
    color: #4B4B4B;
    font-size: 15px;
    text-align: center;
    flex-direction: column;
}
.pokemon-stat-attack__div{
    width: 40px;
    height: 40px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 0 0.15em #000;
}
.pokemon-stat-defense__div{
    width: 40px;
    height: 40px;
    display: flex;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    box-shadow: inset 0 0 0 0.15em #000;
}
.pokemon-background{
    width: 233px;
    float: right;
    height: 137px;
    display: flex;
    justify-content: center;
}



.popup{
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100; 
    height: 100vh;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    background: rgb(0, 0, 0, 0.5);
}

.sub-popup-background{
    z-index: 0;
    width: 100%;
    height: 371px;
    position: absolute;
    border-radius: 15px;
    background: linear-gradient(180deg, rgb(0,0,0,0.4) 42.19%, rgb(0,0,0,0) 100%);
}
.pokemon-img-popup{
    padding: 10px;
    max-width: 341px;
    max-height: 341px;
    position: absolute;
    @media screen and (max-width: 1200px){
        top: 0px;
        display: block;
    }
}
.pokemon-type-popup{
    right: 15px;
    bottom: 15px;
    position: absolute;
    @media screen and (max-width: 1200px){
        top: 270px;
    }
}
.name-pokemon-popup{
    top: 20px;
    left: 385px;
    color: white;
    font-size: 36px;
    font-weight: bold;
    position: absolute;
    text-transform: capitalize;
    @media screen and (max-width: 1200px){
        left: 0;
        top: 300px;
        width: 100%;
        text-align: center;
    }
}
.pokemon-ability{
    top: 80px;
    left: 380px;
    height: 60px;
    width: 264px;
    display: flex;
    font-size: 16px;
    font-weight: 700;
    background: white;
    position: absolute;
    border-radius: 10px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    box-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
    @media screen and (max-width: 1200px){
        left: 0;
        top: 360px;
        width: 90%;
        margin: 20px;
    }
    >div{
        width: 100%;
        display: flex;
        margin-left: 30px;
        text-transform: capitalize;
    }
    >p{
        width: 100%;
        text-align:start;
        margin-left: 30px;
    }
}
.game-index{
    top: 29px;
    right: 20px;
    width: 40px;
    height: 40px;
    display: flex;
    font-size: 16px;
    position: absolute;
    background: #F2CB07;
    align-items: center;
    border-radius: 100px;
    justify-content: center;
}
.statistic-pokemon{
    right: 20px;
    width: 400px;
    height: 77px;
    display: flex;
    bottom: 126px;
    font-size: 16px;
    font-weight: 700;
    background: white;
    position: absolute;
    border-radius: 10px;
    box-shadow: 4px 4px 4px rgb(33 33 33 / 10%);
    @media screen and (max-width: 1200px){
        right: 0;
        width: 90%;
        margin: 15px;
        
    }
}
.sub-statistic-pokemon{
    margin-top: 20px;
    display: flex;
    margin-left: 20px;
    >p{
        margin-right: 60px;
    }
}
.sub-statistic-pokemon-number{
    left: 20px;
    bottom: 20px;
    display: flex;
    font-size: 16px;
    position: absolute;
    >p{ 
        width: 110px;
        margin-right: 60px;
    }
    @media screen and (max-width: 1200px){
        width: 100%;
    }
}
.close-popup{
    right: 5px;
    top: -57px;
    width: 30px;
    height: 30px;
    transition: .5s;
    background: black;
    position: absolute;
    border-radius: 5 0px;
    clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
    :hover{
        transform: rotate(180deg);
    }
    @media screen and (max-width: 1200px){
        display: block;
    }
}
.statistic-pokemon-all{
    right: 20px;
    height: 80px;
    width: 400px;
    bottom: 25px;
    display: flex;
    position: absolute;
    border-radius: 10px;
    justify-content: space-between;
    @media screen and (max-width: 1200px){
        right: 0;
        justify-content: space-around;
    }
}
.statistic-sub{
    width: 82px;
    height: 79px;
    display: flex;
    background: white;
    border-radius: 10px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}
.statistic-sub-sub{
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    border-radius: 100px;
    justify-content: center;
    box-shadow: inset 0 0 0 0.15em #000;
}
.statistic-sub-p{
    font-size: 14px;
}
.switch-section__prev{
    padding: 4px;
    border: none;
    border-radius: 5px;
    background: #212121;
    :hover{
        background: gray;
    } 
}
.switch-section__next{
    padding: 4px;
    border: none;
    border-radius: 5px;
    background: #212121;
    :hover{
        background: gray;
    }
}
.switch-section__this{
    margin: 0 16px;
    padding: 4px;
    border: none;
    border-radius: 5px;
    background: #212121;
}
`