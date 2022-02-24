export interface AudioData {
  id: string
  title: string
  duration: number
  timestamp: string
  url: string
  image: string
  url: string
  views: number
  lastListenedAt: Date
  addedAt: Date
}

export interface LastAudioState {
  audio: AudioData
  currentTime: number
}