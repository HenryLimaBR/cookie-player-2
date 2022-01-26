export class Player {
  public core: HTMLAudioElement
  public ready: boolean = false
  
  constructor() {
    this.core = new Audio()
    this.ready = true
  }

  public async play() {
    await this.core.play()
  }

  public set src(src: string) {
    this.core.src = src
  }
}