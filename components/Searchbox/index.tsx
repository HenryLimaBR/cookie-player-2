import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { MdSearch, MdClose } from 'react-icons/md'

import { SearchBoxWrapper } from './styles'
import { theme } from '../../themes/default'

type Props = {
  children?: React.ReactNode
}

export const Searchbox: React.FC<Props> = (props) => {
  const router = useRouter() 

  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = () => {
    router.push(`/search?q=${searchQuery}`, undefined, { shallow: true})
  }

  return (
    <SearchBoxWrapper>
      <div>
        <input
          type="text"
          spellCheck='false'
          placeholder='Search Here!'
          value={searchQuery}
          onInput={(e) => {
            setSearchQuery(e.currentTarget.value)
          }}
          onKeyPress={(e) => { e.key === 'Enter' && handleSearch() }}
        />

        {
          searchQuery.length > 0 && (
            <button
              className='clear'
              onClick={() => setSearchQuery('')}
            >
              <MdClose size={16} color={theme.colors.fg5} />
            </button>
          )
        }
      </div>

      <button
        className='search'
        onClick={handleSearch}
      >
        <MdSearch size={24} color={theme.colors.fg5} />
      </button>
    </SearchBoxWrapper>
  )
}