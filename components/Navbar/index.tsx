import React from 'react'
import Link from 'next/link'
import { MdHome, MdSearch } from 'react-icons/md'

import { NavbarWrapper, NavDiv } from './styles'
import { theme } from '../../themes/default'

interface IProps {
  children?: React.ReactNode
}

export const Navbar: React.FC<IProps> = (props) => {
  return (
    <NavbarWrapper>
      <Link href='/' passHref>
        <NavDiv>
          <MdHome size={24} color={theme.colors.fg5} />
        </NavDiv>
      </Link>

      <Link href={{
        pathname: '/search',
        query: {
          'q': ''
        }
      }} passHref>
        <NavDiv>
          <MdSearch size={24} color={theme.colors.fg5} />
        </NavDiv>
      </Link>
    </NavbarWrapper>
  )
}