import React, { FC } from 'react'
import '../styles/globals.css'

const MyApp: FC = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
