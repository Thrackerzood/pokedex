import { NextPage } from "next"
import { Dispatch, SetStateAction, useState } from "react"
import { IPokemon } from "../interface/pokemonInterface"
import colorPokemon from "../middleware/colorTypePokemon"
import { PokemonButton, PokemonImgPopup, StatPokemon, SubPopupPokemonImg } from "../styles/componentPokemonPageStyle"

    
    const PokemonPageContent:NextPage<{props: {data: IPokemon[] } }> = (props:{props: {data: IPokemon[] } }) => {
    const [showing, showMoreInfo]:[number | undefined | null , Dispatch<SetStateAction<number | undefined | null>>] = useState()

    const popupPokemonInfo = (data:IPokemon, i:number) => {
        let type1 = data?.types[0]?.type?.name
        let type2 = data?.types[1]?.type?.name 
                const stateColor1:string = colorPokemon(type1)
                const stateColor2:string = colorPokemon(type2)
        return (
              
        <div className="popup" key={data.id}>

        <SubPopupPokemonImg styleBackground={{background: stateColor1}} >
        <div className="close-popup"
            onClick={() => showMoreInfo(i === showing ? null : i)}
        ></div>
        <div className="sub-popup-background"></div>
        <p className="name-pokemon-popup">{data?.forms[0]?.name}</p>

        <div className="pokemon-ability">
            <p>Abilities</p>
            <div>
                <p className="pokemon-ability1">{data?.abilities[0]?.ability?.name} </p>
                <p className="pokemon-ability2"> -{data?.abilities[1]?.ability?.name ? data?.abilities[1]?.ability?.name : ''}</p>
            </div>
        </div>
        <PokemonImgPopup styleBackground={{background: stateColor1}}>
        <img className="pokemon-img-popup"
            alt={data?.forms[0]?.name}
            src={data?.sprites?.other?.dream_world?.front_default 
            ? data?.sprites?.other?.dream_world?.front_default 
            : data?.sprites?.front_default}
        />
        <PokemonButton background={{color1 : stateColor1 ,color2:  stateColor2}}>
            <button className="pokemon-type1">
            {data?.types[0]?.type?.name}</button>
            { data?.types[1]?.type?.name &&
            <button className="pokemon-type2">
            {data?.types[1]?.type?.name}
            </button>}
        </PokemonButton>
    </PokemonImgPopup>
    <div className="game-index"><p>{data?.id}</p></div>
    <div className="statistic-pokemon">
        <div className="sub-statistic-pokemon">
            <p className='health-pokemon'>Healthy Points</p>
            <p className='exp-pokemon'>Experience</p>
        </div>
        <div className="sub-statistic-pokemon-number">
            <p className='health-pokemon'>{data?.stats[0]?.base_stat}</p>
            <p className='exp-pokemon'>{data?.base_experience}</p>
        </div>
        <StatPokemon widthStat={{widthHealth: data?.stats[0]?.base_stat / 2, widthExp: data?.base_experience / 2}}>
            <div className="stat-pokemon-health">
                <div></div>
            </div>
            <div className="stat-pokemon-exp">
                <div></div>
            </div>
        </StatPokemon>
    </div>
            <div className="statistic-pokemon-all">
                <div className="statistic-sub">
                    <div className="statistic-sub-sub">
                        <p>{data?.stats[2]?.base_stat}</p>
                    </div>
                    <p className="statistic-sub-p">Defense</p>
                </div>
                <div className="statistic-sub">
                    <div className="statistic-sub-sub">
                        <p>{data?.stats[1]?.base_stat}</p>
                    </div>
                    <p className="statistic-sub-p">Attack</p>
                </div>
                <div className="statistic-sub">
                    <div className="statistic-sub-sub">
                        <p>{data?.stats[3]?.base_stat}</p>
                    </div>
                    <p className="statistic-sub-p">Sp Attack</p>
                </div>
                <div className="statistic-sub">
                    <div className="statistic-sub-sub">
                        <p>{data?.stats[4]?.base_stat}</p>
                    </div>
                    <p className="statistic-sub-p">Sp Defense</p>
                </div>
            </div>
            </SubPopupPokemonImg>
            </div>
    
        )
    }
    return(<>
    {props.props.data.map((data:IPokemon, i:number) => { 
                let type1 = data?.types[0]?.type?.name
                let type2 = data?.types[1]?.type?.name 
                        const stateColor1:string = colorPokemon(type1)
                        const stateColor2:string = colorPokemon(type2)
            return (

            <div key={i}>         
            <div

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
            <PokemonButton background={{color1 : stateColor1 ,color2:  stateColor2}}>
                <button className="pokemon-type1">
                {data?.types[0]?.type?.name}</button>
                { data?.types[1]?.type?.name &&
                <button className="pokemon-type2">
                {data?.types[1]?.type?.name}
                </button>
                }
            </PokemonButton>
            <div className="pokemon-stat">
                <span className="pokemon-stat-attack">
                    <div className="pokemon-stat-attack__div">
                       <p className="pokemon-stat-attack__sub-p">{data?.stats[1]?.base_stat}</p> 
                    </div>
                    <p className="pokemon-stat-attack__sub-sub-p">{data?.stats[1]?.stat?.name}</p></span>
                <span className="pokemon-stat-defense">
                    <div className="pokemon-stat-defense__div">
                       <p className="pokemon-stat-defense__sub-p">{data?.stats[2]?.base_stat}</p> 
                    </div>
                    <p className="pokemon-stat-defense__sub-sub-p">{data?.stats[2]?.stat?.name}</p>
                    </span>
            </div>
            </div>

            {showing === i &&

                popupPokemonInfo(data , i)

            }
            </div>)
            
        })
      }

   </>)
}

export default PokemonPageContent