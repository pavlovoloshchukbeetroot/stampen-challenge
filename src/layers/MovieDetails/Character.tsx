import { useQuery } from "react-query"
import { useEffect } from "react"
import { getCharacterByID, getCharacterImage } from "selectors"
import { useExploredCharacters } from "exploration.state"
import styles from "./styles.module.scss"
import type { FC, HTMLAttributes } from "react"

interface CharacterProps
extends HTMLAttributes<HTMLDivElement> {
  cid: number,
}

export const Character: FC<CharacterProps> = ({ cid }) => {
  const [ids] = useExploredCharacters()
  const query = useQuery(
    ['character', cid], 
    getCharacterByID(cid)
  )

  useEffect(() => {
    if (!ids.has(cid)) ids.add(cid)
  }, [ids, cid])

  return (
    <figure className={styles.character}>
      <div className={styles.photo}>
        {query.isSuccess && (
          <img src={getCharacterImage(cid)} 
            alt={`Film character ${query.data.name}`} />
        )}
      </div>
      <figcaption className={styles.name}>
        {query.isLoading && 'Loading'}
        {query.isSuccess && query.data.name}
      </figcaption>
    </figure>
  )
}
