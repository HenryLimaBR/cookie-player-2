import yts from 'yt-search'

export class SearchService {
  public static async execute(q: string) {
    const results = (await yts(q as string)).videos
    return results.filter(video => video.seconds < 1800)
  }
}