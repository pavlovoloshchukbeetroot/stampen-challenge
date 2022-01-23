import { useRef, memo } from "react"
import styles from "./styles.module.scss"
import cn from "clsx"
import { randomIntBetween } from "utils"
import type { HTMLAttributes } from "react"

import babyYoda from "./baby-yoda.icon.svg"
import darthVader from "./darth-vader.icon.svg"
import r2d2 from "./r2-d2.icon.svg"


const ICONS = [ babyYoda, darthVader, r2d2 ]
interface LoaderProps
extends HTMLAttributes<HTMLDivElement> {}

export const Loader = memo<LoaderProps>(({ className, ...rest }) => {
  const randomIndex = useRef<number>(randomIntBetween(0, ICONS.length))

  return (
    <div {...rest} className={cn(styles.loader, className)}>
      <img src={ICONS[randomIndex.current]} alt="Loading icon" />
      <span>LOADING</span>
    </div>
  )
})
