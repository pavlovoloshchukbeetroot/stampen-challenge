import { useState, useCallback } from "react"
import cn from "clsx"
import styles from "./styles.module.scss"
import { Menu } from "./Menu"
import { Media } from "../Media"
import * as RowShift from "../RowShift"
import type { FC, HTMLAttributes, MouseEventHandler } from "react"

interface NavigationProps
extends HTMLAttributes<HTMLDivElement> {}

export const Navigation: FC<NavigationProps> = ({ className, ...rest }) => {
  const [ isOpen, setOpenState ] = useState(false)
  const clickHandler: MouseEventHandler = useCallback(event => {
    const target = event.target as HTMLElement
    if (target.nodeName === 'A') setOpenState(false)
  }, [setOpenState])

  return (
    <nav {...rest} className={cn(styles.navigation, className)}>
      <svg className={styles.logo} viewBox="0 0 366 133" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" fill="currentColor"
          d="M267.186 77.397C268.71 81.831 270.357 86.61 272.004 91.385C278.093
             109.04 284.195 126.662 284.195 126.662L286.059 132.045H320.327L365.498
             0.42601H315.698L313.84 5.82201C310.866 14.457 306.919 25.853 303.544
             35.498C303.035 34.035 302.505 32.497 301.957 30.887L291.442
             0.0059967H243.299L230.965 35.057C227.512 25.351 223.509 14.04 220.449 
             5.366L218.567 0.0319977L169 0L115.007 -1.52588e-05C104.549 -1.52588e-05 
             94.836 3.89997 87.665 12.104C81.851 18.756 78.035 27.533 77.459 35.581C76.486 
             49.092 79.596 53.974 94.515 70.783C98.845 75.66 102.962 80.299 104.336
             82.269C104.314 82.348 104.294 82.399 104.282 82.428C104.267 82.44 104.244
             82.458 104.212 82.48L103.39 83.052H0V131.182H79.662C108.184 131.182 122.262
             131.155 130.556 130.547C140.046 129.852 143.074 128.224 147.61 125.407L148.176
             125.056C162.438 116.235 169.788 95.229 163.598 80.982C161.688 76.624 149.595
             61.236 148.222 59.496L148.202 59.4708C144.404 54.6613 138.158 46.752 137.168
             44.46C137.192 44.267 137.239 44.067 137.289 43.928C137.454 43.886 137.77 43.83
             138.29 43.83L183.869 43.7007L213.626 131.157H247.583L267.186 77.397ZM294.385
             33.468L285.715 8.007V8.006H248.964L231.074 58.847L231.072 58.849C230.833 58.849
             212.904 8.028 212.904 8.028L180.174 8.007H115.02C96.74 8.007 86.28 24.423 85.44
             36.153C84.7 46.433 86.21 49.373 100.5 65.473C112.59 79.093 112.9 79.573 112.3
             83.253C111.87 85.813 110.74 87.683 108.79 89.043L105.9
             91.053H8V123.183H70.27H79.662C137.511 123.183 136.18 123.065 143.97
             118.252C154.9 111.492 160.9 94.852 156.26 84.172C155.41 82.232 148.96 73.352
             141.94 64.452C131.12 50.752 129.15 47.732 129.15 44.712C129.15 42.252 130.23
             35.832 138.29 35.832L189.592 35.6862L219.354 123.157H241.984L267.454
             53.306C267.354 53.574 291.754 124.045 291.754 124.045H314.614L354.294
             8.42601H321.404C321.404 8.42601 304.434 57.707 303.834 58.237C303.827
             58.243 303.819 58.247 303.81 58.247C303.264 58.247 299.076 47.236 294.385
             33.468Z" />
      </svg>
      <Media till="tablet">
        <button className={styles.switcher} onClick={setOpenState.bind(0, !isOpen)}>
          <RowShift.Container index={+isOpen}>
            <RowShift.Item>MENU</RowShift.Item>
            <RowShift.Item>CLOSE</RowShift.Item>
          </RowShift.Container>
        </button>
        <div className={cn(styles.overlay, { [styles.open]: isOpen })}
          onClick={clickHandler}>
          <Menu />
        </div>
      </Media>
      <Media from="tablet">
        <Menu />
      </Media>
    </nav>
  )
}
