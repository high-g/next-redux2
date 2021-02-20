import '@/styles/globals.css'
import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'

const MyApp: FC = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </React.Fragment>
  )
}

export default MyApp
