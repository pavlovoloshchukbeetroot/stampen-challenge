import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import { Wrapper } from "components"
import { getMovie, getEpisodeImage } from "selectors"
import { Loader } from "components"
import { Character } from "./Character"
import styles from "./styles.module.scss"
import { url2title, extractId } from "utils"
import type { FC } from "react"


export const Container: FC = () => {
  const { movieName } = useParams()
  const query = useQuery(
    ['movie', movieName], 
    getMovie(url2title(movieName as string))
  )
  const data = query.data?.results[0]

  return (
    <Wrapper>
      {query.isLoading && <Loader />}
      {query.isSuccess && (
        <div className={styles.movie}>
          <h1>{data!.title}</h1>
          <div className={styles.cover}>
            <img src={getEpisodeImage(data!.episode_id)} 
              alt={`Cover to film: ${data!.title}`} />
          </div>
          <div className={styles.details}>
            <ul className={styles.details}>
              <li className={styles.item}>
                <span>Date created: </span>
                {data!.release_date}
              </li>
              <li className={styles.item}>
                <span>Director: </span>
                {data!.director}
              </li>
              <li className={styles.item}>
                <span>Producer{Array.isArray(data?.producer) && 's'}: </span>
                {data!.title}
              </li>
            </ul>
            <p className={styles.crawl}>
              {data!.opening_crawl}
            </p>
            <div className={styles.clear} />
            <h2>Characters</h2>
            <div className={styles.characters}>
              {data!.characters.map((uri, index) => (
                <Character key={index} cid={extractId(uri)} />
              ))}
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  )
}
