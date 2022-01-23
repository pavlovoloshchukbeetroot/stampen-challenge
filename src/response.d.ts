
type Gender = "Male" | "Female" | "Robot"

interface Response<R> {
  count: number,
  next?: any,
  previous?: any,
  results: R[]
}

interface CommonFields {
  created: string,
  edited: string,
}

export interface Film
extends CommonFields {
  opening_crawl: string,
  release_date: string,
  episode_id: number,
  characters: string[],
  starships: string[],
  vehicles: string[],
  director: string,
  producer: string | string[],
  planets: string[],
  species: string[],
  title: string,
  url: string,
}

export interface Planet
extends CommonFields {
  orbital_period: string,
  rotation_period: string,
  surface_water: string,
  population: string,
  residents: string[],
  diameter: string,
  gravity: string,
  climate: string,
  terrain: string,
  films: string[],
  name: string,
  url: string,
}

export interface Character
extends CommonFields {
  birth_year: string,
  hair_color: string,
  skin_color: string,
  starships: string[],
  homeworld: string,
  eye_color: string,
  vehicles: string[]
  species: string[],
  gender: Gender,
  height: string,
  films: string[],
  mass: string,
  name: string,
  url: string,
}
