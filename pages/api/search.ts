import type { NextApiRequest, NextApiResponse } from 'next'
import yts from 'yt-search'
import { SearchService } from '../../services/server/search'

const searchHandler = async (req: NextApiRequest, res: NextApiResponse<yts.VideoSearchResult[] | string>) => {
  const { q } = req.query
  if (!q) return res.status(400).send('No "q" provided!')
  const results = await SearchService.execute(q as string)
  
  return res.status(200).json(results)
}

export default searchHandler