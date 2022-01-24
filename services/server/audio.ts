import ytdl from 'ytdl-core'

export class AudioService {
  public static async execute(url: string) {
    const formats = (await ytdl.getInfo(url)).formats
    return ytdl.filterFormats(formats, 'audioonly')[0]
  }
}