import { useRef, useState, useEffect, useMemo, Children, cloneElement } from "react"
import styles from "./styles.module.scss"
import cn from "clsx"
import type { FC, HTMLAttributes } from "react"

interface Dimmensions {
  height: number,
  width: number,
}

interface ContainerProps
extends HTMLAttributes<HTMLSpanElement> {
  direction?: "horizontal" | "vertical",
  align?: "center" | "left" | "right",
  index: number,
}

interface ItemProps
extends HTMLAttributes<HTMLSpanElement> {
  active?: boolean
}

const initialState: Dimmensions = {
  height: 0,
  width: 0,
}

const calculateOffset = (
  key: keyof Dimmensions,
  sizes: Dimmensions[],
  targetIndex: number,
): number => sizes.reduce(
  (value, item, index) => (index < targetIndex) 
    ? value + item[key]
    : value,
0)

export const Container: FC<ContainerProps> = ({ 
  direction = 'vertical', 
  children,
  align,
  index,
  ...rest
}) => {
  const containerRef = useRef<HTMLSpanElement>(null)
  const [ sizes, setSizes ] = useState<Dimmensions[]>(
    Children.map(children, _ => initialState) as Dimmensions[]
  )
  const offset = useMemo(() => ({
    x: direction === 'vertical' ? 0 : calculateOffset('width', sizes, index),
    y: direction === 'horizontal' ? 0 : calculateOffset('height', sizes, index),
  }), [direction, sizes, index])

  useEffect(() => {
    const children = Array.from(containerRef.current!.children)
    setSizes(children.map(child => ({
      width: child.clientWidth,
      height: child.clientHeight,
    } as Dimmensions)))
  }, [direction])

  return (
    <span {...rest} className={styles.container}
      style={{
        width: sizes[index].width,
        height: sizes[index].height,
      }}>
      <span ref={containerRef}
        className={cn(styles.wrapper, styles[direction])}
        style={{ transform: `translate(-${offset.x}px, -${offset.y}px)` }}>
        {Children.map(children, (child: any, currentIndex) => cloneElement(child, { 
          active: currentIndex === index
        }))}
      </span>
    </span>
  )
}

export const Item: FC<ItemProps> = ({ className, active, ...rest }) => (
  <span {...rest} className={cn(styles.item, className, { [styles.active]: active })} />
)
