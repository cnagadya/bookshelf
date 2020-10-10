import { loadDevTools } from './dev-tools/load'
import './bootstrap'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { ReactQueryConfigProvider } from 'react-query'

const queryConfig = {
  queries: {
    retry: (count, error) => error.status !== 404 && count < 2,
    useErrorBoundary: true,
    refetchOnWindowFocus: false,
  },
}

loadDevTools(() => {
  ReactDOM.render(<ReactQueryConfigProvider config={queryConfig}>
    <App />
  </ReactQueryConfigProvider>
    , document.getElementById('root'))
})
