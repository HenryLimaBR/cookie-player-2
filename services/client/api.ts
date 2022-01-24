import axios from 'axios'
import type { VideoSearchResult } from 'yt-search'
import type { videoFormat } from 'ytdl-core'

export async function getSearch(q: string) {
  const response = await axios.get<VideoSearchResult[]>('/api/search', {
    params: { q }
  })

  return response.data
}

export async function getAudio(url: string) {
  const response = await axios.get<videoFormat>('/api/audio', {
    params: { url }
  })

  return response.data
}