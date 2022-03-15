import type { NextApiRequest, NextApiResponse } from 'next'
import SpotifyApi from 'spotify-web-api-node'
import { SearchService } from '../../services/server/search'

const topFiftyHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const api = new SpotifyApi()
  api.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN || '')

  const playlist = await api.getPlaylist('37i9dQZEVXbNG2KDcFcKOF')

  const tracks = playlist.body.tracks.items.map(async (track) => {
    const tsearchquery = `${track.track.name} ${track.track.artists.map(a => a.name).join(' ')}`
    const video = (await SearchService.execute(tsearchquery))[0]

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

  return res.json(await Promise.all(tracks))
}

export default topFiftyHandler