const STORAGE_KEY = 'explored-characters'
const initialData = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
const CharacterIDs = new Set<number>(initialData)

export function useExploredCharacters(): [typeof CharacterIDs, (a: number[]) => void] {
  const addHandler = (ids: number[]) =>
    ids.forEach(id => CharacterIDs.add(id))

  return [
    CharacterIDs,
    addHandler,
  ]
}
