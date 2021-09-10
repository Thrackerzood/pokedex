import type { NextPage } from 'next'
import { IFooter } from '../interface/IFoteer'
import { FooterMain } from '../styles/footerStyle'

const Footer: NextPage<IFooter> = (prop:IFooter) => {
  return (
  <FooterMain width={prop.props.width} color={prop.props.color} className="footerMain">
    <p>Make with❤️</p>
    <a href="https://github.com/Thrackerzood/pokemonApi"><p>github</p></a>
  </FooterMain>
  )
}

export default Footer