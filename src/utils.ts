export const title2url = (title: string) => 
  title.toLowerCase().replaceAll(' ', '-')

export const url2title = (url: string) => 
  url.replaceAll('-', ' ')

export const randomIntBetween = (from: number, to: number) => 
  Math.floor(Math.random() * (to - from) + from)

export const extractId = (uri: string) => 
  Number(/\d+\/$/.exec(uri)?.[0].slice(0, -1))
