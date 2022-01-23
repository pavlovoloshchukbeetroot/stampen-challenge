import styles from "./styles.module.scss"
import { useQuery } from "react-query"
import { Wrapper, Loader } from "components"
import { Link } from "react-router-dom"
import { getCharacters, getCharacterImage } from "selectors"
import { extractId } from "utils"
import { useExploredCharacters } from "exploration.state"
import type { FC } from "react"


export const CharacterList: FC = () => {
  const query = useQuery('characters', getCharacters)
  const [ids] = useExploredCharacters()
  const cards = query.data?.results
    .filter(character => ids.has(extractId(character.url)))

  return (
    <Wrapper className={styles.characters}>
      <h1>Characters</h1>
      {!!ids.size && query.isLoading && <Loader />}
      {!!ids.size && query.isSuccess && (
        <div className={styles.list}>
          {cards?.map((character, index) => (
            <figure key={index} className={styles.card}>
              <img src={getCharacterImage(extractId(character.url))} alt="" />
              <figcaption className={styles.title}>
                {character.name}
              </figcaption>
            </figure>
          ))}
          <div className={styles.tip}>
            <Link to="/">Explore films</Link> to enable more character cards
          </div>
        </div>
      )}
      {!ids.size && (
        <div className={styles.tip}>
          <Link to="/">Explore films</Link> to enable character cards
        </div>
      )}
    </Wrapper>
  )
}
