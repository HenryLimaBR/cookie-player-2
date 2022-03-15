import type { NextApiRequest, NextApiResponse } from 'next'
import type { videoFormat } from 'ytdl-core'
import { AudioFormatService } from '../../services/server/audio'

const audioHandler = async (req: NextApiRequest, res: NextApiResponse<videoFormat | string>) => {
  const { url } = req.query
  if (!url) return res.status(400).send('No "url" provided')
  const audio = await AudioFormatService.execute(url as string)
  return res.status(200).json(audio)
}

export default audioHandler