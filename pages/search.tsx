import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import type { VideoSearchResult } from 'yt-search'
import Image from 'next/image'

import { PageWrapper } from '../styles/Pages'
import { Loader } from '../components/Loader'
import { getAudio, getSearch } from '../services/client/api'
import { playerContext } from '../contexts/playerContext'

interface IProps {
  children?: React.ReactNode
}

const Search: NextPage<IProps> = (props) => {
  const router = useRouter()
  const { q } = router.query
  const { player } = React.useContext(playerContext)
  const [searchResults, setSearchResults] = React.useState<VideoSearchResult[]>([])

  useEffect(() => {
    if (q) {
      getSearch(q as string).then(setSearchResults)
    }
  }, [q])

  if (!q) {
    return <h1>No search params!</h1>
  }

  return (
    <PageWrapper>
      <Head>
        <title>🍁 Search: {q}</title>
      </Head>

      {
        searchResults.length < 1
          ? (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              gap: 4
            }}>
              <h1>Searching for: &quot;{q}&quot;</h1>
              <Loader />
            </div>
          )
          : (
            <ul style={{
              listStyleType: 'none',
              overflowY: 'auto',
            }}>
              {
                searchResults.map((videoInfo) => (
                  <li key={videoInfo.videoId} style={{ border: '2px solid #fff' }}>
                    <h3>{videoInfo.title}</h3>

                    <p>{videoInfo.description}</p>

                    <h5>{videoInfo.timestamp}</h5>

                    <Image
                      src={videoInfo.image}
                      alt={videoInfo.title}
                      width={128}
                      height={128}
                      objectFit='cover'
                      objectPosition='center'

                      onClick={() => {
                        getAudio(videoInfo.videoId).then((audio) => {
                          player.src = audio.url
                          player.play()
                            .catch(() => {
                              console.warn('Cant play from Direct Source! Falling Back to Relay.')
                              player.src = `/api/relay?url=${videoInfo.url}`
                              player.play()
                            })
                        })
                      }}
                    />
                  </li>
                ))
              }
            </ul>
          )
      }
    </PageWrapper>
  )
}

export default Search