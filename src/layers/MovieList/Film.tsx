import styles from "./styles.module.scss"
import { Link } from "react-router-dom"
import { getEpisodeImage } from "selectors"
import { title2url } from "utils"
import type { FC } from "react"
import type { Film as FilmProps } from "response"

export const Film: FC<FilmProps> = ({ title, episode_id }) => (
  <figure className={styles.film}>
    <img width={400} height={550} 
      src={getEpisodeImage(episode_id)} 
      alt={`Cover to film: ${title}`} />
    <div className={styles.overlay} />
    <figcaption className={styles.caption}>
      <div>{title}</div>
      <Link className={styles.link} to={`/movies/${title2url(title)}`}>Inspect</Link>
    </figcaption>
  </figure>
)
