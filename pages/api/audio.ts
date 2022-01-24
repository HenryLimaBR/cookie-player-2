import type { NextApiRequest, NextApiResponse } from 'next'
import ytdl from 'ytdl-core'
import { AudioService } from '../../services/server/audio'

const audioHandler = async (req: NextApiRequest, res: NextApiResponse<ytdl.videoFormat | string>) => {
  const { url } = req.query
  if (!url) return res.status(400).send('No "url" provided')
  const audio = await AudioService.execute(url as string)
  return res.status(200).json(audio)
}

export default audioHandler