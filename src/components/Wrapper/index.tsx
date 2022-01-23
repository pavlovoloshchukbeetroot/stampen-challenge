import styles from "./styles.module.scss"
import cn from "clsx"
import type { FC, HTMLAttributes } from "react"


interface WrapperProps
extends HTMLAttributes<HTMLDivElement> {}

export const Wrapper: FC<WrapperProps> = ({ className, ...rest }) => (
  <div {...rest} className={cn(styles.wrapper, className)} />
)
