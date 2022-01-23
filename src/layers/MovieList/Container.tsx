import { useQuery } from "react-query"
import { Wrapper } from "components"
import { getMovies } from "selectors"
import { Film } from "./Film"
import { Loader } from "components"
import styles from "./styles.module.scss"
import type { FC } from "react"

export const Container: FC = () => {
  const query = useQuery('movies', getMovies)

  return (
    <Wrapper>
      <h1>Movies</h1>
      <div className={styles.articles}>
        {query.isLoading && <Loader />}
        {query.isSuccess && (query.data as any).results
          .map((film: any, index: number) => <Film key={index} {...film} /> )}
      </div>
    </Wrapper>
  )
}
