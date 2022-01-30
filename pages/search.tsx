import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import type { VideoSearchResult } from 'yt-search'

import { PageWrapper } from '../styles/Pages'
import { Loader } from '../components/Loader'
import { getSearch } from '../services/client/api'
import { theme } from '../themes/default'
import { SearchList } from '../components/SearchList'

type SearchPageProps = {
  children?: React.ReactNode
}

const Search: NextPage<SearchPageProps> = (props) => {
  const router = useRouter()
  const { q } = router.query
  const [searchResults, setSearchResults] = React.useState<VideoSearchResult[]>([])

  useEffect(() => {
    if (q) {
      getSearch(q as string).then(setSearchResults)
    }
  }, [q])

  if (!q) {
    return <h1 style={{ color: theme.colors.fg5 }} >No search params!</h1>
  }

  return (
    <PageWrapper>
      <Head>
        <title>Search: {q.toString().toUpperCase()}</title>
      </Head>

      {
        searchResults.length < 1
          ? <Loader />
          : <SearchList results={searchResults} />
      }
    </PageWrapper>
  )
}

export default Search