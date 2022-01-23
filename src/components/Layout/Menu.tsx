import cn from "clsx"
import styles from "./styles.module.scss"
import { NavLink, useLocation } from "react-router-dom"
import type { FC, HTMLAttributes } from "react"

interface MenuProps
extends HTMLAttributes<HTMLUListElement> {}

export const Menu: FC<MenuProps> = ({ className, ...rest }) => {
  const { pathname } = useLocation()
  const areMovieRoutes = pathname === '/' || pathname.startsWith('/movies')
  const areCharacterRoutes = pathname.startsWith('/characters')

  return (
    <ul {...rest} className={cn(styles.menu, className)}>
      <li className={cn(styles.item, { [styles.active]: areMovieRoutes })}>
        <NavLink to="/">Movies</NavLink>
      </li>
      <li className={cn(styles.item, { [styles.active]: areCharacterRoutes })}>
        <NavLink to="/characters">Characters</NavLink>
      </li>
    </ul>
  )
}
