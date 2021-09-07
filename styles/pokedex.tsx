import styled from 'styled-components'




export const PokedexS = styled.main
`
.loading-state{
    font-size: 46px;
    text-align: center;
}
.search-div_container{
    width: 75%;
    display: flex;
    margin: 0 auto;
    position: relative;
    flex-direction: column;
}
.search-div{
    left: 0;
    top: 95px;
    width: 100%;
    z-index: 10;
    max-height: 300px;
    max-width: 100%;
    position: absolute;
    background: white;
    border-radius: 20px 20px 20px 20px;
    box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.1);
    border: 1px solid:  grey;
    >p{
        margin: 20px;
        font-size: 24px;
        cursor: pointer;
    }
}
display: flex;
margin: 0 auto;
max-width: 1440px;
align-items: center;
flex-direction: column;
min-height: calc(100vh - 180px);
font-family: 'Karla', sans-serif;
.main-pokedex__p{
    width: 100%;
    font-size: 35px;
    margin-top: 73px;
    text-align: center;
    letter-spacing: 3px;
}
.main-pokedex__b{
    margin-left: 20px;
    margin-right: 24px;
}
.main-pokedex__search{
    min-width: 100%;
    outline: none;
    padding: 21px;
    border: none;
    margin: 26px auto 0;
    padding-left: 30px;
    border-radius: 40px;
    background: #F2F2F2;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0px;
    color: rgba(33, 33, 33, 0.8);
    font-family: 'Karla', sans-serif;
    box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.2);
}
.main-pokedex__select-div{
    height: 60px;
    width: 75%;
    display: flex;
    align-items: center;
    @media screen and (max-width: 1200px){
       width: 100%;
       margin: 0 auto;
       justify-content: center;
    }
}
.main-pokedex__select-sub-div{
    width: 700px;
    display: flex;
    @media screen and (max-width: 1200px){
        width: 100%;
        justify-content: center;
     }
}

.top-ul{
    display: flex;
    margin-top: 30px;
}
.top-li{
    >span{
        width: 135px;
        position: absolute;
        padding-bottom: 40px;
    }
    width: 135px;
    position: relative;
    border-radius: 5px;
    margin-left: 30px;
    margin-right: 35px;
    background: #F2F2F2;
    list-style-type: none;
    font-family: 'Karla', sans-serif;
    >p{
        padding: 2px;
        cursor: pointer;
        text-align: center;
        letter-spacing: -0.3px;
    }
    :hover >.select{
        display: block;
    }
}
.clip-path{
    top: 12px;
    right: 5px;
    width: 7px;
    height: 4px;
    background: black;
    position: absolute;
    clip-path: polygon(100% 0, 100% 20%, 50% 70%, 0 20%, 0 0, 50% 40%);
}


.pokedex-main__content{
    height: 500px;
    max-width: 1125px;
    margin: 52px auto;
    @media screen and (max-width: 1200px){
        width: 100%;
        height: auto;
        margin: 0 auto;  
    }
}

.select{
    top: 35px;
    z-index: 2;
    width: 135px;
    display: none;
    height: 110px;
    overflow-x: scroll;
    border-radius: 5px;
    position: absolute;
    background: #F2F2F2;
    padding-bottom: 15px;
    border-radius: 0 0 8px 8px;
    ::-webkit-scrollbar{
        width: 6px;
        height: 0px;
        }
        ::-webkit-scrollbar-thumb{
        background: #B3AFB3;
        border-radius: 0px;
        }
        ::-webkit-scrollbar-thumb:hover{
        background: #B3AFB3;
        }
        ::-webkit-scrollbar-track{
        background: #F0F0F0;
        border-radius: 0px;
        box-shadow: inset 0px 0px 0px 0px #F0F0F0;
    }
}
.sub-ul{
    display: flex;
    flex-direction: column;
}
.sub-li{
    width: 100%;
    display: flex;
    line-height: 2px;
    margin: 7px auto;
    align-items: center;
    list-style-type: none;
    input{
        outline: none;
        margin-right: 7px;
    }
    >label{
        display: flex;
        cursor: pointer;
        margin-top: 12px;
        margin-left: 35px;
        align-items: center;
    }
}
.not-found_p{
    max-width: 100%;
    text-align: center;
    margin: 25vh 0;
    font-size: 48px;
}
`