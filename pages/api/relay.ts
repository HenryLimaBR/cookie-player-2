import type { NextApiRequest, NextApiResponse } from 'next'
import { AudioStreamService } from '../../services/server/audio'

const relayHandler = async (req: NextApiRequest, res: NextApiResponse<ReadableStream | string>) => {
  const { url } = req.query
  if (!url) return res.status(400).send('No "url" provided')
  const audio = await AudioStreamService.execute(url as string)
  audio.pipe(res)
}

export default relayHandler