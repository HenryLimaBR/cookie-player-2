import type { NextApiRequest, NextApiResponse } from 'next'
import { SearchService } from '../../services/server/search'
import type { SearchAudioData } from '../../@types/media'

const searchHandler = async (req: NextApiRequest, res: NextApiResponse<SearchAudioData[] | string>) => {
  const { q } = req.query
  if (!q) return res.status(400).send('No "q" provided!')
  const results: SearchAudioData[] = (await SearchService.execute(q as string)).map((video) => {
    return {
      id: video.videoId,
      title: video.title,
      duration: video.seconds,
      timestamp: video.timestamp,
      url: video.url,
      image: video.image || video.thumbnail,
      views: video.views
    }
  })
  return res.status(200).json(results)
}

export default searchHandler