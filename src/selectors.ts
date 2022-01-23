import axios from "axios"
import type { Response, Film, Planet, Character } from "response"


const API_BASE_URL = 'https://swapi.dev/api/'
const IMG_BASE_URL = 'https://starwars-visualguide.com/assets/img/'

const dataService = axios.create({ baseURL: API_BASE_URL })

export const getMovies = async () => await dataService
  .get<Response<Film>>('films')
  .then(r => r.data)
export const getPlanets = async () => await dataService
  .get<Response<Planet>>('panets')
  .then(r => r.data)
export const getCharacters = async () => await dataService
  .get<Response<Character>>('people')
  .then(r => r.data)

export const getMovie = (search: string) => async () => await dataService
  .get<Response<Film>>('films', { params: { search }})
  .then(r => r.data)
export const getCharacterByID = (id: number) => async () => await dataService
  .get<Character>(`people/${id}/`)
  .then(r => r.data)




export const getEpisodeImage = (id: number) =>
  `${IMG_BASE_URL}/films/${id}.jpg`
export const getCharacterImage = (id: number) =>
  `${IMG_BASE_URL}/characters/${id}.jpg`
