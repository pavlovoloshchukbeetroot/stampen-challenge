import { useState, useEffect } from "react"
import type { FC } from "react"

const breakPoints = {
  mobile:     480,
  tablet:     720,
  desktopS:   960,
  desktop:   1240,
  desktopHD: 1920,
}

interface MediaProps {
  from?: Exclude<keyof typeof breakPoints, 'mobile'>,
  till?: Exclude<keyof typeof breakPoints, 'desktopHD'>,
  other?: string[]
}

export const Media: FC<MediaProps> = ({ from, till, other, children }) => {
  const [ isMatch, setMatchState ] = useState(false)
  
  useEffect(() => {
    const options = [
      from && `(min-width: ${breakPoints[from]}px)`,
      till && `(max-width: ${breakPoints[till]}px)`,
      other && other.join(' and '),
    ].filter(p => p).join(' and ')

    const matchMediaList = matchMedia(`screen and ${options}`)
    matchMediaList.addEventListener('change', event => setMatchState(event.matches))
    setMatchState(matchMediaList.matches)
  }, [from, till, other])

  return isMatch ? <>{children}</> : null
}
