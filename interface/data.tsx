export interface IData {
   count: number
   next: string
   previous: any
   results: IStat[];
}

export interface IStat {
        name: string;
        url: string;
}

export interface IStatPokemon {
    descriptions: Description[]
    gene_modulo: number
    highest_stat: HighestStat
    id: number
    possible_values: number[]
  }
  
  export interface Description {
    description: string
    language: Language
  }
  
  export interface Language {
    name: string
    url: string
  }
  
  export interface HighestStat {
    name: string
    url: string
  }
  

export interface IPokemonDescription {
  base_happiness: number
  capture_rate: number
  color: Color
  egg_groups: EggGroup[]
  evolution_chain: EvolutionChain
  evolves_from_species: EvolvesFromSpecies
  flavor_text_entries: FlavorTextEntry[]
  form_descriptions: never[]
  forms_switchable: false
  gender_rate: number
  genera: Genera[]
  generation: Generation
  growth_rate: GrowthRate
  habitat: Habitat
  has_gender_differences: false
  hatch_counter: number
  id: number
  is_baby: false
  is_legendary: false
  is_mythical: false
  name: string
  names: Name[]
  order: number
  pal_park_encounters: PalParkEncounter[]
  pokedex_numbers: PokedexNumber[]
  shape: Shape
  varieties: Variety[]
}

export interface Color {
  name: string
  url: string
}

export interface EggGroup {
  name: string
  url: string
}

export interface EvolutionChain {
  url: string
}

export interface EvolvesFromSpecies {
  name: string
  url: string
}

export interface FlavorTextEntry {
  flavor_text: string
  language: Language
  version: Version
}

export interface Language {
  name: string
  url: string
}

export interface Version {
  name: string
  url: string
}

export interface Genera {
  genus: string
  language: Language2
}

export interface Language2 {
  name: string
  url: string
}

export interface Generation {
  name: string
  url: string
}

export interface GrowthRate {
  name: string
  url: string
}

export interface Habitat {
  name: string
  url: string
}

export interface Name {
  language: Language3
  name: string
}

export interface Language3 {
  name: string
  url: string
}

export interface PalParkEncounter {
  area: Area
  base_score: number
  rate: number
}

export interface Area {
  name: string
  url: string
}

export interface PokedexNumber {
  entry_number: number
  pokedex: Pokedex
}

export interface Pokedex {
  name: string
  url: string
}

export interface Shape {
  name: string
  url: string
}

export interface Variety {
  is_default: true
  pokemon: Pokemon
}

export interface Pokemon {
  name: string
  url: string
}