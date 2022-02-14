import axios from 'axios'
import type { SearchAudioData } from '../../@types/media'
import type { videoFormat } from 'ytdl-core'

export async function getSearch(q: string) {
  const response = await axios.get<SearchAudioData[]>('/api/search', {
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