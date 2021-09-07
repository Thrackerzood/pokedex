import { NextPage } from "next"
import { Dispatch, SetStateAction, useState } from "react"
import colorPokemon from "../middleware/colorTypePokemon"

const PokemonPageContent:NextPage<any> = (props:any) => {
    const [showing, showMoreInfo]:[any , Dispatch<SetStateAction<any>>] = useState()
    return(<>
    {props.props.data.map((data:any, i:number) => { 
                let type1 = props?.props?.data[i]?.types[0]?.type?.name
                let type2 = props?.props?.data[i]?.types[1]?.type?.name 
                        const stateColor1:string = colorPokemon(type1)
                        const stateColor2:string = colorPokemon(type2)
            return (

            <>         
            <div key={i}

                className="pokemon-section" 

                onClick={() => showMoreInfo(i === showing ? null : i)}
            >
            <p className='pokemon-name'>{data?.forms[0]?.name}</p>
            <div className="pokemon-background"
                style={{background: stateColor1}}
            >
            <img className="pokemon-img"
                alt={data?.forms[0]?.name}
                src={data?.sprites?.other?.dream_world?.front_default 
                    ? data?.sprites?.other?.dream_world?.front_default 
                    : data?.sprites?.front_default}
            /></div>
            <div className="pokemon-type">
                <button className="pokemon-type1"
                    style={{background: stateColor1}}
                >
                    {data?.types[0]?.type?.name}</button>
                { data?.types[1]?.type?.name ?
                    <button className="pokemon-type2"
                        style={{background: stateColor2}}
                    >
                        {data?.types[1]?.type?.name}
                    </button>
                    : ''
                }
            </div>
            <div className="pokemon-stat">
                <span className="pokemon-stat-attack">
                    <div className="pokemon-stat-attack__div">
                       <p className="pokemon-stat-attack__sub-p">{props?.props?.data[i]?.stats[1]?.base_stat}</p> 
                    </div>
                    <p className="pokemon-stat-attack__sub-sub-p">{props?.props?.data[i]?.stats[1]?.stat?.name}</p></span>
                <span className="pokemon-stat-defense">
                    <div className="pokemon-stat-defense__div">
                       <p className="pokemon-stat-defense__sub-p">{props?.props?.data[i]?.stats[2]?.base_stat}</p> 
                    </div>
                    <p className="pokemon-stat-defense__sub-sub-p">{props?.props?.data[i]?.stats[2]?.stat?.name}</p>
                    </span>
            </div>
            </div>

            {showing === i
            ? 
            <div className="popup" key={i}>


                <div className='sub-popup'
                    style={{background: stateColor1}}
                >
                <div className="close-popup"
                    onClick={() => showMoreInfo(i === showing ? null : i)}
                ></div>
                <div className="sub-popup-background"></div>
                <p className="name-pokemon-popup">{data?.forms[0]?.name}</p>

                <div className="pokemon-ability">
                    <p>Abilities</p>
                    <div>
                        <p className="pokemon-ability1">{props?.props?.data[i]?.abilities[0]?.ability?.name} </p>
                        <p className="pokemon-ability2"> - {props?.props?.data[i]?.abilities[1]?.ability?.name ? props?.props?.data[i]?.abilities[1]?.ability?.name : ''}</p>
                    </div>
                </div>
                


                <div className="img-popup"
                style={{background: stateColor1}}
                >
                <img className="pokemon-img-popup"
                    alt={data?.forms[0]?.name}
                    src={data?.sprites?.other?.dream_world?.front_default 
                    ? data?.sprites?.other?.dream_world?.front_default 
                    : data?.sprites?.front_default}
                />
                <div className="pokemon-type-popup">
                    <button className="pokemon-type1"
                        style={{background: stateColor1}}
                    >
                    {data?.types[0]?.type?.name}</button>
                    { data?.types[1]?.type?.name ?
                    <button className="pokemon-type2"
                    style={{background: stateColor2}}
                    >
                        {data?.types[1]?.type?.name}
                    </button>
                    : ''}
                </div>


            </div>
            <div className="game-index"><p>{props?.props?.data[i]?.id}</p></div>

            <div className="statistic-pokemon">
                <div className="sub-statistic-pokemon">
                    <p className='health-pokemon'>Healthy Points</p>
                    <p className='exp-pokemon'>Experience</p>
                </div>
                <div className="sub-statistic-pokemon-number">
                    <p className='health-pokemon'>{props?.props?.data[i]?.stats[0]?.base_stat}</p>
                    <p className='exp-pokemon'>{props?.props?.data[i]?.base_experience}</p>
                </div>
                <div className="stat-pokemon">
                    <div className="stat-pokemon-health">
                        <div style={{width: props?.props?.data[i]?.stats[0]?.base_stat / 2}}></div>
                    </div>
                    <div className="stat-pokemon-exp">
                        <div style={{width: props?.props?.data[i]?.base_experience / 2}}></div>
                    </div>
                </div>
            </div>

                    <div className="statistic-pokemon-all">
                        <div className="statistic-sub">
                            <div className="statistic-sub-sub">
                                <p>{props?.props?.data[i]?.stats[1]?.base_stat}</p>
                            </div>
                            <p className="statistic-sub-p">Defense</p>
                        </div>
                        <div className="statistic-sub">
                            <div className="statistic-sub-sub">
                                <p>{props?.props?.data[i]?.stats[2]?.base_stat}</p>
                            </div>
                            <p className="statistic-sub-p">Attack</p>
                        </div>
                        <div className="statistic-sub">
                            <div className="statistic-sub-sub">
                                <p>{props?.props?.data[i]?.stats[3]?.base_stat}</p>
                            </div>
                            <p className="statistic-sub-p">Sp Attack</p>
                        </div>
                        <div className="statistic-sub">
                            <div className="statistic-sub-sub">
                                <p>{props?.props?.data[i]?.stats[4]?.base_stat}</p>
                            </div>
                            <p className="statistic-sub-p">Sp Defense</p>
                        </div>
                    </div>

        </div>
    </div>
            
            : null}
            </>)
            
        })
      }
   
   
   </>)
}

export default PokemonPageContent