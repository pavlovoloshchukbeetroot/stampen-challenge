import cn from "clsx"
import styles from "./styles.module.scss"
import type { FC, HTMLAttributes } from "react"

interface ContentProps
extends HTMLAttributes<HTMLDivElement> {}

export const Content: FC<ContentProps> = ({ className, ...rest }) => (
  <div {...rest} className={cn(styles.content, className)} />
)
