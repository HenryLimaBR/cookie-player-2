import React, { useContext, useEffect } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import { PageWrapper } from '../../styles/Pages'
import { Loader } from '../../components/Loader'
import { List } from '../../components/List'
import { searchContext } from '../../contexts/searchContext'

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
    return null
  }

  return (
    <PageWrapper>
      {
        searchLoading
          ? <Loader />
          : <List results={searchResults} />
      }
    </PageWrapper>
  )
}

export default Search