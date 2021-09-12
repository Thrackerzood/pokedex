import styled from "styled-components";



export const NavStyle = styled.header
`
.active{
   border-radius: 2px;
   border-bottom: 3px solid;
}
z-index: 20;
height: 93px;
display: flex;
max-width: 100%;
position: sticky;
align-items: center;
background-color: #F5DB13;
justify-content: space-evenly;
box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
.logo{
   min-width: 159px;
}
nav{
   height: 100%;
   width: 600px;
   display: flex;
   margin-left: 17%;
   justify-content: center;
   @media screen and (max-width: 1200px){
      width: 100%;
      margin: 25px;
    }
}
ul{
   width: 100%;
   display: flex;
   align-items: center;
   list-style-type: none;
   justify-content: space-between;
      a{ 
         color: black;
         font-size: 24px;
         font-family: Karla;
         padding-bottom: 10px;
         text-decoration: none;
         font-family: 'Karla', sans-serif , -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      } 
   }
}

label{
   margin-top: 10px;
}
.checkbox-switch {
	position: relative;	
	display: inline-block;
	box-sizing: border-box;			
	width: 80px;	
	height: 44px;
   display: flex;
   align-items: center;
	border: 1px solid rgba(0, 0, 0, .1);
	border-radius: 100px;	
	background: rgb(0,0,0, .1);
	transition: .2s;
   :before{
      top: 2.5px;
      left: 2px;
      content: '';
	   position: absolute;	
	   width: 38px;	
	   height: 38px;
	   border-radius: 100px;
	   transition: .15s;
      background: white url('img/sun.png') no-repeat 50% 50%;
   }
}
input {
	display: none;
}
input:checked + .checkbox-switch::before {
   top: 2px;
	transform:translateX(35px);
   background: white url('img/Subtract.png') no-repeat 50% 50%;
}
.lang-toggle{
   padding: 5px;
   display: flex;
   font-size: 18px;
   border-radius: 100%;
   width: 30px;
   height: 30px;
   background: rgb(0,0,0, .1);
   align-items: center;
   margin: 10px 20px  0 20px;
   border: 1px solid rgba(0,0,0,.1);
   justify-content: center;
   cursor: pointer;
   user-select : none;
   font-weight: 500;
   font-family: 'Karla', sans-serif , -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`