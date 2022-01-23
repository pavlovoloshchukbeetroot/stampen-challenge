import { useEffect, useRef } from "react"
import { Logo } from "./Logo"
import styles from "./styles.module.scss"
import type { FC } from "react"


export const Header: FC = props => {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const hintRef = useRef<HTMLDivElement>(null)


  useEffect(() => { // HINT: no rerenders - greater performance
    const handler = () => {
      const { scrollTop } = document.documentElement
      const hintStyle = hintRef.current!.style
      const wrapperStyle = wrapperRef.current!.style
      if (scrollTop > window.innerHeight * .1 && hintStyle.opacity !== '0') 
        hintRef.current!.style.opacity = '0'
      else if (scrollTop < window.innerHeight * .1 && hintStyle.opacity !== '1')
        hintRef.current!.style.opacity = '1'
      if (scrollTop < window.innerHeight)
        wrapperStyle.transform = `translate3d(0, ${scrollTop * .7}px, 0)`
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.wrapper} ref={wrapperRef}>
        <Logo />
      </div>
      <div className={styles.hint} ref={hintRef}>
        scroll down
      </div>
    </header>
  )
}
