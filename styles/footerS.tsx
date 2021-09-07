import styled from 'styled-components'




export const FooterS:any = styled.footer
`
height: 87px;
display: flex;
margin: 0 auto;
max-width:  ${(prop:any) => prop?.width}px;
background: ${prop => prop.color};
align-items: center;
justify-content: space-between;
@media screen and (max-width: 1200px){
    width: 100%;
    justify-content: space-around;
  }
p{
    color: black;
    margin-top: 8px;
    font-size: 18px;
    font-weight: 500;
    margin-left: 130px;
    margin-right: 220px;
    letter-spacing: .9px;
    font-family: 'Karla', sans-serif;
    @media screen and (max-width: 1200px){
        margin: 0;
      }
}
a{
    text-decoration: none;
}
`
