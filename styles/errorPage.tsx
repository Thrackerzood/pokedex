import styled from "styled-components";

export const ErrorPage = styled.main
`
width: 100%;
display: flex;
background: #D93E30;
align-items: center;
flex-direction: column;
justify-content: center;
height: calc(100vh - 93px - 87px);
font-family: 'Karla', sans-serif , -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Open Sans', 'Helvetica Neue', sans-serif;
h1{
   font-size: 700px;
   text-align: center;
   color: rgba(0, 0, 0, 0.7);
}
>div{
   width: 100%;
   display: flex;
   margin: 0 auto;
   position: absolute;
   bottom: 190px;
}
.imgTeamRocket{
   top: 150px;
   margin: 0 auto;
   position: absolute;
}
p{
   width: 100%;
   font-size: 48px;
   font-weight: bold;
   letter-spacing: .1px;
}
.left-p{
   color: white;
   text-align: right;
}
button{
   height: 66px;
   width: 231px;
   border: none;
   padding: 20px;
   outline: none;
   font-size: 23px;
   margin-top: 20px;
   font-weight: bold;
   background: #F2CB07;
   border-radius: 15px;
   margin-bottom: 62px;
   box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
   :hover{
      background: #C2CB07;
   }
}
`