// export interface getBannerlist {
//   data: Banner[]
//   returnCode: string
//   success: boolean
// }

interface List {
  acm: string
  height: number
  height923: number
  image: string
  image923: string
  link: string
  title: string
  width: number
  width923: number
}

export interface Banner {
  context: {
    currentTime: number
  }
  isEnd: boolean
  list: List[]
  nextPage: number
}
