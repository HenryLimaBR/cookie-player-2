export class Player {
  public core: HTMLAudioElement
  public ready: boolean = false
  public userInteraction: boolean = false
  
  constructor() {
    this.core = new Audio()
    this.ready = true
  }

  public play() {
    if (!this.userInteraction) this.userInteraction = true
    this.core.play()
  }

  public set src(src: string) {
    this.core.src = src
  }
}