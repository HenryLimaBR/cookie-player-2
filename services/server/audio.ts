import ytdl from 'ytdl-core'

export class AudioFormatService {
  public static async execute(url: string) {
    const formats = (await ytdl.getInfo(url)).formats
    return ytdl.filterFormats(formats, 'audioonly')[0]
  }
}

export class AudioStreamService {
  public static async execute(url: string) {
    const stream = ytdl(url, { filter: 'audioonly', quality: 'highestaudio' })
    return stream
  }
}