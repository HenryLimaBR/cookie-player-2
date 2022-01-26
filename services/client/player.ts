import { getAudio } from './api'

export class Player {
  public core: HTMLAudioElement
  public ready: boolean = false
  
  constructor() {
    this.core = new Audio()
    this.ready = true
  }

  public async play(url: string) {
    const audio = await getAudio(url)
    this.src = audio.url
    this.core.play()
      .catch(() => {
        console.warn('Failed to play from source! Fallback to Relay.')
        this.src = `/api/relay/${url}`
        this.core.play()
      })
  }

  public set src(src: string) {
    this.core.src = src
  }
}