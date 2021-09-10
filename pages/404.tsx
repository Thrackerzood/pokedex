import { NextPage } from "next";
import Link from "next/link";
import Footer from "../components/footer";
import { ErrorPage } from "../styles/errorPage";

const errorPage:NextPage = () => {
   return (
   <ErrorPage>
      <h1>404</h1>
      <img src="/img/teamRocket.png" alt="teamRocket" className="imgTeamRocket"/>
      <div><p className="left-p">The rocket team</p><p className="right-p">has won this time.</p></div>
      <Link href="/"><button>Return</button></Link>
      <Footer props={{width: '100%' , color: '#D93E30'}}/>
   </ErrorPage>)
}

export default errorPage