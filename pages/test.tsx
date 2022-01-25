import React, { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import ytdl from 'ytdl-core'

interface IProps {
  children?: React.ReactNode
  formats: ytdl.videoFormat[]
}

const Test: React.FC<IProps> = (props) => {
  useEffect(() => {
    console.log(props.formats)
  }, [props.formats])

  return (
    <div></div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { url } = context.query
  const info = await ytdl.getInfo(url as string)

  return {
    props: {
      formats: ytdl.filterFormats(info.formats, 'audioonly')
    }
  }
}

export default Test