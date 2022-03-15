import type { NextApiRequest, NextApiResponse } from 'next'
import { SearchService } from '../../services/server/search'
import type { AudioData } from '../../@types/media'

const searchHandler = async (req: NextApiRequest, res: NextApiResponse<AudioData[] | string>) => {
  const { q } = req.query
  if (!q) return res.status(400).send('No "q" provided!')
  const results: AudioData[] = (await SearchService.execute(q as string)).map((video) => {
    return {
      id: video.videoId,
      title: video.title,
      duration: video.seconds,
      timestamp: video.timestamp,
      url: video.url,
      image: video.image || video.thumbnail,
      views: video.views,
      addedAt: new Date(),
      lastListenedAt: new Date()
    }
  })
  return res.status(200).json(results)
}

export default searchHandler