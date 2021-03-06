export interface SearchAudioData {
  id: string
  title: string
  duration: number
  timestamp: string
  url: string
  image: string
  url: string
  views: number
}

export interface AudioData extends SearchAudioData {
  lastListenedAt: Date
}