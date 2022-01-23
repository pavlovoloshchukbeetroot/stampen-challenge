import React from "react"
import cn from "clsx"
import styles from "./styles.module.scss"
import type { FC, HTMLAttributes } from "react"

interface ContainerProps
extends HTMLAttributes<HTMLDivElement> {}

export const Container: FC<ContainerProps> = ({ className, ...rest }) => (
  <div {...rest} className={cn(styles.container, className)} />
)
