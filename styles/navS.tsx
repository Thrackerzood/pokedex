import styled from "styled-components";



export const NavS = styled.header
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
	border: 1px solid rgba(0, 0, 0, .1);
	border-radius: 100px;	
	background: rgb(0,0,0, .1);
	transition: .2s;
   :before{
      top: 1px;
      content: '';
	   position: absolute;	
	   width: 39px;	
	   height: 39px;
	   border-radius: 100px;
	   background: white;
	   transition: .15s;
   }
}

input {
	display: none;
}

input:checked + .checkbox-switch:before {
	transform:translateX(38px);
}
`