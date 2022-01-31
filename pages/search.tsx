import React, { useContext, useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'

import { PageWrapper } from '../styles/Pages'
import { Loader } from '../components/Loader'
import { theme } from '../themes/default'
import { SearchList } from '../components/SearchList'
import { searchContext } from '../contexts/searchContext'

type SearchPageProps = {
  children?: React.ReactNode
}

const Search: NextPage<SearchPageProps> = (props) => {
  const { q } = useRouter().query
  const { searchLoading, searchResults, search } = useContext(searchContext)

  useEffect(() => {
    q && search(q as string)
  }, [q, search])

  if (!q) {
    return <h1 style={{ color: theme.colors.fg5 }} >No search params!</h1>
  }

  return (
    <PageWrapper>
      <Head>
        <title>Search: {q.toString().toUpperCase()}</title>
      </Head>

      {
        searchLoading
          ? <Loader />
          : <SearchList results={searchResults} />
      }
    </PageWrapper>
  )
}

export default Search